import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  getProfile,
  updateProfile,
  uploadProfileImage,
} from "./user.controller.js";
import { updateProfileSchema } from "./user.validation.js";
import { upload } from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.get("/profile", authenticate, getProfile);
router.put(
  "/profile",
  authenticate,
  validate(updateProfileSchema),
  updateProfile,
);
router.post(
  "/upload-profile",
  authenticate,
  upload.single("image"),
  uploadProfileImage,
);

export default router;
