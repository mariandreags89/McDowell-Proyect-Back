var router = require('express').Router();

router.post('/signin', require('../controllers/userAccesController'));

module.exports = router;