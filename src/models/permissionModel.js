module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
      name: {
        type: DataTypes.JSON,
        allowNull: false,
        unique: true, 
        defaultValue: [
            "slider-read", "slider-create", "slider-edit", "slider-delete",
            "brand-read", "brand-create", "brand-edit", "brand-delete",
            "testimonial-read", "testimonial-create", "testimonial-edit", "testimonial-delete",
            "blog-read", "blog-create", "blog-edit", "blog-delete",
            "category-read", "category-create", "category-edit", "category-delete",
            "attribute-read", "attribute-create", "attribute-edit", "attribute-delete",
            "attribute-value-read", "attribute-value-create", "attribute-value-edit", "attribute-value-delete",
            "product-read", "product-create", "product-edit", "product-delete",
            "faq-read", "faq-create", "faq-edit", "faq-delete",
            "team-read", "team-create", "team-edit", "team-delete",
            "collection-read", "collection-create", "collection-edit", "collection-delete","setting-read"
          ]
      },
      description: {
        type: DataTypes.STRING,
      },
    });
  
    Permission.associate = function(models) {
      // A permission can belong to many roles
      Permission.belongsToMany(models.Role, {
        through: 'RolePermissions',
        foreignKey: 'permissionId',
        otherKey: 'roleId',
      });
    };
  
    return Permission;
  };
  