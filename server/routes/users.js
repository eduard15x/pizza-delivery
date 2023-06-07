const express = require("express");

const { loginUser, signupUser } = require("../controllers/usersController");
// importing the middleware function
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// login route
router.post("/login", loginUser);

// require auth for routes
router.use(requireAuth);
//signup route
router.post("/signup", signupUser);

module.exports = router;
