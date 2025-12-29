module.exports = (sequelize, DataTypes) => {
    const AppointmentPaymentDetails = sequelize.define('AppointmentPaymentDetails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
        },  
        appointment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receipt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        payment_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        appointmentToken: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        status: {
            type: DataTypes.STRING,
            // defaultValue: 0,
            //status=0 pending,status=,status=2
        }, 
        appointmentToken:{
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        timestamps: true,  
    });
    return AppointmentPaymentDetails;
};
