const { body, validationResult } = require('express-validator');
 
const db = require('../models');

exports.teamValidation = async (req) => {
    await body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long')
    .run(req);
    if (req.file) {
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedFileTypes.includes(req.file.mimetype)) {
            throw new Error('Invalid file type. Only JPEG, PNG, GIF, WEBP, and SVG are allowed.');
        }
    }
    return validationResult(req);
};
 
