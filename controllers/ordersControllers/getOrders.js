const OrdersManager = require("../../models/orders");

const getOrders = (re, res) => {
  res.status(200).end();
};

module.exports = getOrders;
