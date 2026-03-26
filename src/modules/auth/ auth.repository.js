import { User } from "../../models/user.model.js";

export const findByEmail = (email) => {
  return User.findOne({ email });
};

export const createUser = (data) => {
  return User.create(data);
};

export const findEmailWithPassword = (email) => {
  return User.findOne({ email }).select("+password");
};
