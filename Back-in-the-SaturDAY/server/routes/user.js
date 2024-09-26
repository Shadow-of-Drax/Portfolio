const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; // For demonstration purposes, this should be replaced with a database
                  // Change to an array of user objects with roles and permissions

router.post('/register', async (req, res) => {
    const { username, password, role } = req.body; // Include role in request
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
                users.push({ username, password: hashedPassword, role }); // Store role with user
                res.status(201).send('User registered');
                    } catch (error) {
                        res.status(500).send('Error registering user');
                    }
                });

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).send('User not found');

    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ username, role: user.role }, 'secretkey'); // Use a secure key in production
        res.json({ token });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

// Middleware for error handling
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = router;