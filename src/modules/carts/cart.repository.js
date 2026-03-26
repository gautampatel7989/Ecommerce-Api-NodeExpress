import { Cart } from "../../models/cart.model.js";

export const findCartByUser = (userId) => {
  return Cart.findOne({ user: userId }).populate("items.product");
};

export const createCart = (data) => {
  return Cart.create(data);
};

export const updateCart = (cartId, data) => {
  return Cart.findByIdAndUpdate(cartId, data, { new: true });
};
