module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true, 
        },
        value: {
            type: DataTypes.TEXT,
            allowNull: true,  
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,  
        },
    });

    return Settings;
};
