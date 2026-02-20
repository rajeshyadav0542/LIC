const teamService = require('../services/teamService');
const { teamValidation } = require('../validators/teamValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await teamService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'team get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await teamValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            name:req.body.name,
            designation:req.body.designation,
            image:`/uploads/team/${req.file.filename}`
        };
        console.log(data);
        const details = await teamService.create(data);
        res.status(201).json({ status: true, message: 'team created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await teamValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the team ID is passed in the body
            name: req.body.name,
            designation: req.body.designation,
            image: req.file ? `/uploads/team/${req.file.filename}` : null,  // Conditionally include image
        };

        
        const updatedteam = await teamService.edit(data); 
        res.json(updatedteam);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await teamService.delete(req);
        res.status(200).json({ status: true, message: 'team deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};