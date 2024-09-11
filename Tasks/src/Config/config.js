require('dotenv').config(); // Load env variables

const { Sequelize } = require('sequelize');

// Initialize Sequelize with PostgreSQL connection using environment variables
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        logging: false, // Disable logging or set it to a custom function if needed
    }
);

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:' , err);
    });

module.exports = sequelize;