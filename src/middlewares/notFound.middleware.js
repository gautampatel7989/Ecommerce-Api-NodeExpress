import { ApiError } from "../utils/appError.js";

export const notFound = (req, res, next) => {
  next(new ApiError(`Route not found: ${req.url}`, 404));
};
