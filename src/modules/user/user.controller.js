import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";
import * as userService from "./user.service.js";

// Get Profile
export const getProfile = asyncHandler(async (req, res) => {
  const user = await userService.getProfile(req.user.userId);
  return successResponse(res, user, "Profile fetched successfully!");
});

// Update Profile
export const updateProfile = asyncHandler(async (req, res) => {
  const user = await userService.updateProfile(req.user.userId, req.body);
  return successResponse(res, user, "Profile updated successfully!");
});

// Upload Profile Image
export const uploadProfileImage = asyncHandler(async (req, res) => {
  const file = req.file;
  const user = await userService.updateProfile(req.user.userId, {
    profileImage: file.path,
  });
  return successResponse(res, user, "Profile image uploaded successfully!");
});
