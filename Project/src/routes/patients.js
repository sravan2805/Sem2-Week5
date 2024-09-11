const express = require('express');
const router = express.Router();
const { createPatient, getPatients } = require('../controllers/patientController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

router.post('/create', authenticate, authorize(['provider']), createPatient);
router.get('/', authenticate, authorize(['provider']), getPatients);

module.exports = router;
