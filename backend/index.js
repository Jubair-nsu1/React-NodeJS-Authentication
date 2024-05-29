//Library
const express = require("express");
const cors = require("cors"); // Import the CORS middleware
require("dotenv").config();

//Route
const authRoutes = require("./routes/authRoute");

//Assign
const app = express();
const PORT = 3001;

//Database Connection
// const connectDB = require("./config/db");
// connectDB();

//Use 
app.use(cors()); // Use CORS middleware to allow requests from the frontend
app.use(express.json());
app.use("/api/auth", authRoutes); //All the routes defined in auth.js will be prefixed with /api/auth


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });