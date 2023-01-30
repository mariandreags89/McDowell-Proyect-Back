var router = require('express').Router();
router.use('/menus', require('./menus'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/pdf', require('./pdf'));

module.exports = router;