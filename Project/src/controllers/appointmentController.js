const { Appointment } = require('../models');

const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create appointment' });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve appointments' });
    }
};

module.exports = { createAppointment, getAppointments };
