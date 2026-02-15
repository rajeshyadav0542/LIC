const faqService = require('../services/faqService');
const { faqValidation } = require('../validators/faqValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await faqService.get( { id, page, limit, search, sortBy, order });
        res.status(201).json({ status: true, message: 'faq get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await faqValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data ={
            title:req.body.title,
            description:req.body.description
        };
        console.log(data);
        const details = await faqService.create(data);
        res.status(201).json({ status: true, message: 'faq created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
        const errors = await faqValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the faq ID is passed in the body
            title: req.body.title,
            description: req.body.description
        };

        
        const updatedfaq = await faqService.edit(data); 
        res.json(updatedfaq);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await faqService.delete(req);
        res.status(200).json({ status: true, message: 'faq deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};