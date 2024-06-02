const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb://127.0.0.1:27017/mern-auth',
        )
        console.log('DB connected')
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = connectDB