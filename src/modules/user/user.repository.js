import { User } from "../../models/user.model.js";

export const findById = (id) => {
  return User.findById(id);
};

export const updateUser = (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};
