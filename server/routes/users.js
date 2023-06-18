const express = require("express");

const {
  loginUser,
  signupUser,
  getUser,
  updateUserOrders,
  updateUserData
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

// update user orders
router.patch("/orders/:email", updateUserOrders);

// update user data
router.patch("/data/:id", updateUserData);

module.exports = router;
