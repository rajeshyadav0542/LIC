const dietPackageService = require('../services/dietPackageService');
const { dietPackageValidation } = require('../validators/dietPackageValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await dietPackageService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'DietPackage get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        const errors = await dietPackageValidation(req);
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
            price:req.body.price,
            duration_days:req.body.duration_days
        };
        console.log(req.body);
        res.status(201).json({ status: true, message: 'DietPackage created successfully' ,data});

        return false;
        const details = await dietPackageService.create(data);
        res.status(201).json({ status: true, message: 'DietPackage created successfully' ,data});

    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
        const errors = await dietPackageValidation(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({
                status: false,
                message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
            });
        }
        const data = {
            id: req.body.id, // Assuming the DietPackage ID is passed in the body
            title: req.body.title,
            description: req.body.description,
            price:req.body.price,
            duration_days:req.body.duration_days
        };        
        const updatedDietPackage = await dietPackageService.edit(data); 
        res.json(updatedDietPackage);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        await dietPackageService.delete(req);
        res.status(200).json({ status: true, message: 'DietPackage deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};