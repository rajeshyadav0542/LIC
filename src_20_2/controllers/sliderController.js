
const sliderService = require('../services/sliderService');
const { sliderValidation } = require('../validators/sliderValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await sliderService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Slider get successfully', ...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await sliderValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            title:req.body.title,
            sub_title:req.body.sub_title,
            description:req.body.description,
            image:`/uploads/slider/${req.file.filename}`
        };
        console.log(data);
        const details = await sliderService.create(data);
        res.status(201).json({ status: true, message: 'Slider created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
       
        const errors = await sliderValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the slider ID is passed in the body
            title: req.body.title,
            sub_title: req.body.sub_title,
            description: req.body.description,
            image: req.file ? `/uploads/slider/${req.file.filename}` : null,  // Conditionally include image
        };

        
        const updatedSlider = await sliderService.edit(data); 
        res.json(updatedSlider);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await sliderService.delete(req);
        res.status(200).json({ status: true, message: 'Slider deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};