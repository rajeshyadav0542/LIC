const attributeService = require('../services/attributeService');
const { attributeValidation } = require('../validators/attributeValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await attributeService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'attribute get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await attributeValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            attribute_name:req.body.attribute_name,
            // description:req.body.description,
            // image:`/uploads/attribute/${req.file.filename}`
        };
        console.log(data);
        const details = await attributeService.create(data);
        res.status(201).json({ status: true, message: 'attribute created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await attributeValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the attribute ID is passed in the body
            attribute_name: req.body.attribute_name,
            // description: req.body.description,
            // image: req.file ? `/uploads/attribute/${req.file.filename}` : null,   
        };

        
        const updatedattribute = await attributeService.edit(data); 
        res.json(updatedattribute);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await attributeService.delete(req);
        res.status(200).json({ status: true, message: 'attribute deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};