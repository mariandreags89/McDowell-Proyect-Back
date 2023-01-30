var router = require("express").Router();


router.get("/all-products", require('../controllers/menusControllers/getAllProducts'));
router.get("/:id", require('../controllers/menusControllers/getSingleProduct'));

module.exports = router;
