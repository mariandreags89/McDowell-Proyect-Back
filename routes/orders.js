var router = require('express').Router();

router.get('/get-orders', require('../controllers/ordersControllers/getOrders'));
router.post('/create-order', require('../controllers/ordersControllers/createOrder'));
router.patch('/set-order/:id', require('../controllers/ordersControllers/setOrders'));

module.exports = router;