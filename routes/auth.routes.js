const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.redirect("/");

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.redirect("/");

  req.session.user = user;
  res.redirect("/dashboard");
});

router.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/");
  res.render("dashboard", { user: req.session.user });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
