const Order = require("../models/orderModel");
// the next import of mongoose is needed if we get error when getting for Object('id')
const mongoose = require("mongoose");

// get all orders
const getOrders = async (req, res) => {
  let query = {};
  try {
    const orders = await Order.find(query).allowDiskUse(true);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
};

// update total orders
// Define the updateTotalOrders function
const updateOrders = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No orders found" });
  }

  const order = await Order.findOneAndUpdate(
    { _id: id },
    {
      $push: { totalOrders: req.body.totalOrders },
    },
    { new: true }
  );

  if (!order) {
    return res.status(404).json({ err: "No orders found" });
  }

  res.status(200).json(order);
};

module.exports = {
  getOrders,
  updateOrders,
};
