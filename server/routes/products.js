const express = require("express");

const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");
const router = express.Router();

// create routes
// GET all workouts
router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

router.patch("/products/:id", updateProduct);

module.exports = router;
