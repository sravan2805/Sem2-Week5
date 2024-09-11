const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Patient = sequelize.define('Patient', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Patient;
};
