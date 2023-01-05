import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postsRouter from "./router/post.js";
import usersRouter from "./router/user.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URL || "";
const port = process.env.PORT || 8888;


const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);



const connect = () => {
  try {
   console.log(process.env.uri)
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected MongoDB");
    });
  } catch (error) {
    console.error("Couldnt connect");
    process.exit(1);
  }
};
app.use(express.json());
app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
