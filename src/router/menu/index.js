const express = require("express");
const router = express.Router();
const controller = require("../../controllers/store");

router.get("/menulist", controller.menuList);

module.exports = router;
