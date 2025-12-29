module.exports = (sequelize, DataTypes) => {
    const DietPackage = sequelize.define('DietPackage', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        price: { type: DataTypes.FLOAT, allowNull: false }, // Package Price
        duration_days: { type: DataTypes.INTEGER, allowNull: false }, // e.g., 30 days plan
    });
    return DietPackage;
};
