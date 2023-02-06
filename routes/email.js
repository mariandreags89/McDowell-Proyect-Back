var router = require('express').Router();
const { response } = require('express');
const { postEmailOrder } = require('../controllers/emailController')

router.post('/:id/:email', postEmailOrder);
module.exports = router;

