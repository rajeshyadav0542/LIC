module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      permissionId:{
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
      }
    });
  
    Role.associate = function(models) {
      // Many-to-many relationship: a role can be assigned to many users
      Role.belongsToMany(models.User, {
        through: 'UserRoles',
        foreignKey: 'roleId',
        otherKey: 'userId',
      });
      Role.belongsToMany(models.Permission, {
        through: 'RolePermissions',
        foreignKey: 'roleId',
        otherKey: 'permissionId',
      });
    };
    
  
    return Role;
  };
  