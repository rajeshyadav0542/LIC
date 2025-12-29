const collectionService = require('../services/collectionService');
const { collectionValidation } = require('../validators/collectionValidator');
const { createSlug }=require('../services/customHelper');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await collectionService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'collection get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await collectionValidation(req);
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
            image:`/uploads/collection/${req.file.filename}`,
            slug:await createSlug(req.body.title),
        };
        console.log(data);
        const details = await collectionService.create(data);
        res.status(201).json({ status: true, message: 'collection created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await collectionValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the collection ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            slug:await createSlug(req.body.title),
            image: req.file ? `/uploads/collection/${req.file.filename}` : null,  // Conditionally include image
        };

        
        const updatedcollection = await collectionService.edit(data); 
        res.json(updatedcollection);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await collectionService.delete(req);
        res.status(200).json({ status: true, message: 'collection deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};