var router = require('express').Router();

router.post('/signin', require('../controllers/userControllers/signIn'));

module.exports = router;