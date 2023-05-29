const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stockLevel: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    extraAliments: {
      type: String,
    },
  },
  { timestamps: true }
); // when u try to create a new document it automatically it creates that createdAt prop for us
productSchema.index({ name: 1 });
module.exports = mongoose.model("Product", productSchema);
