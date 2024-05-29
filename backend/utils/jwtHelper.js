const jwt = require('jsonwebtoken');
const SECRET_KEY = "secret123";  // Store this securely!

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email, password: user.password }, SECRET_KEY, {
        expiresIn: '1h'
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };