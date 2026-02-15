const db = require('../models');
const path=require('path');
const fs = require('fs');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ title, description,image,slug,banner_image}) => {
     
    const Blog= await db.Post.create({ title, description, image: image,slug,banner_image });
   
    // Return only necessary fields, exclude sensitive data like password
    return  Blog;
   
};
exports.edit = async (data) => {
    try {
        const { id, title, description, image,slug,banner_image} = data;
       
        const Blog = await db.Post.findByPk(id);
        if (!Blog) {
            throw new Error('Blog not found');
        }
        const updatedData = {};
        if (title) updatedData.title = title;
        if (description) updatedData.description = description;
        if (slug) updatedData.slug = slug;
        if (image) updatedData.image = image;
        if (banner_image) updatedData.banner_image = banner_image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Blog with the non-empty fields
        await db.Post.update(updatedData, { where: { id } });

        // Return the updated Blog data (optional)
        return {
            status:true,
            message: 'Blog updated successfully',
            updatedBlog: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Blog: ' + err.message);
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

        const blogs = await db.Post.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = blogs.rows.map(blog => ({
            ...blog.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${blog.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: blogs.count,
            totalPages: Math.ceil(blogs.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }





};
exports.delete = async (req) => {
    
    await db.Post.destroy({
        where: { id: req.body.id }
      });      
      
      return true; 
};
