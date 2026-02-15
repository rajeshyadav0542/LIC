module.exports = (sequelize, DataTypes) => {
    const AttributeValue = sequelize.define('AttributeValue', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        attribute_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attribute_value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });

    AttributeValue.associate = (models) => {
        AttributeValue.belongsTo(models.Attribute, {
            foreignKey: 'attribute_id',
        });
    };

    return AttributeValue;
};
