const db = require('../models');
const Sequelize = require('sequelize');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ attribute_name, description, image }) => {

    const Attribute = await db.Attribute.create({ attribute_name });

    return Attribute;

};
exports.edit = async (data) => {
    try {
        const { id, attribute_name, description, image } = data;

        const Attribute = await db.Attribute.findByPk(id);
        if (!Attribute) {
            throw new Error('Attribute not found');
        }

        const updatedData = {};

        if (attribute_name) updatedData.attribute_name = attribute_name;
        if (description) updatedData.description = description;
        // if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Attribute with the non-empty fields
        await db.Attribute.update(updatedData, { where: { id } });

        // Return the updated Attribute data (optional)
        return {
            status: true,
            message: 'Attribute updated successfully',
            updatedAttribute: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Attribute: ' + err.message);
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

        const Attributes = await db.Attribute.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = Attributes.rows.map(Attribute => ({
            ...Attribute.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${Attribute.image}`,
        }));


        
      
        const getDynamicAttributes = async (productId) => {
            const variants = await db.ProductAttribute.findAll({
                where: { product_id: productId },
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('variant_key')), 'variant_key'],
                ],
            });
        
            const attributeMap = {};
            variants.forEach(variant => {
                const attributes = JSON.parse(variant.get('variant_key'));
                Object.entries(attributes).forEach(([key, value]) => {
                    if (!attributeMap[key]) attributeMap[key] = new Set();
                    attributeMap[key].add(value);
                });
            });
        
            // Convert sets to arrays
            for (const key in attributeMap) {
                attributeMap[key] = Array.from(attributeMap[key]);
            }
        
            return attributeMap;
        };
        
        // Example Usage
        (async () => {
            const productId = 1;
            const dynamicAttributes = await getDynamicAttributes(productId);
            console.log("dynamicAttributes",dynamicAttributes);
        })();
        

    // step 2

    const getFilteredAttributes = async (productId, selectedAttributes) => {
        const whereClause = {
            product_id: productId,
            ...Object.entries(selectedAttributes).reduce((acc, [key, value]) => {
                acc[`variant_key.${key}`] = value;
                return acc;
            }, {}),
        };
    
        const variants = await db.ProductAttribute.findAll({
            where: whereClause,
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('variant_key')), 'variant_key'],
            ],
        });
    
        const filteredMap = {};
        variants.forEach(variant => {
            const attributes = JSON.parse(variant.get('variant_key'));
            Object.entries(attributes).forEach(([key, value]) => {
                if (!filteredMap[key]) filteredMap[key] = new Set();
                filteredMap[key].add(value);
            });
        });
    
        // Convert sets to arrays
        for (const key in filteredMap) {
            filteredMap[key] = Array.from(filteredMap[key]);
        }
    
        return filteredMap;
    };
    
    // Example Usage
    (async () => {
        const productId = 1;
        const selectedAttributes = { size: 'Medium' };
        const filteredAttributes = await getFilteredAttributes(productId, selectedAttributes);
        console.log("filteredAttributes",filteredAttributes);
    })();


    //  step 3
    const getVariantPrice = async (productId, selectedAttributes) => {
        const whereClause = {
            product_id: productId,
            variant_key: Sequelize.where(
                Sequelize.fn('JSON_CONTAINS', Sequelize.col('variant_key'), JSON.stringify(selectedAttributes)),
                true
            ),
        };
    
        const variant = await db.ProductAttribute.findOne({
            where: whereClause,
            attributes: ['price', 'stock'],
        });
    
        return variant ? { price: variant.price, stock: variant.stock } : null;
    };
    
    // Example Usage
    (async () => {
        const productId = 1;
        const selectedAttributes = { color: 'Red', size: 'Medium' };
        const priceInfo = await getVariantPrice(productId, selectedAttributes);
        console.log("priceInfo",priceInfo);
    })();
     
   








        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Attributes.count,
            totalPages: Math.ceil(Attributes.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Attribute.destroy({
        where: { id: req.body.id }
    });
    return true;
};
