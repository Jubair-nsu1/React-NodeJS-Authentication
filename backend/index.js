//Library
const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Route
const authRoutes = require("./routes/authRoute");


//********************************************************************//

//Server setup
const app = express();
const PORT = 4000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log(`Server running on port ${PORT}`);
    }
});

//Database Connection
const connectDB = require("./config/db");
connectDB();

 
// Use CORS middleware to allow requests from the frontend
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());


//Call all Routes
app.use("/api/auth", authRoutes); //All the routes defined in auth.js will be prefixed with /api/auth


