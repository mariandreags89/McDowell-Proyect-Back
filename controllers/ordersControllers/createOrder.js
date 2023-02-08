const OrdersManager = require("../../models/orders");
const orderStatusManager = require("../../models/OrderStatus");


const createOrder = async (req, res) => {
  const {email} = req.body
  const response = await OrdersManager.createOrder(email);
  const responseStatus = await orderStatusManager.createOrderStatus();
 
  res.status(201).end();
};

module.exports = createOrder;
