module.exports = (sequelize, DataTypes) => {
  const Referral = sequelize.define('Referral', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }, 
     agent_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },    
  });

  return Referral;
};