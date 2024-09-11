const express = require('express');
const router = express.Router();
const { User } = require('../models/index');

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status (500).json({ error: error.message });
    }
});

module.exports = router;
