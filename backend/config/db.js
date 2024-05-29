const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://mongodb:27017/mern-auth',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            }
        )
    } 
    catch (error) {
        console.error("Error connecting to MongoDB", err);
    }
}

module.exports = connectDB