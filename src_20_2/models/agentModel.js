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

    // 🔥 OTP FIELDS ADDED HERE

    otp: {
      type: DataTypes.STRING(6),   // use STRING not INT
      allowNull: true,
    },

    otp_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    otp_verified: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },

    // 🔐 Password Reset Fields

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
