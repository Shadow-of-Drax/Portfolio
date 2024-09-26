const jwt = require('jsonwebtoken');

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).send('Token is required');

        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) return res.status(403).send('Invalid token');
            if (!roles.includes(decoded.role)) return res.status(403).send('Access denied');
            next();
        });
    };
};

module.exports = roleMiddleware;