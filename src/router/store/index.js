const express = require("express");
const router = express.Router();
const store = require("../../controllers/store");

router.post("/inventory", store.inventory);
router.post("/menuList", store.menuList);

module.exports = router;
