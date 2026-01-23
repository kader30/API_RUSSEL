const express = require("express");
const session = require("express-session");
require("./config/database");

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const catwaysRoutes = require("./routes/catways.routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use("/", authRoutes);
app.use("/users", usersRoutes);
app.use("/catways", catwaysRoutes);

module.exports = app;
