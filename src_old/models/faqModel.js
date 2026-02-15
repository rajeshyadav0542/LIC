module.exports = (sequelize, DataTypes) => {
    const Faq = sequelize.define('Faq', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    }, {
        timestamps: true,  
    });
    return Faq;
};
