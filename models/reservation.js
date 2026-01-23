const mongoose = require("mongoose");

module.exports = mongoose.model("Reservation", {
  catwayNumber: Number,
  clientName: String,
  boatName: String,
  startDate: Date,
  endDate: Date
});
