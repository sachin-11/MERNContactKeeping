const express = require("express");

const router = express.Router();
//@route POST api/users
// @desc register a user
//@access public
router.post("/", (req, res) => {
  res.json({ msg: "Register a users" });
});

module.exports = router;
