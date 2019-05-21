const express = require("express");
const menuRouter = require("./menu");
const router = express.Router();
const user = require("./user");
const store = require("./store");

router.use("/user", user);
router.use("/store", store);
router.use("/menu", menuRouter);

module.exports = router;
