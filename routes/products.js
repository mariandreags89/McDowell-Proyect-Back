var router = require("express").Router();
const { getAllMenus, getSigleMenu } = require("../controllers/menusController");

router.get("/all-menus", getAllMenus);
router.get("/:id", getSigleMenu);

module.exports = router;
