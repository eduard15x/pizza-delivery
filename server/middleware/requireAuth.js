const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const SECRET = process.env.SECRET;

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // the authorization response will come in a string of 2 words "blabla token.token.token"
  // we need to split this by space
  const token = authorization.split(" ")[1];
  // verify the token
  try {
    const { _id } = jwt.verify(token, SECRET);
    // we attach a new property "user" to the request and attach the user id
    req.user = await User.findOne({ _id }).select("_id");
    next(); // this goes to the next function
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
