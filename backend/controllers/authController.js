const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

const generateToken = (id) => {
    return jwt.sign({ id }, 'secret123', {
      expiresIn: '1h'
    });
};

const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body
  
    // Check if user exists
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      return res.status(400).json({ error: "Username already exists." });
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Create user
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword,
    })
  
    if (user) {
      res.status(201).json({
        userId: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } 
    else {
      return res.status(400).json({ error: "Invalid user data" });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (!user) {
        return res.status(400).send("Invalid email");
        //return { status: 'error', error: 'Invalid login' }
    }
  
    const isPasswordValid = await bcrypt.compare(password , user.password);
  
    if (!isPasswordValid){
        return res.status(400).send("Invalid password.");
    }
        
    const token = jwt.sign({ userId: user.id , email: user.email}, 'secret123');
    
    res.send({ token });
}


module.exports = {
    registerUser,
    loginUser,
    // getMe,
}