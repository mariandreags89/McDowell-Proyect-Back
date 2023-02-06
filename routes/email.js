var router = require('express').Router();
const { postEmailOrder } = require('../controllers/mailControllers/emailController')

router.post('/:id/:email', postEmailOrder);
module.exports = router;

