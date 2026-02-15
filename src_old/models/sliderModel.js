module.exports = (sequelize, DataTypes) => {
    const Slider = sequelize.define('Slider', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sub_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        order_by:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Slider;
};
