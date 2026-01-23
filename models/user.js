const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  username: String,
  email: { type: String, unique: true },
  password: String
});
