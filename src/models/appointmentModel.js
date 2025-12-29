module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
        },  
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mode_consultation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        purpose: {
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
        appointment_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        appointment_time: {
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
        comments: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            //status=0 pending,status=,status=2
        }, 
        followup_status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
            //status=0 pending,status=,status=2
        }, 
        payment_status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
            //status=0 pending,status=,status=2
        }, 
        payment_id: {
            type: DataTypes.STRING,
            allowNull: true,
            //status=0 pending,status=,status=2
        }, 
        appointmentToken:{
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        timestamps: true,  
    });
    return Appointment;
};
