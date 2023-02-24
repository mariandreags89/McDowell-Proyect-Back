var router = require('express').Router();

router.get('/:in_status', require('../controllers/statusControllers/getStatusIn'));
router.patch('/setStatus/:id_order', require('../controllers/statusControllers/pacthStatusOrder'))

module.exports = router;