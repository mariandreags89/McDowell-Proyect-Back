const productsOrderManager = require("../../models/ProductsOrder");

const createProductOrder = async (req, res) => {
  const products = req.body;
  const response = await productsOrderManager.createproducts_in_Order(products);
  
  res.status(201).end();
};

module.exports = createProductOrder;