const roleService = require('../services/roleService');
// const { roleValidation } = require('../validators/roleValidator');

exports.get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await roleService.get( { id, page, limit, search, sortBy, order });
        res.status(201).json({ status: true, message: 'Role get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
       
        // const errors = await roleValidation(req);
        // if (!errors.isEmpty()) {
        //     const errorMessages = errors.array().map((err) => err.msg);
        //     return res.status(400).json({
        //         status: false,
        //         message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
        //     });
        // }
        const data ={
            name:req.body.roleName,
            permissions:req.body.permissions
        };
        console.log(data);
        const details = await roleService.create(data);
        res.status(201).json({ status: true, message: 'Role created successfully' ,data});
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.edit = async (req, res) => {
    try {
        // const errors = await roleValidation(req);
        // if (!errors.isEmpty()) {
        //     const errorMessages = errors.array().map((err) => err.msg);
        //     return res.status(400).json({
        //         status: false,
        //         message: errorMessages.length >= 1 ? errorMessages[0] : errorMessages.join(', '),
        //     });
        // }
        const data ={
            name:req.body.roleName,
            id:req.body.id,
            permissions:req.body.permissions
        };        
        const updatedRole = await roleService.edit(data); 
        res.json(updatedRole);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.delete = async (req, res) => {
    try { 
        // await roleService.delete(req);
        res.status(200).json({ status: true, message: 'No Permission allow!!' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};