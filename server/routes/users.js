const express = require("express");

const {
  loginUser,
  signupUser,
  getUser,
  updateUser,
} = require("../controllers/usersController");
// importing the middleware function
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// get user route
router.get("/:email", getUser);

// require auth for routes
// router.use(requireAuth);
router.patch("/orders/:email", updateUser);

module.exports = router;
