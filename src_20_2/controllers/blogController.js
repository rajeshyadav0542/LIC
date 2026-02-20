const blogService = require('../services/blogService');
const { blogValidation } = require('../validators/blogValidator');
const { createSlug }=require('../services/customHelper');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await blogService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'blog get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       console.log('user_id',req.user.id);
        const errors = await blogValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const image = req.files?.image?.[0]; 
        const bannerImage = req.files?.banner_image?.[0];  
        const data ={
            title:req.body.title,
            slug:await createSlug(req.body.title),
            description:req.body.description,
            user_id:req.user.id,
            image: image ? `/uploads/blog/${image.filename}` : '',
            banner_image: bannerImage ? `/uploads/blog/${bannerImage.filename}` : '',
        };
        console.log(data);
        const details = await blogService.create(data);
        res.status(201).json({ status: true, message: 'blog created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await blogValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const image = req.files?.image?.[0]; 
        const bannerImage = req.files?.banner_image?.[0];  
        const data = {
            id: req.body.id, 
            title: req.body.title,
            description: req.body.description,
            slug:await createSlug(req.body.title),
            image: image ? `/uploads/blog/${image.filename}` : null,
            banner_image: bannerImage ? `/uploads/blog/${bannerImage.filename}` : null,  

        };

        
        const updatedblog = await blogService.edit(data); 
        res.json(updatedblog);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await blogService.delete(req);
        res.status(200).json({ status: true, message: 'blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};