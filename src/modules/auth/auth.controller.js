import * as authService from "./auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";

export const register = asyncHandler(async (req, res) => {
  const user = await authService.registerUser(req.body);
  return successResponse(
    res,
    user,
    "The User has been registered successfully!",
    201,
  );
});

export const login = asyncHandler(async (req, res) => {
  const { user, token } = await authService.loginUser(req.body);
  return successResponse(
    res,
    { user, token },
    "The user has been logged in successfully!",
    200,
  );
});
