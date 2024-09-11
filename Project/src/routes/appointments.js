const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

router.post('/create', authenticate, authorize(['provider']), createAppointment);
router.get('/', authenticate, getAppointments);

module.exports = router;