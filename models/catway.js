const mongoose = require("mongoose");

module.exports = mongoose.model("Catway", {
  catwayNumber: { type: Number, unique: true },
  catwayType: { type: String, enum: ["long", "short"] },
  catwayState: String
});
