const User = require("../models/User");

const signup = async (req, res) => {
  try {
    console.log("signup");
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role);

    // check if userExist already
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      role, // optional, will default to "employee"
    });
      await newUser.save();
    return res.status(200).json({ message: "data received" });
  } catch (error) {
    console.log("problem in data");
  }
};

module.exports = { signup };
