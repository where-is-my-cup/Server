const express = require("express");
const menuRouter = require("./menu");
const router = express.Router();
const user = require("./user");

router.use("/user", user);
router.use("/store", function() {});
router.use("/menu", menuRouter);

module.exports = router;
