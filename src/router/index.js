const express = require("express");
const menuRouter = require("./menu");
const router = express.Router();

router.use("/user", function() {});

router.use("/store", function() {});

router.use("/menu", menuRouter);
module.exports = router;
