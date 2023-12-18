import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  searchHandler,
  playlistHandler,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
router.post("/playlist", playlistHandler)
router.post("/search", searchHandler);
router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
