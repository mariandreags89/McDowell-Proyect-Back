var router = require('express').Router();

router.post('/signin', require('../controllers/userControllers/signIn'));
router.post('/register', require('../controllers/userControllers/resgister'));

module.exports = router;