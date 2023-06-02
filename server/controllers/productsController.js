const Product = require("../models/productModel");
// the next import of mongoose is needed if we get error when getting for Object('id')
const mongoose = require("mongoose");

// get all products
const getProducts = async (req, res) => {
  // Product.createIndex({ name: 1 });
  const recommendedProducts = req.query.recommended;
  let query = {};
  // If the 'type' query parameter is present, add it to the query object
  if (recommendedProducts) {
    query.recommended = Boolean(recommendedProducts);
  }

  try {
    const products = await Product.find(query)
      .sort({ name: 1 })
      .allowDiskUse(true);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

// get single product
const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No product found" });
  }

  const product = await Product.findById({ _id: id });

  if (!product) {
    return res.status(404).json({ err: "No product found" });
  }

  res.status(200).json(product);
};

// create/add a new product
const createProduct = async (req, res) => {
  const { name, description, price, stockLevel, image } = req.body;

  const emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!description) {
    emptyFields.push("name");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!stockLevel) {
    emptyFields.push("releaseYear");
  }
  if (!image) {
    emptyFields.push("image");
  }
  console.log(emptyFields);
  if (emptyFields.length > 0) {
    return res
      .status(404)
      .json({ error: `Please fill in all the fields`, emptyFields });
  }

  // add document to DB
  try {
    const product = await Product.create({
      name,
      description,
      price,
      stockLevel,
      image,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ err: error });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No product found" });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(404).json({ err: "No product found!" });
  }

  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No product found" });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // it includes also the other properties that are not modifies here, else will delete the old ones
    }
  );

  if (!product) {
    return res.status(404).json({ err: "No product found!" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
