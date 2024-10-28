const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
