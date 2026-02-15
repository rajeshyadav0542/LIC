module.exports = (sequelize, DataTypes) => {
    const Collection = sequelize.define('Collection', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensure the slug is unique
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });

    // Define associations
    Collection.associate = (models) => {
        Collection.hasMany(models.Product, {
            foreignKey: 'collection_id',  
            as: 'products', 
        });
    };

    return Collection;
};
