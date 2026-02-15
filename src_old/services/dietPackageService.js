const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description,price,duration_days }) => {
    console.log("description",description);
    const DietPackage = await db.DietPackage.create({ name:title, description,price,duration_days });

    return DietPackage;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image,price,duration_days } = data;

        const DietPackage = await db.DietPackage.findByPk(id);
        if (!DietPackage) {
            throw new Error('DietPackage not found');
        }

        const updatedData = {};

        if (title) updatedData.name = title;
        if (description) updatedData.description = description;
        if (price) updatedData.price = price;
        if (duration_days) updatedData.duration_days = duration_days;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the DietPackage with the non-empty fields
        await db.DietPackage.update(updatedData, { where: { id } });

        // Return the updated DietPackage data (optional)
        return {
            status: true,
            message: 'DietPackage updated successfully',
            updatedDietPackage: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update DietPackage: ' + err.message);
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

        const DietPackages = await db.DietPackage.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = DietPackages.rows.map(DietPackage => ({
            ...DietPackage.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${DietPackage.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: DietPackages.count,
            totalPages: Math.ceil(DietPackages.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.DietPackage.destroy({
        where: { id: req.body.id }
    });
    return true;
};
