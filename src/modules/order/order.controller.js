import * as orderService from "./order.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";

export const createOrder = asyncHandler(async (req, res) => {
  const order = await orderService.createOrder(req.user.userId);
  return successResponse(
    res,
    order,
    "The order has been created successfully!",
    201,
  );
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getOrders(req.user.userId);
  return successResponse(res, orders, "Fetch orders successfully!");
});
