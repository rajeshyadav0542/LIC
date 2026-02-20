const userService = require('../services/agentService');
const { registerValidation,referralValidation, loginValidation,changePasswordValidation,updateValidation   }=require('../validators/agentValidator');
exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const errors = await registerValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message:errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }

        const user = await userService.register(req.body);
        res.status(201).json({ status:true,message: 'User registered successfully', user });

    } catch (error) {
        res.status(400).json({ status:false,message: error.message });
    }
};

exports.referral = async (req, res) => {
    try {
        console.log(req.body);
        const errors = await referralValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message:errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }

        const user = await userService.referral(req.body);
        res.status(201).json({ status:true,message: 'Referral created successfully', user });

    } catch (error) {
        res.status(400).json({ status:false,message: error.message });
    }
};

exports.referral_list = async (req, res) => {
    try {
        const referrals = await userService.referral_list(req.body);
        res.status(200).json({ status: true, message: 'Referrals retrieved successfully', data: referrals });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};


exports.login = async (req, res) => {
    try {
       
        const errors = await loginValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message:errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        // const clientIP = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress.replace(/^::ffff:/, '');

        const result = await userService.login(req.body);

        
        res.status(200).json({status:true,message:'Login Successfully',data:result});
    } catch (error) {
        res.status(401).json({ status:false,message: error.message });
    }
};

exports.changePassword = async (req, res) => {
    try {
        // Validate request input
        const errors = await changePasswordValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }

        const { old_password, new_password,confirm_password } = req.body;
        const userId = req.user.id; // Assuming the user ID is available in the `req.user` object from middleware like JWT authentication.

        // Verify old password and update to new password
        const result = await userService.changePassword(userId, old_password, new_password);

        if (result.success) {
            return res.status(200).json({
                status: true,
                message: 'Password changed successfully',
            });
        } else {
            return res.status(400).json({
                status: false,
                message: result.message, // Return message from the service layer, e.g., "Old password is incorrect"
            });
        }
    } catch (error) {
        res.status(500).json({ 
            status: false, 
            message: error.message 
        });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming `userId` comes from a verified token
        console.log("req",userId);
        const updatedData = req.body; // Contains fields to update (e.g., name, email)
        const file = req.file ? req.file : null;
        console.log("file",file);
        const result = await userService.updateProfile(userId, updatedData,file);
        if (!result.success) {
            return res.status(400).json({ status: false, message: result.message });
        }
        res.status(200).json({ status: true, message: result.message, data: result.data });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred while updating the profile' });
    }
};


exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await userService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'User get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.edit = async (req, res) => {
    try {
       
        const errors = await updateValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message:errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const updatedData = req.body; // Contains fields to update (e.g., name, email)
        const file = req.file ? req.file : null;
        console.log("file================", req.file);
        const result = await userService.updateProfile(req.body.id, updatedData,file);
        if (!result.success) {
            return res.status(400).json({ status: false, message: result.message });
        }
        res.status(200).json({ status: true, message: result.message, data: result.data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};


