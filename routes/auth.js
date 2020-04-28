const express = require("express");

const router = express.Router();
//@route GET api/auth
// @desc Get loged in a user
//@access private
router.get("/", (req, res) => {
  res.json({ msg: "get login user" });
});

//@route GET api/auth
// @desc Auth user and get Token
//@access private
router.post("/", (req, res) => {
  res.json({ msg: "Login user" });
});

module.exports = router;
