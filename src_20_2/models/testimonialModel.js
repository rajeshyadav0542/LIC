module.exports = (sequelize, DataTypes) => {
    const Testimonial = sequelize.define('Testimonial', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type:DataTypes.INTEGER,
            defaultValue:1
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Testimonial;
};
