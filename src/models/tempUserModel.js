module.exports = (sequelize, DataTypes) => {
    const TempUser = sequelize.define('TempUSer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temp_otp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        verify_status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        } 
    });
   
    return TempUser;
};
