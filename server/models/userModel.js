const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userOrders: [
    {
      name: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      orderDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// static signup method
userSchema.statics.signup = async function (userName, email, phone, password) {
  // fields validation
  if (!userName || !email || !phone || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isMobilePhone(phone, "any")) {
    throw Error("Phone number is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already exists");
  }

  // add a salt string to our password
  // then hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    userName,
    email,
    phone,
    password: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // fields validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email or password is incorrect - Email");
  }

  // compare passwords - input password and user's password from DB
  const matchPasswords = await bcrypt.compare(password, user.password);
  if (!matchPasswords) {
    throw Error("Email or password is incorrect - Password");
  }

  return user;
};
// userSchema.index({ userName: 1 });
module.exports = mongoose.model("User", userSchema);
