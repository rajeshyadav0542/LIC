const { body, validationResult } = require('express-validator');
 
const db = require('../models');

exports.attributeValueValidation = async (req) => {
    await body('attribute_value')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .custom(async (value, { req }) => {
            // Check for uniqueness in the database
            const existingAttribute = await db.AttributeValue.findOne({
                where: { attribute_value: value },
            });

            if (existingAttribute && existingAttribute.id !== req.body.id) {
                // Exclude the current record if it's an update operation
                throw new Error('Attribute Value name must be unique');
            }
        })
        .run(req);
        await body('attribute_id')
        .notEmpty()
        .withMessage('Attribute_id is required')
        .custom(async (value, { req }) => {
            // Check for uniqueness in the database
            const existingAttribute = await db.Attribute.findOne({
                where: { id: value },
            });

            if (!existingAttribute) {
                // Exclude the current record if it's an update operation
                throw new Error('Attribute Does not Exits!');
            }
        })
        .run(req);

    return validationResult(req);
};
 
