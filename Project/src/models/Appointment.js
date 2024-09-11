const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Appointment = sequelize.define('Appointment', {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        providerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Appointment;
};
