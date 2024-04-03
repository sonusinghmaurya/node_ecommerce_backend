const express = require("express");
const app = express();
const authrouter=require("./routes/authRoutes")
const dotenv = require("dotenv").config({
  path: "./.env",
});
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/", (req, res) => {
  console.log("hello from the server side");
  res.send("hello from the server side");
});

app.use("/api/user",authrouter)

module.exports = app;
