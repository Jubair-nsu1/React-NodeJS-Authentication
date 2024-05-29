const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
      res.status(400)
      throw new Error('User already exists')
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
      res.status(400)
      throw new Error('Invalid user data')
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (!user) {
        return res.status(400).send("Invalid email");
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