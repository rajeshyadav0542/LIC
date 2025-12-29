const attributeValueService = require('../services/attributeValueService');
const { attributeValueValidation } = require('../validators/attributeValueValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await attributeValueService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Attribute value get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await attributeValueValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            attribute_id:req.body.attribute_id,
            attribute_value:req.body.attribute_value,
            // description:req.body.description,
            // image:`/uploads/attribute/${req.file.filename}`
        };
        console.log(data);
        const details = await attributeValueService.create(data);
        res.status(201).json({ status: true, message: 'attribute created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await attributeValueValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the attribute ID is passed in the body
            attribute_id:req.body.attribute_id,
            attribute_value:req.body.attribute_value,
            // description: req.body.description,
            // image: req.file ? `/uploads/attribute/${req.file.filename}` : null,   
        };

        
        const updatedattribute = await attributeValueService.edit(data); 
        res.json(updatedattribute);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await attributeValueService.delete(req);
        res.status(200).json({ status: true, message: 'attribute deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};




//Fet attribute value

exports.get_attribute_value = async (req, res) => {
    try {
        const { attribute_id, page, limit, search, sortBy, order } = req.query;
        const data = await attributeValueService.get_ajax_attr_value( { attribute_id, page, limit, search, sortBy, order });
        res.status(201).json({ status: true, message: 'Attribute value get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};