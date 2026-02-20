const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description }) => {
    console.log("description",description);
    const Faq = await db.Faq.create({ title, description });

    return Faq;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image } = data;

        const Faq = await db.Faq.findByPk(id);
        if (!Faq) {
            throw new Error('Faq not found');
        }

        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Faq with the non-empty fields
        await db.Faq.update(updatedData, { where: { id } });

        // Return the updated Faq data (optional)
        return {
            status: true,
            message: 'Faq updated successfully',
            updatedFaq: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Faq: ' + err.message);
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

        const Faqs = await db.Faq.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = Faqs.rows.map(Faq => ({
            ...Faq.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${Faq.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Faqs.count,
            totalPages: Math.ceil(Faqs.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Faq.destroy({
        where: { id: req.body.id }
    });
    return true;
};
