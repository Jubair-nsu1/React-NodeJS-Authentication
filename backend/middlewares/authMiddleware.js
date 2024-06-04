const User = require('../models/user.model');
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(
        token,
        "secret123",
        async (err, decodedToken) => {
          if (err) {
            res.json({ status: false });
            next();
          } else {
            const user = await User.findById(decodedToken.id);
            if (user) res.json({ status: true, user: user.email });
            else res.json({ status: false });
            next();
          }
        }
      );
    } else {
      res.json({ status: false });
      next();
    }
  };