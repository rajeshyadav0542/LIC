const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const crypto = require("crypto");
const SECRET_KEY = process.env.SECRET_KEY;
const { sendEmail,generateEmailContentAccount } = require('../helpers/emailHelper');

exports.create = async ({ name, email, password, phone, mode_consultation, purpose, age, gender, appointment_date, appointment_time, comments }) => {
    const hashedPassword = await bcrypt.hash(password || '12345678', 10);  
    let user = await db.User.findOne({ where: { phone } });
    if (!user) {
        // Create user if not found
        user = await db.User.create({
            name,
            email,
            password: hashedPassword,
            phone: phone ?? '',
            profile_img: '',
            gender,
            age
        });


        if (email) {
            const email_content = generateEmailContentAccount(name,email,password || '12345678');
            await sendEmail(
                email,
                'Account Created Successfully – Welcome!',
                email_content
            );
        }
    }
   
    const appointmentToken = Math.random().toString(36).substring(2, 15);
    const hashedToken = await bcrypt.hash(appointmentToken, 10);

    // Create the appointment
    const appointment = await db.Appointment.create({
        user_id: user.id,
        mode_consultation,
        purpose,
        age,
        gender,
        appointment_date,
        appointment_time,
        comments,
        email,
        phone,
        name,
        appointmentToken:hashedToken
    });

    // Generate token
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '7d' });
    const appoinemtLink = `${process.env.BASE_URL}appointment_pay?token=${hashedToken}`;
    // Return user and appointment data
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profile_img: user.profile_img ? process.env.PUBLIC_PATH_IMG + user.profile_img : '',
            token,
            appointment_id: appointment.id,
            appoinemtLink
       
        },
        appointment: {
            id: appointment.id,
            mode_consultation: appointment.mode_consultation,
            purpose: appointment.purpose,
            age: appointment.age,
            gender: appointment.gender,
            appointment_date: appointment.appointment_date,
            appointment_time: appointment.appointment_time,
            comments: appointment.comments,
            email,
            phone,
            name,
            appoinemtLink
        },
    };
};
exports.get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
   
    try {
      const whereClause = id
          ? { id }
          : search
          ? {
                name: {
                    [db.Sequelize.Op.like]: `%${search}%`, // Adjust `name` field as needed for filtering
                },
            }
          : {};
      const offset = (page - 1) * limit; // Calculate offset for pagination
      const appointments = await db.Appointment.findAndCountAll({
          where: whereClause,
          limit: parseInt(limit),
          offset: parseInt(offset),
          order: [[sortBy, order]],
      });
      const result = appointments.rows.map(appointment => ({
          ...appointment.toJSON(),
         
      }));
      return {
          data: result,
          currentPage: parseInt(page),
          totalItems: appointments.count,
          totalPages: Math.ceil(appointments.count / limit),
      };
  } catch (error) {
      console.error(error.message);
      throw error; // Handle the error appropriately in the caller function
  }





};

exports.user_get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
      const whereClause = id
          ? { user_id:id }
          : search
          ? {
                name: {
                    [db.Sequelize.Op.like]: `%${search}%`, // Adjust `name` field as needed for filtering
                },
            }
          : {};
      const offset = (page - 1) * limit; // Calculate offset for pagination
      const appointments = await db.Appointment.findAndCountAll({
          where: whereClause,
          limit: parseInt(limit),
          offset: parseInt(offset),
          order: [[sortBy, order]],
      });
      const result = appointments.rows.map(appointment => ({
          ...appointment.toJSON(),
         
      }));
      return {
          data: result,
          currentPage: parseInt(page),
          totalItems: appointments.count,
          totalPages: Math.ceil(appointments.count / limit),
      };
  } catch (error) {
      console.error(error.message);
      throw error; // Handle the error appropriately in the caller function
  }

};

exports.appointment_deatails = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
   
    try {
      const whereClause  = { appointmentToken:id??'' }
           
      const offset = (page - 1) * limit; // Calculate offset for pagination
      const appointments = await db.Appointment.findAndCountAll({
          where: whereClause,
          limit: parseInt(limit),
          offset: parseInt(offset),
          order: [[sortBy, order]],
      });
      const result = appointments.rows.map(appointment => ({
          ...appointment.toJSON(),
         
      }));

      let appointmentPaymentDetails = await db.AppointmentPaymentDetails.findAndCountAll({ where: { appointmentToken: id??'' } });
      return {
          data: result,
          currentPage: parseInt(page),
          totalItems: appointments.count,
          totalPages: Math.ceil(appointments.count / limit),
          appointmentPaymentDetails:appointmentPaymentDetails.rows
      };
  } catch (error) {
      console.error(error.message);
      throw error; // Handle the error appropriately in the caller function
  }





};