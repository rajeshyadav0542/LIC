const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const crypto = require("crypto");
const SECRET_KEY = process.env.SECRET_KEY;
const { sendEmail, generateEmailContentAccount,generateOrderEmailContent } = require('../helpers/emailHelper');

exports.order_create = async (order) => {

    console.log(order);
    let appointmentDetails = await db.Appointment.findOne({ where: { appointmentToken: order.token } });
    let user = await db.User.findOne({ where: { id: appointmentDetails.user_id } });
        await db.AppointmentPaymentDetails.create({user_id:appointmentDetails.user_id,
            appointment_id:appointmentDetails.id,
            appointmentToken:appointmentDetails.appointmentToken,amount:order.amount,receipt:order.receipt,order_id:order.id,status:order.status  });

    if (!user) {
        if (user.email) {
            const email_content = generateEmailContentAccount(user.name, user.email);
            // await sendEmail(
            //     email,
            //     'Account Created Successfully – Welcome!',
            //     email_content
            // );
        }
    }

    const appointmentToken = Math.random().toString(36).substring(2, 15);
    const hashedToken = await bcrypt.hash(appointmentToken, 10);

    // Create the appointment

    return {
        appointmentDetails
    };
};

exports.verify_update = async ({ order_id, payment_id, signature, token }) => {
    try {
        let appointmentDetails = await db.Appointment.findOne({ where: { appointmentToken: token } });
        if (!appointmentDetails) {
            throw new Error("Appointment details not found");
        }

        let user = await db.User.findOne({ where: { id: appointmentDetails.user_id } });
        let appointmentPaymentDetails = await db.AppointmentPaymentDetails.findOne({ where: { appointmentToken: token } });

        if (!appointmentPaymentDetails) {
            throw new Error("Payment details not found");
        }

        // Update payment details
        await db.AppointmentPaymentDetails.update(
            { payment_id, status: 'success', signature },
            { where: { appointmentToken: token, order_id } }
        );
        await db.Appointment.update(
            { payment_id: payment_id, payment_status: 'success' },
            { where: { appointmentToken: token } }
        );

        if (appointmentDetails.email) {
            const email_content = generateOrderEmailContent(appointmentDetails);
            await sendEmail(
                appointmentDetails.email,
                `🎉 Appointment Confirmation for ${appointmentDetails.appointment_date} at ${appointmentDetails.appointment_time} 🕒`,
                email_content
            );
        }

        return { success: true, appointmentDetails };
    } catch (error) {
        console.error("Error in verify_update:", error.message);
        return { success: false, message: error.message };
    }
};
