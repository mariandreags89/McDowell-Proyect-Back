var router = require('express').Router();

router.get('/orders', require('../controllers/orders'));
router.post('/create-order', require('../controllers/createOrder'));
router.patch('/set-order/:id-order', require('../controllers/setOrder'));
module.exports = router;