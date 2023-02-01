const OrdersManager = require("../../models/orders");

const createOrder = async (req, res) => {
  const order = req.body;
  const response = await OrdersManager.createOrder(order);
  res.status(201).json(response);
};

module.exports = createOrder;
