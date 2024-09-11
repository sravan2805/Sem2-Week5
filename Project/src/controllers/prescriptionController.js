const { Prescription } = require('../models');

const createPrescription = async (req, res) => {
    try {
        const prescription = await Prescription.create(req.body);
        res.status(201).json(prescription);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create prescription' });
    }
};

const getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.findAll();
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve prescriptions' });
    }
};

module.exports = { createPrescription, getPrescriptions };
