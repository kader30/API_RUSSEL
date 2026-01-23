const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  res.render("users", { users: await User.find() });
});

router.post("/", auth, async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await User.create(req.body);
  res.redirect("/users");
});

router.post("/delete/:email", auth, async (req, res) => {
  await User.deleteOne({ email: req.params.email });
  res.redirect("/users");
});

module.exports = router;
