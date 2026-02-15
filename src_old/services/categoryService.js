const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description, image,slug,parent_id }) => {

    if(parent_id ==''){
        parent_id=null;
    }
    const Category = await db.Category.create({ title, description, image: image,slug,parent_id:parent_id??null });

    return Category;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image,slug,parent_id } = data;

        const Category = await db.Category.findByPk(id);
        if (!Category) {
            throw new Error('Category not found');
        }

        const updatedData = {};
        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;
        if (slug) updatedData.slug = slug;
                  updatedData.parent_id = parent_id;
        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }
        await db.Category.update(updatedData, { where: { id } });
 
        return {
            status: true,
            message: 'Category updated successfully',
            updatedCategory: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Category: ' + err.message);
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

        const categories = await db.Category.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = categories.rows.map(category => ({
            ...category.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${category.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: categories.count,
            totalPages: Math.ceil(categories.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Category.destroy({
        where: { id: req.body.id }
    });
    return true;
};
