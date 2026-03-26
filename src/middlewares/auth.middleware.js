import jwt from "jsonwebtoken";
import { config } from "../config/env.js";
import { ApiError } from "../utils/appError.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new ApiError("Unauthorized", 401));
  }

  const token = authHeader.split(" ")[1];
  console.log("token::", token);
  try {
    const decode = jwt.verify(token, config.jwtsecret);
    req.user = decode;
    consol.e.log("decodedUser::", req.user);
    next();
  } catch (error) {
    next();
    // next(new ApiError("Invalid token", 401));
  }
};
