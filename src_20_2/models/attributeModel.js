module.exports = (sequelize, DataTypes) => {
    const Attribute = sequelize.define('Attribute', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        attribute_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });

    Attribute.associate = (models) => {
        Attribute.hasMany(models.AttributeValue, {
            foreignKey: 'attribute_id',
        });
    };

    return Attribute;
};
