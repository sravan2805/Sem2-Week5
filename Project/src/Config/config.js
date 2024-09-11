const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,  // Ensure this is a string
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT || 'postgres',
        logging: console.log,  // Enable logging to see what's happening
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
