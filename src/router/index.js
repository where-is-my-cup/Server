const express = require("express");
const menuRouter = require("./menu");
const router = express.Router();

router.use("/user", function() {});

router.use("/menu", menuRouter);

router.use("/store", function() {});

module.exports = router;
