var router = require('express').Router();

router.post('/signin', require('../controllers/uerControllers/signIn'));

module.exports = router;