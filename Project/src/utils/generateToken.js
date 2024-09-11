const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../Config/config');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: '1h' });
};

module.exports = generateToken;
