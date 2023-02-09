const productsOrderManager = require("../../models/ProductsOrder");
const {getpdfOrder} = require('../mailControllers/pdfController')
const {postEmailOrder} = require('../mailControllers/emailController')

const createProductOrder = async (req, res) => {
  const products = req.body;
  const response = await productsOrderManager.createproducts_in_Order(products);
  await getpdfOrder()
  //await postEmailOrder(email) ** esta comentado por q estaba probando primero con el PDF
  res.status(201).end();
};

module.exports = createProductOrder;