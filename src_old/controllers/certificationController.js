const certificationService = require('../services/certificationService');
const { certificationValidation } = require('../validators/certificationValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await certificationService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'certification get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await certificationValidation(req);
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
            image:`/uploads/certification/${req.file.filename}`
        };
        console.log(data);
        const details = await certificationService.create(data);
        res.status(201).json({ status: true, message: 'certification created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await certificationValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the certification ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            image: req.file ? `/uploads/certification/${req.file.filename}` : null,  // Conditionally include image
        };

        
        const updatedcertification = await certificationService.edit(data); 
        res.json(updatedcertification);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await certificationService.delete(req);
        res.status(200).json({ status: true, message: 'certification deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};