module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
    },
    profile_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true, // roleId can be null
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  // Define all associations in a single associate function
  User.associate = (models) => {
    // Association with Role
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role',
      onDelete: 'SET NULL', // If the role is deleted, set roleId to null
    });

    // Association with ActivityLogin
    User.hasMany(models.ActivityLogin, {
      foreignKey: 'user_id', // Ensure this matches the foreign key in ActivityLogin
      as: 'activityLogins', // Optional: alias for the association
    });
  };

  return User;
};