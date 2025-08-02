const mongoose = require("mongoose");
require("dotenv").config();
console.log("db :",process.env.MONGO_URI);
const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/Task-Tracker');
       
    console.log(`MongoDB Connected: ${connect.connection.host}`);    
    }
     catch (error) {
       console.log(`MongoDB Connection Error: ${error.message}`);
        // process.exit(1);
     }
}

module.exports = connectDB;