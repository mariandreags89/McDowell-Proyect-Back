const productsOrderManager = require("../../models/ProductsOrder");

const createProductOrder = async (req, res) => {
  const id_product = req.body.id_product;
  const units = req.body.units;
  const price = req.body.price;
  const coment = req.body.coment;
  const response = await productsOrderManager.createproducts_in_Order({ id_product, units, price, coment });
  //console.log(response);
  res.status(201).end();
};

module.exports = createProductOrder;