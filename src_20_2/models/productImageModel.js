module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define('ProductImage', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_attribute_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'attributevalues', // Ensure the table name matches your database schema
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
    });

    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.Product, {
            foreignKey: 'product_id',
        });
        ProductImage.belongsTo(models.ProductAttribute, {
            foreignKey: 'product_attribute_id',
        });
    };

    return ProductImage;
};
