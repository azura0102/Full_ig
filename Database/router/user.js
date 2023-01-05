import express from "express";
import {
  getAllusers,
  createUsers,
  getUserById,
  deleteUserById,
  updateUser,
} from "../controller/users.js";

const router = express.Router();

router.route("/").get(getAllusers).post(createUsers);

router.route("/:id").get(getUserById).delete(deleteUserById).put(updateUser);

export default router;
