const testimonialService = require('../services/testimonialService');
const { testimonialValidation } = require('../validators/testimonialValidator');

exports.get = async (req, res) => {
    try {
       const { id, page, limit, search, sortBy, order } =req.query;
        const data = await testimonialService.get({ id, page, limit, search, sortBy, order } );
        res.status(200).json({ status: true, message: 'testimonial get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await testimonialValidation(req);
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
            image:`/uploads/testimonial/${req.file.filename}`,
            name:req.body.name??'',
            designation:req.body.designation??''
        };
        console.log(data);
        const details = await testimonialService.create(data);
        res.status(201).json({ status: true, message: 'testimonial created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await testimonialValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the testimonial ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            image: req.file ? `/uploads/testimonial/${req.file.filename}` : null,  // Conditionally include image
            name:req.body.name,
            designation:req.body.designation
        };

        
        const updatedtestimonial = await testimonialService.edit(data); 
        res.json(updatedtestimonial);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await testimonialService.delete(req);
        res.status(200).json({ status: true, message: 'testimonial deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};