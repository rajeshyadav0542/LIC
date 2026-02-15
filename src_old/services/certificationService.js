const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description, image }) => {

    const Certification = await db.Certification.create({ title, description, image: image });

    return Certification;

};
exports.edit = async (data) => {
    try {
        const { id, title, description, image } = data;

        const Certification = await db.Certification.findByPk(id);
        if (!Certification) {
            throw new Error('Certification not found');
        }

        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Certification with the non-empty fields
        await db.Certification.update(updatedData, { where: { id } });

        // Return the updated Certification data (optional)
        return {
            status: true,
            message: 'Certification updated successfully',
            updatedCertification: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Certification: ' + err.message);
    }


};

exports.get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'ASC' } = {}) => {
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

        const Certifications = await db.Certification.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = Certifications.rows.map(Certification => ({
            ...Certification.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${Certification.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Certifications.count,
            totalPages: Math.ceil(Certifications.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Certification.destroy({
        where: { id: req.body.id }
    });
    return true;
};
