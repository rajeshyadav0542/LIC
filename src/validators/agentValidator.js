const { body, validationResult } = require('express-validator');
const userService = require('../services/agentService');
const db = require('../models');
const { Op } = require('sequelize');
exports.registerValidation = async (req) => {
    await body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .run(req);
    await body('bank')
        .notEmpty()
        .withMessage('Bang Name is required')
        .isLength({ min: 3 })
        .withMessage('Bang Name must be at least 3 characters long')
        .run(req);

    await body('email')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .custom(async (email) => {
            const existingUser = await db.Agent.findOne({ where: { email } });
            if (existingUser) {
                throw new Error('Email is already in use');
            }
        })
        .run(req);
    await body('phone')
        .notEmpty()
        .withMessage('Name is required')// Only validate if the phone is filled
        .isMobilePhone()
        .withMessage('Please provide a valid phone number')
        .custom(async (phone) => {
            const existingUser = await db.Agent.findOne({ where: { phone } });
            if (existingUser) {
                throw new Error('phone is already in use');
            }
        })
        .run(req);

    await body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .run(req);

    return validationResult(req);
};
exports.referralValidation = async (req) => {
    await body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .run(req);     
    await body('phone')
        .notEmpty()
        .withMessage('Phone is required')// Only validate if the phone is filled
        .isMobilePhone()
        .isLength({ min: 10 })
        .withMessage('Please provide a valid phone number')        
        .run(req);

    await body('category')
        .notEmpty()
        .withMessage('Name is required')
        .run(req);
    await body('agent_id')
        .notEmpty()
        .withMessage('Agent id is required')
        .run(req);

    return validationResult(req);
};

exports.loginValidation = async (req) => {
    await body('email')
        .custom(async (email) => {
            const existingUser = await db.Agent.findOne({
                where: {
                    [Op.or]: [
                        { email },
                        { phone: email }
                    ]
                }
            });

            if (!existingUser) {
                throw new Error('Invalid credentials!!');
            }
        })
        .run(req);
    await body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .run(req);
    return validationResult(req);
};
exports.changePasswordValidation = async (req) => {
    await body('old_password')
        .notEmpty()
        .withMessage('old_password is required')
        .isLength({ min: 3 })
        .withMessage('old_password must be at least 3 characters long')
        .run(req);

    await body('new_password')
        .isLength({ min: 6 })
        .withMessage('new_password must be at least 6 characters long')
        .run(req);

    await body('confirm_password')
        .isLength({ min: 6 })
        .withMessage('confirm_password must be at least 6 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.new_password) {
                throw new Error('new_password and confirm_password do not match');
            }
            return true;
        })
        .run(req);

    return validationResult(req);
};

exports.otpValidation = async (req) => {
    await body('phone')
        .notEmpty()
        .withMessage('Phone is required')
        .isMobilePhone()
        .withMessage('Please provide a valid phone number')
        .run(req);
    return validationResult(req);
};

exports.updateValidation = async (req) => {
    // Assuming you're using the user id from the URL parameters for profile update
    const { email, phone, id } = req.body;

    await body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .run(req);

    // Email validation (check if updated email is unique, if provided)
    if (email) {
        await body('email')
            .isEmail()
            .withMessage('Please provide a valid email address')
            .custom(async (email) => {
                const existingUser = await db.Agent.findOne({ where: { email, id: { [db.Sequelize.Op.ne]: id } } });
                if (existingUser) {
                    throw new Error('Email is already in use');
                }
            })
            .run(req);
    }

    // Phone validation (check if updated phone is unique, if provided)
    if (phone) {
        await body('phone')
            .isMobilePhone()
            .withMessage('Please provide a valid phone number')
            .custom(async (phone) => {
                const existingUser = await db.User.findOne({ where: { phone, id: { [db.Sequelize.Op.ne]: id } } });
                if (existingUser) {
                    throw new Error('Phone is already in use');
                }
            })
            .run(req);
    }    

    return validationResult(req);
};