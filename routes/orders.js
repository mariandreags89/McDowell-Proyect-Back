var router = require("express").Router();
const { body, validationResult } = require("express-validator");
const validateEmail = require("../middlewares/emailValidator")

router.get(
  "/get-orders",
  require("../controllers/ordersControllers/getOrders")
);
router.get("/:id", require("../controllers/ordersControllers/getIdOrder"));
router.post(
  "/create-order",
  body("email", "Ingrese un email valido").exists().isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsMsg = errors.array()
      res.status(400).json({ errorsMsg: errorsMsg });
      console.log(errorsMsg);
    }else{
        next()
    }
  },
  require("../controllers/ordersControllers/createOrder")
);
router.post(
  "/create-product-order",
  require("../controllers/ordersControllers/createProductOrder")
);
router.post(
  "/create-order-status",
  require("../controllers/ordersControllers/createOrderStatus")
);
router.patch(
  "/set-order/:id",
  require("../controllers/ordersControllers/setOrders")
);
router.patch(
  "/status/:id",
  require("../controllers/statusControllers/pacthStatusOrder")
);

module.exports = router;
