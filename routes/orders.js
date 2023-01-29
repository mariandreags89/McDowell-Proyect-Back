var router = require('express').Router();
const { getAllOrders, getIdOrder,setOrders, createOrder} = require('../controllers/ordersController')

router.get('/get-orders', getAllOrders);
router.get('/:id', getIdOrder);
router.post('/create-order', createOrder);
router.patch('/set-order/:id', setOrders);

module.exports = router;