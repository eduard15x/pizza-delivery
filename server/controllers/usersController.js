const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
// the next import of mongoose is needed if we get error when getting for Object('id')
const mongoose = require("mongoose");

// create token function
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { userName, email, phone, password } = req.body;

  try {
    const user = await User.signup(userName, email, phone, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single user
const getUser = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ err: "No user found" });
  }

  res.status(200).json(user);
};

// update user
const updateUser = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOneAndUpdate(
    { email },
    {
      $push: { userOrders: req.body.userOrders },
    },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ err: "No user found!" });
  }

  res.status(200).json(user);
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
  updateUser,
};
