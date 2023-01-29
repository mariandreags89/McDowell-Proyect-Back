const { response } = require('express');
const OrdersManager = require('../models/orders')

const getAllOrders = async (re, res) => {
  const response = await OrdersManager.getAll();
  res.status(200).json(response);
};

const getIdOrder = async (req, res) => {
  const id = req.params.id;
  const response = await OrdersManager.getId(id)
  res.status(200).json(response);
};


const setOrders = (req, res) => {
  response.status(200).json();
};

const  createOrder = async (re, res) => {
  const newOder = req.body
  const response = await OrdersManager.createOrder (newOder)
  response.status(201).end();
}

module.exports = { getAllOrders, getIdOrder,setOrders, createOrder };
