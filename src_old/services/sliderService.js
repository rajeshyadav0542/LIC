const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title,sub_title, description,image}) => {
     
    const slider= await db.Slider.create({ title,sub_title, description, image: image });
   
    // Return only necessary fields, exclude sensitive data like password
    return  slider;
   
};
exports.edit = async (data) => {
    try {
        const { id, title,sub_title, description, image } = data;
 
        const slider = await db.Slider.findByPk(id);
        if (!slider) {
            throw new Error('Slider not found');
        }
 
        const updatedData = {};

        if (title) updatedData.title = title;
        if (sub_title) updatedData.sub_title = sub_title;
        if (description) updatedData.description = description;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the slider with the non-empty fields
        await db.Slider.update(updatedData, { where: { id } });

        // Return the updated slider data (optional)
        return {
            status:true,
            message: 'Slider updated successfully',
            updatedSlider: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update slider: ' + err.message);
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

        const sliders = await db.Slider.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = sliders.rows.map(slider => ({
            ...slider.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${slider.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: sliders.count,
            totalPages: Math.ceil(sliders.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {
    await db.Slider.destroy({
        where: { id: req.body.id }
      });      
      return true; 
};
