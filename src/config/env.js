import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  mongouri: process.env.MONGO_URI,
  jwtsecret: process.env.JWT_SECRET,
};
