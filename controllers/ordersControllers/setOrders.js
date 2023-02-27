const OrdersManager = require("../../models/orders");

const setOrders = (req, res) => {
  const changeOrder = req.body
  const response = OrdersManager.setOrder(changeOrder)
  res.status(200).json();
};

module.exports = setOrders;
