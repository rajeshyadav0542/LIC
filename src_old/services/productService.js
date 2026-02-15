// Import the models
const db = require('../models');
const Sequelize = require('sequelize');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
// Get products with pagination, search, and sorting
exports.get = async ({ id, page, limit, search, sortBy, order }) => {
    try {
        // Prepare the query options for Sequelize
        const whereClause = id
        ? { id }
        : search
        ? {
            [db.Sequelize.Op.or]: [
                {
                    name: {
                        [db.Sequelize.Op.like]: `%${search}%`,
                    },
                },
                {
                    description: {
                        [db.Sequelize.Op.like]: `%${search}%`,
                    },
                },
                {
                    price: {
                        [db.Sequelize.Op.eq ]: parseFloat(search),
                    },
                },
            ],
          }
        : {};
        const options = {
            where: whereClause, // Filter condition object
            include: [
                {
                    model: db.ProductAttribute,
                    attributes: ['id', 'variant_key', 'price', 'stock'],
                    required: false, // Ensure the product has variants
                }
            ],
            limit: parseInt(limit),
            offset: (page - 1) * limit,
            order: [[sortBy, order]], // Dynamic sorting
        };

        // Apply search filter if search query exists
      

        // Apply id filter if id is provided
        if (id) {
            options.where.id = id;
        }

        // Fetch the products from the database
        const products = await db.Product.findAll(options);

        // Prepare the response format
        const result = products.map(product => {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                shortDescription: product.short_description,
                price: product.price,
                salePrice: product.sale_price || null,
                image: product.image,
                isAttribute: product.is_attribute === 1, // Convert to boolean
                status: product.status === 1 ? 'Active' : 'Inactive',
                stockStatus: product.stock_status,
                allowCheckoutWhenOutOfStock: product.allowCheckoutWhenOutOfStock === 1, // Convert to boolean
                quantity: product.quantity,
                dimensions: {
                    weight: product.weight,
                    length: product.length,
                    width: product.wide,
                    height: product.height,
                },
                tags: product.tags ? product.tags.split(',') : [], // Split tags into an array if not null
                plant: product.Plant,
                cbd: product.CBD,
                thc: product.THC,
                slug: product.slug,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
            };
        });
        

        // Return the data in a structured format
        return {
            data: result,
            page: parseInt(page),
            limit: parseInt(limit),
            total: products.length, // You can optimize this by using COUNT in your query
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
exports.get_filter_type = async (req) => {
    try {
        // Prepare the query options for Sequelize
        const options = {
            where: {type:req.query.type}, 
        };

        

        // Fetch the products from the database
        const product_filters = await db.ProductFilter.findAll(options);

        // Prepare the response format
        
        // Return the data in a structured format
        return {
            data: product_filters,
            page: 1,
            limit: 50,
            total: product_filters.length, // You can optimize this by using COUNT in your query
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.create = async ( productData) => {
    try {
        const parsedTags = JSON.parse(productData.tags);
        productData.tags = parsedTags.map((tag) => tag.value.trim()).join(',');
        const newProduct = await db.Product.create(productData);
        if (productData.categories && productData.categories.length > 0) { 
            const categoryPromises = productData.categories.map(async (categoryId) => {
                return db.ProductCategory.findOrCreate({
                    where: { category_id: categoryId , product_id: newProduct.id },
                });
            });
        }
        return newProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.bulkCreate = async (imagePaths, transaction) => {
    try { 
        await db.ProductImage.bulkCreate(imagePaths, { transaction });
    } catch (error) {
        throw new Error('Failed to save images: ' + error.message);
    }
};
exports.delete = async (req) => {
    
    await db.Product.destroy({
        where: { id: req.body.id }
      });      
      
      return true; 
};