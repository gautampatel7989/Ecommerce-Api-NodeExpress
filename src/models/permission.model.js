import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

export const Permission = mongoose.model("Permission", permissionSchema);
