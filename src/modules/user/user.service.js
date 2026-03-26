import * as userRepo from "./user.repository.js";
import { ApiError } from "../../utils/appError.js";

export const getProfile = async (userId) => {
  const user = await userRepo.findById(userId);
  if (!user) {
    throw new ApiError("User not found", 404);
  }
  return user;
};

export const updateProfile = async (userId, data) => {
  const user = await userRepo.updateUser(userId, data);
  if (!user) {
    throw new ApiError("User not found", 404);
  }
  return user;
};
