const { Patient } = require('../models');

const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create patient' });
    }
};

const getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve patients' });
    }
};

module.exports = { createPatient, getPatients };
;
