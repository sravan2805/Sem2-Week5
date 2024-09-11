const express = require('express');
const { sequelize } = require('./src/models');
const authRoutes = require('./src/routes/auth');
const appointmentRoutes = require('./src/routes/appointments');
const patientRoutes = require('./src/routes/patients');
const prescriptionRoutes = require('./src/routes/prescriptions');
const logger = require('./src/utils/logger');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/patients', patientRoutes);
app.use('/prescriptions', prescriptionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Database connected!');
});
