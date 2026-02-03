module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
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
     bank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     ifsc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     pancard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     uid: {
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
    profile_img: {
      type: DataTypes.STRING,
      allowNull: false,
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

  return Agent;
};