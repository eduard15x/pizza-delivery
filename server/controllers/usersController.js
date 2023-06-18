const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const bcrypt = require("bcrypt");
const validator = require("validator");
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

// update user orders
const updateUserOrders = async (req, res) => {
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

// update user data
const updateUserData = async (req, res) => {
  const { id } = req.params;
  const { userName, email, phone, password } = req.body;
  console.log(req.body);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No user found" });
  }

  if (email && !validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  if (phone && !validator.isMobilePhone(phone, "any")) {
    return res.status(400).json({ error: "Phone number is not valid" });
  }

  if (password && !validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password is not strong enough" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          userName: userName || undefined,
          email: email || undefined,
          phone: phone || undefined,
          password: password ? await bcrypt.hash(password, 10) : undefined,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      throw Error("User not found");
    }

    if (password) {
      // create token
      const token = createToken(updatedUser._id);
      res.status(200).json({ updatedUser: updatedUser, token: token });
    } else {
      res.status(200).json({ updatedUser });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
  updateUserOrders,
  updateUserData,
};
