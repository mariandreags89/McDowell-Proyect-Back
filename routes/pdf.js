var router = require('express').Router();
const { response } = require('express');
const { getpdfOrder } = require('../controllers/mailControllers/pdfController')

router.get('/getpdf', getpdfOrder);
module.exports = router;