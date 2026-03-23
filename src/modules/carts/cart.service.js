import * as cartRepo from "./cart.repository.js";
import { ApiError } from "../../utils/appError.js";

export const addToCart = async (userId, productId) => {
  let cart = await cartRepo.findCartByUser(userId);
  if (!cart) {
    cart = await cartRepo.createCart({
      user: userId,
      items: [{ product: productId, quantity: 1 }],
    });
    return cart;
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product._id.toString() === productId,
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cart.items.push({ product: productId, quantity: 1 });
  }

  await cart.save();
  return cart;
};

export const getCart = async (userId) => {
  const cart = await cartRepo.findCartByUser(userId);
  if (!cart) {
    throw new ApiError("Cart is empty!", 404);
  }
  return cart;
};

export const removeFromCart = async (userId, productId) => {
  const cart = await cartRepo.findCartByUser(userId);
  if (!cart) {
    throw new ApiError("Cart is empty!", 404);
  }
  cart.items = cart.items.filter(
    (item) => item.product._id.toString() !== productId,
  );
  await cart.save();
  return cart;
};
