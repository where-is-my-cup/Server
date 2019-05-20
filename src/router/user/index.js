const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
// auth.login.post
router.post("/login", user.login.post);

router.post("/checkID", user.checkID.post);

router.post("/checkNN", user.checkNN.post);

router.post("/signUp", user.signUp.post);

module.exports = router;
