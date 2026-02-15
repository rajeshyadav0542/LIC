const userService = require('../services/userService');
const { registerValidation   }=require('../validators/userValidator');
const { appointmentValidation   }=require('../validators/appointmentValidator');
const appointmentService = require('../services/appointmentService');
exports.add = async (req, res) => {
    try {
        const errors = await appointmentValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message:errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const user = await appointmentService.create(req.body);
        res.status(201).json({ status:true,message: 'Appointment added successfully',  data:user.user});
    } catch (error) {
        res.status(400).json({ status:false,message: error.message });
    }
};


exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await appointmentService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Appointment get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.user_get = async (req, res) => {
    try { 
        req.query.id=req.user.id;
        console.log("=====================",req.user.id);
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await appointmentService.user_get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'User Appointment get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.appointment_deatails = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await appointmentService.appointment_deatails({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Appointment get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};