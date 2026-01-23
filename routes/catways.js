const express = require("express");
const Catway = require("../models/catway");
const Reservation = require("../models/reservation");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  res.render("catways", { catways: await Catway.find() });
});

router.post("/", auth, async (req, res) => {
  await Catway.create(req.body);
  res.redirect("/catways");
});

router.get("/:id/reservations", auth, async (req, res) => {
  res.render("reservations", {
    reservations: await Reservation.find({ catwayNumber: req.params.id }),
    catway: req.params.id
  });
});

router.post("/:id/reservations", auth, async (req, res) => {
  await Reservation.create({ ...req.body, catwayNumber: req.params.id });
  res.redirect(`/catways/${req.params.id}/reservations`);
});

module.exports = router;
