var router = require('express').Router();
router.use('/menus', require('./products'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));

module.exports = router;