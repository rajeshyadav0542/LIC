module.exports = (sequelize, DataTypes) => {
    const ProductVariant = sequelize.define('ProductVariant', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        varient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        varient_value_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        variant_key: {
            type: DataTypes.JSON, // Store as JSON
            allowNull: false,
            
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        old_price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    ProductVariant.associate = (models) => {
        ProductVariant.belongsTo(models.db.product, {
            foreignKey: 'product_id',
        });
    };

    return ProductVariant;
}