const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description, image }) => {

    const Brand = await db.Brand.create({ title, description, image: image });

    return Brand;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image } = data;

        const Brand = await db.Brand.findByPk(id);
        if (!Brand) {
            throw new Error('Brand not found');
        }

        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Brand with the non-empty fields
        await db.Brand.update(updatedData, { where: { id } });

        // Return the updated Brand data (optional)
        return {
            status: true,
            message: 'Brand updated successfully',
            updatedBrand: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Brand: ' + err.message);
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

        const brands = await db.Brand.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = brands.rows.map(brand => ({
            ...brand.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${brand.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: brands.count,
            totalPages: Math.ceil(brands.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Brand.destroy({
        where: { id: req.body.id }
    });
    return true;
};
