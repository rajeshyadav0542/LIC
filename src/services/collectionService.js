const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description, image ,slug}) => {

    const Collection = await db.Collection.create({ title, description, image: image,slug });

    return Collection;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image ,slug} = data;

        const Collection = await db.Collection.findByPk(id);
        if (!Collection) {
            throw new Error('Collection not found');
        }

        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;
        if (slug) updatedData.slug = slug;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Collection with the non-empty fields
        await db.Collection.update(updatedData, { where: { id } });

        // Return the updated Collection data (optional)
        return {
            status: true,
            message: 'Collection updated successfully',
            updatedCollection: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Collection: ' + err.message);
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

        const collections = await db.Collection.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = collections.rows.map(Collection => ({
            ...Collection.toJSON(),
            // imageUrl: `${PUBLIC_PATH_IMG}${Collection.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: collections.count,
            totalPages: Math.ceil(collections.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Collection.destroy({
        where: { id: req.body.id }
    });
    return true;
};
