var router = require('express').Router();

router.get('/all-menus', require('../controllers/menus'));
router.get('/single-menu/:idMenu', require('../controllers/sigleMenu'));

module.exports = router;
