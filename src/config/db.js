import { config } from "./env.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongouri);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error(`DB connection error:${error}`);
    process.exit(1);
  }
};
