const express = require("express");

const { getOrders, updateOrders } = require("../controllers/ordersController");
const router = express.Router();

// create route
// GET all orders
router.get("/", getOrders);

// update orders
router.patch("/:id", updateOrders);

module.exports = router;
