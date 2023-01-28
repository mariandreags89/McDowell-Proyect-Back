const OrdersManager = require('../models/orders')

const getOrders = (re, res) => {
  res.status(200).end();
};

const setOrders = (req, res) => {
  res.status(200).json();
};

const  createOrder = async (re, res) => {
  const newOder = req.body
  const response = await OrdersManager.createOrder (newOder)
  res.status(201).end();
}

module.exports = { getOrders, setOrders, createOrder };
