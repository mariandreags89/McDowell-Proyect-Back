var router = require("express").Router();


router.get("/all-menus", require('../controllers/menusControllers/getAllMenus'));
router.get("/:id", require('../controllers/menusControllers/getSingleMenu'));

module.exports = router;
