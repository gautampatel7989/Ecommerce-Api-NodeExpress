import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";
import * as cartService from "./cart.service.js";

export const addToCart = asyncHandler(async (req, res) => {
  const cart = await cartService.addToCart(req.user.userId, req.body.productId);
  return successResponse(res, cart, "Item added into cart");
});

export const getCart = asyncHandler(async (req, res) => {
  const cart = await cartService.getCart(req.user.userId);
  return successResponse(res, cart);
});

export const removeCart = asyncHandler(async (req, res) => {
  const cart = await cartService.removeFromCart(
    req.user.userId,
    req.params.productId,
  );
  return successResponse(res, cart, "Item removed from cart");
});
