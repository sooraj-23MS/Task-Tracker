const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use('/api/auth',require('./routes/authRoutes'))

app.listen(PORT, () => {
  //  console.log("Mongo URI:", process.env.MONGO_URI); 
  console.log(`Server is running on http://localhost:${PORT}`);
});
