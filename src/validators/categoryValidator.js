const { body, validationResult } = require('express-validator');
 
const db = require('../models');

exports.categoryValidation = async (req) => {
   
    await body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long')
    .run(req);
    if (req.file) {
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedFileTypes.includes(req.file.mimetype)) {
            throw new Error('Invalid file type. Only JPEG, PNG, GIF, WEBP, and SVG are allowed.');
        }
    }
    if(req.body.parent_id){
        const parentId = parseInt(req.body.parent_id ?? 0)||0;  // Default to 0 if parent_id is not provided

        // Only check parent category if parentId is not 0
        if (parentId !== 0) {
          const parentCategory = await db.Category.findByPk(parentId);
          if (!parentCategory) {
            throw new Error('Invalid parent_id: Parent category does not exist.');  
          }
        }
    }
    return validationResult(req);
};
 
