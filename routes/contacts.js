const express = require("express");

const router = express.Router();
//@route GET api/contacts
// @desc get all users contacts
//@access public
router.get("/", (req, res) => {
  res.json({ msg: "get all contacts" });
});

//@route POST api/contacts
// @desc create a new contact
//@access Private
router.post("/", (req, res) => {
  res.json({ msg: "create new contact" });
});

//@route PUT api/contacts
// @desc Update contact
//@access Private
router.put("/:id", (req, res) => {
  res.json({ msg: "update new contact" });
});

//@route DELETE api/contacts
// @desc Update contact
//@access Private
router.delete("/", (req, res) => {
  res.json({ msg: "Delete contact" });
});

module.exports = router;
