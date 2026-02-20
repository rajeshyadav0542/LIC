const productService = require('../services/productService'); // Import the productService
const sequelize = require('../config/dbConfig');
exports.get = async (req, res) => {
    try {
        // Destructure query parameters from the request
        const { id, page = 1, limit = 10, search, sortBy = 'createdAt', order = 'ASC' } = req.query;

        // Call the productService to get data
        const data = await productService.get({ id, page, limit, search, sortBy, order });

        // Send success response with the product data
        res.status(200).json({ status: true, message: 'Products get successfully',...data });
    } catch (error) {
        // Send error response if something goes wrong
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};



exports.create = async (req, res) => {
    try {
        const productData = req.body;
        const image = req.files?.image?.[0]; // Access the first file uploaded with the key 'image'
        const bannerImage = req.files?.banner_image?.[0]; // Access the first file uploaded with the key 'banner_image'

        // Add file paths to the product data object
        const image_path = image ? `/uploads/product/${image.filename}` : null;
        const banner_image_path = bannerImage ? `/uploads/product/${bannerImage.filename}` : null;
        const imagePaths = [];
        const transaction = await sequelize.transaction();
        const product = await productService.create(productData, { transaction });
        console.log("productData",productData);
        if (image) {
            imagePaths.push({
                product_id: product.id,
                type: 'feature',
                image: image_path
            });
        }
        if (bannerImage) {
            imagePaths.push({
                product_id: product.id,
                type: 'banner',
                image: banner_image_path
            });
        }
        console.log("imagePaths",imagePaths);
        if (imagePaths.length > 0) {
            await productService.bulkCreate(imagePaths, transaction);
        }

        await transaction.commit();
        res.status(201).json({ message: 'Product created successfully', product });
        
    } catch (error) {
        // Send error response if something goes wrong
        res.status(400).json({
            status: false,
            message: 'dssds'+error.message
        });
    }
};

exports.get_filter_type = async (req, res) => {
    try {
        const { id, page = 1, limit = 10, search, sortBy = 'createdAt', order = 'ASC' } = req.query;
        const data = await productService.get_filter_type(req);
 
        res.status(200).json({
            status: true,
            message: 'Filter list fetched successfully',
             ...data
        });
    } catch (error) {
        // Send error response if something goes wrong
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};
exports.delete = async (req, res) => {
    try { 
        await productService.delete(req);
        res.status(200).json({ status: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};