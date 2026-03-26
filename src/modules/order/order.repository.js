import { Order } from "../../models/order.model.js";

export const createOrder = (data) => {
  return Order.create(data);
};

export const getOrderByuser = (userId) => {
  return Order.find({ user: userId });
};
