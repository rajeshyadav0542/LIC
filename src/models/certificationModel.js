module.exports = (sequelize, DataTypes) => {
    const Certification = sequelize.define('Certification', {
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

    return Certification;
};
