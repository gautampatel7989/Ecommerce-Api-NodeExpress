import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtsecret, {
    expiresIn: "4h",
  });
};
