const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  totalOrders: {
    type: [
      [
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
    ],
    default: [],
  },
});

module.exports = mongoose.model("Order", orderSchema);
