const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Prescription = sequelize.define('Prescription', {
        medication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Prescription;
};
