import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

export const Role = mongoose.model("Role", roleSchema);
