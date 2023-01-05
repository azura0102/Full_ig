import express from "express";
import {
  createPosts,
  deletePosts,
  getAllPosts,
  getPostsByID,
} from "../controller/posts.js";

const postsRouter = express.Router();

postsRouter.route("/").get(getAllPosts).post(createPosts);

postsRouter.route("/:id").get(getPostsByID).delete(deletePosts);

export default postsRouter;
