import bcrypt from "bcrypt";
import * as authRepo from "./ auth.repository.js";
import { Role } from "../../models/role.model.js";
import { ApiError } from "../../utils/appError.js";
import { generateToken } from "../../utils/jwt.js";

export const registerUser = async (data) => {
  const existingUser = await authRepo.findByEmail(data.email);
  if (existingUser) {
    throw new ApiError("Email already registered", 400);
  }
  const userRole = await Role.findOne({ name: "user" });
  const hasPassword = await bcrypt.hash(data.password, 10);
  const user = await authRepo.createUser({
    ...data,
    password: hasPassword,
    role: userRole._id,
  });
  return user;
};

export const loginUser = async ({ email, password }) => {
  // check existing user
  const user = await authRepo.findEmailWithPassword(email);
  if (!user) {
    throw new ApiError("Invalid credentials", 401);
  }

  // password match
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new ApiError("Invalid credentails", 401);
  }
  console.log("user_role::", user.role);
  // generate token
  const token = generateToken({
    userId: user._id,
    email: user.email,
    role: user.role,
  });

  return {
    user,
    token,
  };
};
