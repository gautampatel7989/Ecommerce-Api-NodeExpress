import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

export const User = mongoose.model("User", userSchema);
