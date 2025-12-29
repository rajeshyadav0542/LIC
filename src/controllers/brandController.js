const brandService = require('../services/brandService');
const { brandValidation } = require('../validators/brandValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await brandService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'brand get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await brandValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            title:req.body.title,
            description:req.body.description,
            image:`/uploads/brand/${req.file.filename}`
        };
        console.log(data);
        const details = await brandService.create(data);
        res.status(201).json({ status: true, message: 'brand created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await brandValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the brand ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            image: req.file ? `/uploads/brand/${req.file.filename}` : null,  // Conditionally include image
        };

        
        const updatedbrand = await brandService.edit(data); 
        res.json(updatedbrand);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await brandService.delete(req);
        res.status(200).json({ status: true, message: 'brand deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};