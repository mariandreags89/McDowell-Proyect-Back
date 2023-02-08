const OrdersManager = require("../../models/orders");

const createOrder = async (req, res) => {
  //const newOrder = req.body;
  const mail = req.body.order_mail;
  const response = await OrdersManager.createOrder({mail});
  //console.log(response);
  res.status(201).end();
};

module.exports = createOrder;
