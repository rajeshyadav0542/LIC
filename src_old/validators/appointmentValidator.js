const { body, validationResult } = require('express-validator');

const db = require('../models');
exports.appointmentValidation = async (req) => {
    await body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .run(req);
    await body('mode_consultation')
        .notEmpty()
        .withMessage('Mode of Consultation is required')
        .run(req);

    await body('purpose')
        .notEmpty()
        .withMessage('Purpose is required')
        .run(req);
    await body('age')
        .notEmpty()
        .withMessage('Age is required')
        .run(req);
    await body('gender')
        .notEmpty()
        .withMessage('Gender is required')
        .run(req);

    await body('appointment_date')
        .notEmpty()
        .withMessage('Appointment Date is required')
        .run(req);

    await body('appointment_time')
        .notEmpty()
        .withMessage('Appointment Time is required')
        .run(req);
    await body('email')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .run(req);
    await body('phone')
        .notEmpty()
        .withMessage('phone is required')// Only validate if the phone is filled
        .isMobilePhone()
        .withMessage('Please provide a valid phone number')
        .run(req);



    return validationResult(req);
};