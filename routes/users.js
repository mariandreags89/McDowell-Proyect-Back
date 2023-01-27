var router = require('express').Router();

router.post('/signin', require('../controllers/signin'));

module.exports = router;