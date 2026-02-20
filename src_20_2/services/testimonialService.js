const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description,image,designation,name }) => {
     
    const Testimonial= await db.Testimonial.create({ title, description, image: image,designation,name }); 
    return  Testimonial;
};
exports.edit = async (data) => {
    try {
        const { id, title, description, image,name,designation } = data;
 
        const Testimonial = await db.Testimonial.findByPk(id);
        if (!Testimonial) {
            throw new Error('Testimonial not found');
        }
 
        const updatedData = {};

        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (designation) updatedData.designation = designation;
        if (name) updatedData.name = name;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }
        await db.Testimonial.update(updatedData, { where: { id } });
        return {
            status:true,
            message: 'Testimonial updated successfully',
            updatedTestimonial: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Testimonial: ' + err.message);
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

        const testimonials = await db.Testimonial.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = testimonials.rows.map(testimonial => ({
            ...testimonial.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${testimonial.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: testimonials.count,
            totalPages: Math.ceil(testimonials.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {
     
    await db.Testimonial.destroy({
        where: { id: req.body.id }
      });      
      return true; 
};
