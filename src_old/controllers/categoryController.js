const categoryService = require('../services/categoryService');
const { categoryValidation } = require('../validators/categoryValidator');
const { createSlug }=require('../services/customHelper'); 
exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await categoryService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Category get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await categoryValidation(req);
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
            image:`/uploads/Category/${req.file.filename}`,
            slug:await createSlug(req.body.title),
            parent_id:req.body.parent_id
        };
        console.log(data);
        const details = await categoryService.create(data);
        res.status(201).json({ status: true, message: 'Category created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await categoryValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        
        const data = {
            id: req.body.id, // Assuming the Category ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            image: req.file ? `/uploads/Category/${req.file.filename}` : null,  // Conditionally include image
            slug:await createSlug(req.body.title),
            parent_id:req.body.parent_id??0
        };

        
        const updatedCategory = await categoryService.edit(data); 
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await categoryService.delete(req);
        res.status(200).json({ status: true, message: 'Category deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};