var router = require('express').Router();

router.get('/get-orders', require('../controllers/ordersControllers/getOrders'));
router.get('/:id', require('../controllers/ordersControllers/getIdOrder'));
router.post('/create-order', require('../controllers/ordersControllers/createOrder'));
router.post('/create-Produt-order', require('../controllers/ordersControllers/createProductOrder'));
router.post('/create-order-status', require('../controllers/ordersControllers/createOrderStatus'));
router.patch('/set-order/:id', require('../controllers/ordersControllers/setOrders'));


module.exports = router;