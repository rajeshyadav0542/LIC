module.exports = (sequelize, DataTypes) => {
    const ActivityLogin = sequelize.define('ActivityLogin', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'Users', // Name of the User table
                key: 'id',
              },
        },  
        ip_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loginTime: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
        
    }, {
        timestamps: true,  
    });
    ActivityLogin.associate = (models) => {
        ActivityLogin.belongsTo(models.User, {
          foreignKey: 'user_id', // Ensure this matches the foreign key in ActivityLogin
          as: 'user', // Optional: alias for the association
        });
      };
    return ActivityLogin;
};
