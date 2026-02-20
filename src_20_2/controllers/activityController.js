const userService = require('../services/userService');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await userService.activity_get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Activity get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};