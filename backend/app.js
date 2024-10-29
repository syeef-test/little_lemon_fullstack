import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");

    app.listen(process.env.PORT || 3000, () => {
      console.log("server is runing on port 3000");
    });
  } catch (error) {
    console.log("error in connecting mongodb", error);
  }
}

startServer();
