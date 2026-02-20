const { body, validationResult } = require('express-validator');
 
const db = require('../models');

exports.attributeValidation = async (req) => {
    await body('attribute_name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .custom(async (value, { req }) => {
            const attributeCount = await db.Attribute.count();
            if (attributeCount >= 1) {
                throw new Error('Only one attribute can be added');
            }
            // Check for uniqueness in the database
            const existingAttribute = await db.Attribute.findOne({
                where: { attribute_name: value },
            });

            if (existingAttribute && existingAttribute.id !== req.body.id) {
                // Exclude the current record if it's an update operation
                throw new Error('Attribute name must be unique');
            }
        })
        .run(req);

    return validationResult(req);
};
 
