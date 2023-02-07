const OrdersManager = require("../../models/orders");

const createOrder = async (re, res) => {
  const newOder = req.body;
  const response = await OrdersManager.createOrder(newOder);
  res.status(201).end();
};

module.exports = createOrder;
