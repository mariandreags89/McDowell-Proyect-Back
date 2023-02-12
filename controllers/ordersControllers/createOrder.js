const OrdersManager = require("../../models/orders");
const orderStatusManager = require("../../models/OrderStatus");



const createOrder = async (req, res) => {
  const {email} = req.body
  await OrdersManager.createOrder(email);
  await orderStatusManager.createOrderStatus();
  
  res.status(201).end();
};

module.exports = createOrder;
