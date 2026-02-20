module.exports = (sequelize, DataTypes) => {
    const ProductFilter = sequelize.define('ProductFilter', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Plant', 'CBD', 'THC'),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });
    return ProductFilter;
};
