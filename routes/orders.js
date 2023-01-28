var router = require('express').Router();
const { getOrders, setOrders, createOrder} = require('../controllers/ordersController')

router.get('/get-orders', getOrders);
router.post('/create-order', createOrder);
router.patch('/set-order/:id', setOrders);

module.exports = router;