const express = require("express");
const router = express.Router();
const controller = require("../../controllers/menu");

router.get("/menulist", controller.menuList);

module.exports = router;
