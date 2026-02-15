module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        package_id: DataTypes.INTEGER,
        day: DataTypes.INTEGER,
        type: DataTypes.STRING, // e.g., 'morning_drink', 'breakfast', 'mid_day_snack', etc.
        description: DataTypes.STRING,
        calories: DataTypes.INTEGER
    });
    return Meal;
};
