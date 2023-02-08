const orderStatusManager = require("../../models/OrderStatus");

const createOrderStatus = async (req, res) => {
  const response = await orderStatusManager.createOrderStatus();
 
  res.status(201).end();
};

module.exports = createOrderStatus;