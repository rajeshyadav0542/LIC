const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ attribute_id,attribute_value, description, image }) => {

    const Attribute = await db.AttributeValue.create({ attribute_id,attribute_value });

    return Attribute;

};
exports.edit = async (data) => {
    try {
        const { id,attribute_id, attribute_value, description, image } = data;

        const Attribute = await db.AttributeValue.findByPk(id);
        if (!Attribute) {
            throw new Error('Attribute not found');
        }

        const updatedData = {};

        if (attribute_id) updatedData.attribute_id = attribute_id;
        if (attribute_value) updatedData.attribute_value = attribute_value;
        if (description) updatedData.description = description;
        // if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Attribute with the non-empty fields
        await db.AttributeValue.update(updatedData, { where: { id } });

        // Return the updated Attribute data (optional)
        return {
            status: true,
            message: 'Attribute Value updated successfully',
            updatedAttribute: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Attribute Value: ' + err.message);
    }


};

exports.get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
        const whereClause = id
            ? { id }
            : search
            ? {
                  title: {
                      [db.Sequelize.Op.like]: `%${search}%`, // Adjust `name` field as needed for filtering
                  },
              }
            : {};

        const offset = (page - 1) * limit; // Calculate offset for pagination

        const Attributes = await db.AttributeValue.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
            include: [
                {
                    model: db.Attribute,        // Include the associated 'Attribute' model
                    required: true,          // Ensures only matching 'Attribute' records are included
                    attributes: ['attribute_name','id'], // Select only the 'attribute_name' field from 'Attribute'
                },
            ],
        });

        const result = Attributes.rows.map(Attribute => ({
            ...Attribute.toJSON(),
            imageUrl: Attribute.image?`${PUBLIC_PATH_IMG}${Attribute.image}`:'',
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Attributes.count,
            totalPages: Math.ceil(Attributes.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.get_ajax_attr_value = async ({ attribute_id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
        const whereClause = {attribute_id:attribute_id}

        const offset = (page - 1) * limit; // Calculate offset for pagination

        const Attributes = await db.AttributeValue.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
            include: [
                {
                    model: db.Attribute,        // Include the associated 'Attribute' model
                    required: true,          // Ensures only matching 'Attribute' records are included
                    attributes: ['attribute_name','id'], // Select only the 'attribute_name' field from 'Attribute'
                },
            ],
        });

        const result = Attributes.rows.map(Attribute => ({
            ...Attribute.toJSON(),
            imageUrl: Attribute.image?`${PUBLIC_PATH_IMG}${Attribute.image}`:'',
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Attributes.count,
            totalPages: Math.ceil(Attributes.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.AttributeValue.destroy({
        where: { id: req.body.id }
    });
    return true;
};
