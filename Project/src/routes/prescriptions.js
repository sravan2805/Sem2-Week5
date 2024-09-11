const express = require('express');
const router = express.Router();
const { createPrescription, getPrescriptions } = require('../controllers/prescriptionController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

router.post('/create', authenticate, authorize(['provider']), createPrescription);
router.get('/', authenticate, authorize(['provider']), getPrescriptions);

module.exports = router;
