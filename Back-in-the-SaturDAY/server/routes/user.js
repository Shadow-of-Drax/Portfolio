const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

// Password reset
router.post('/reset-password', async (req, res) => {
    const { username, newPassword } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.updateOne({ username }, { password: hashedPassword });
        res.send('Password updated successfully');
    } catch (error) {
        res.status(500).send('Error resetting password');
    }
});

const { sendPasswordResetEmail } = require('../mail'); // Import the mail function

router.post('/request-reset', async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User not found');

        const resetToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        await sendPasswordResetEmail(user.email, resetToken); // Ensure you have an email field in your User model
        res.send('Password reset email sent');
    } catch (error) {
        res.status(500).send('Error sending password reset email');
    }
});

module.exports = router;