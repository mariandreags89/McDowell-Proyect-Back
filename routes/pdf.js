var router = require('express').Router();
const { response } = require('express');
const { getpdfOrder } = require('../controllers/pdfController')

router.get('/:id', getpdfOrder);
module.exports = router;