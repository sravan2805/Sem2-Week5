const { Sequelize } = require('sequelize');
const { database } = require('../Config/config');

const sequelize = new Sequelize(database.name, database.user, database.password, {
    host: database.host,
    dialect: database.dialect,
});

const User = require('./User')(sequelize);
const Appointment = require('./Appointment')(sequelize);
const Patient = require('./Patient')(sequelize);
const Prescription = require('./Prescription')(sequelize);

sequelize.sync();

module.exports = { sequelize, User, Appointment, Patient, Prescription };
