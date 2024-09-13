const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
    const { username, password, avatarUrl } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await User.create({ username, password: hashedPassword, avatarUrl });
        res.json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Username already exists.' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const token = jwt.sign({ id: user._id }, 'secretKey');
    res.json({ token, user });
});

// Get user profile
router.get('/profile', async