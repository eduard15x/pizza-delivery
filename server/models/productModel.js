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
    images: [
      {
        base64: {
          type: String,
        },
        name: {
          type: String,
        },
        lastModified: {
          type: Number,
        },
        required: true,
      },
    ],
    extraAliments: {
      type: String,
    },
  },
  { timestamps: true }
); // when u try to create a new document it automatically it creates that createdAt prop for us

module.exports = mongoose.model("Product", productSchema);
