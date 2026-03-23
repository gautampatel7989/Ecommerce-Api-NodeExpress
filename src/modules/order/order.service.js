import * as orderRepo from "./order.repository.js";
import * as cartRepo from "../carts/cart.repository.js";
import { ApiError } from "../../utils/appError.js";

export const createOrder = async (userId) => {
  const cart = await cartRepo.findCartByUser(userId);

  if (!cart || cart.items.length === 0) {
    throw new ApiError("Cart is empty!", 400);
  }

  const orderItems = cart.items.map((item) => ({
    product: item.product._id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
  }));

  const totalAmount = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const order = await orderRepo.createOrder({
    user: userId,
    items: orderItems,
    totalAmount,
  });

  cart.items = [];
  await cart.save();

  return order;
};

export const getOrders = async (userId) => {
  return orderRepo.getOrderByuser(userId);
};
