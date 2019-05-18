const express = require("express");
const router = express.Router();
const user = require("./user");

router.use("/user", user);

router.use("/menu", function() {});

router.use("/store", function() {});

module.exports = router;
