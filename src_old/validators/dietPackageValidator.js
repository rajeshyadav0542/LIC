const { body, validationResult } = require('express-validator');
 
const db = require('../models');

exports.dietPackageValidation = async (req) => {
    await body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long')
    .run(req);
    await body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 3 })
    .withMessage('Description must be at least 3 characters long')
    .run(req);
    
    return validationResult(req);
};
 
