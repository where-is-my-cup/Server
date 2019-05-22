const express = require("express");
const router = express.Router();
const controller = require("../../controllers/menu");

router.get("/menulist", controller.menuList);
router.get("/menulistAll", controller.menuListAll);
router.get("/storelist", controller.storeList);
router.get("/storelistAll", controller.storeListAll);
router.post("/orderList", controller.orderList);

module.exports = router;
