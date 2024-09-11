const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');
const validateInput = require('../utils/validateInput');
const hashPassword = require('../utils/hashPassword');

router.post(
    '/register',
    validateInput([
        body('username').isString().notEmpty(),
        body('password').isString().isLength({ min: 6 }),
        body('role').isString().isIn(['patient', 'provider']),
    ]),
    async (req, res) => {
        req.body.password = await hashPassword(req.body.password);
        register(req, res);
    }
);

router.post('/login', login);

module.exports = router;
