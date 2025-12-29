const userService = require('../services/userService');
const db = require('../models');
const { registerValidation, loginValidation, changePasswordValidation, otpValidation } = require('../validators/userValidator');
const { sendEmail, generateEmailContentAccount,forgetPasswordEmailContent } = require('../helpers/emailHelper');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
exports.register = async (req, res) => {
    try {
        console.log('');
        const errors = await registerValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }

        const user = await userService.register(req.body);
        res.status(201).json({ status: true, message: 'User registered successfully', user });

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {

        const errors = await loginValidation(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const result = await userService.login(req.body);
        res.status(200).json({ status: true, message: 'Login Successfully', data: result });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};

exports.send_otp = async (req, res) => {
    try {
        const errors = await otpValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const user = await userService.temp_register(req.body);
        console.log(user);
        res.status(201).json({ status: true, message: 'Otp send successfully', data: user });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.otp_verify = async (req, res) => {
    try {
        const errors = await otpValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const user = await userService.temp_verify(req.body);
        if (!user) {
            return res.status(400).json({ status: false, message: 'Invalid phone number or OTP.' });
        }
        res.status(200).json({ status: true, message: 'OTP verified successfully.', data: user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};



exports.sendResetPasswordEmail = async (req, res) => {
    try {

        const user = await db.User.findOne( {where:{ email:req.body.email }});
        
        if (!user || req.body.email=='' ) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
     
        const resetToken = Math.random().toString(36).substring(2, 15);
        const hashedToken = await bcrypt.hash(resetToken, 10);
        // Set expiration time (e.g., 1 hour from now)
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 1);

        // Store the token and expiration in the database
        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpires = expirationTime;
        await user.save();

        const resetLink = `${process.env.BASE_URL}reset-password?token=${hashedToken}&email=${req.body.email}`;
        const email_content = forgetPasswordEmailContent(resetLink);

        await sendEmail(
            req.body.email,
            'Password Reset Request 🔐',
            email_content
        );
        res.status(200).json({ status: true, message: 'Reset Link send Successfully', });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};
exports.reset_password = async (req, res) => { 
    const { email, token, newPassword, confirmPassword } = req.body;

    if (!email || !token || !newPassword || !confirmPassword) {
        return res.status(400).json({status:false,message:  'All fields are required' });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ status:false,message:  'Passwords do not match' });
    }

    try {
        const user = await db.User.findOne({
            where: {
                email,
                resetPasswordExpires: { [Op.gt]: new Date() } ,
                resetPasswordToken:token
            }
        });
        if (!user) {
            return res.status(400).json({ status:false,message: 'Invalid or expired token' });
        } 
    
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await user.update({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null
        });
        res.status(200).json({ status:true,message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status:true,message: 'Internal Server Error' });
    }
};
