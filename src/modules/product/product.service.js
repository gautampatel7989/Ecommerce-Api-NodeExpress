import * as productRepo from "./product.repository.js";
import { ApiError } from "../../utils/appError.js";

export const getAllProducts = async () => {
  return productRepo.getAllProduct();
};

export const getProductById = async (id) => {
  const product = productRepo.getProductById(id);
  if (!product) {
    throw new ApiError("Product Not Found!", 404);
  }
  return product;
};

export const createProduct = async (data, userId) => {
  return productRepo.createProduct({
    ...data,
    userId,
  });
};

export const updateProduct = async (id, data) => {
  const product = productRepo.updateProduct(id, data);
  if (!product) {
    throw new ApiError("Product Not Found!", 404);
  }
  return product;
};

export const deleteProduct = async (id) => {
  const product = productRepo.deleteProduct(id);
  if (!product) {
    throw new ApiError("Product Not Found!", 404);
  }
  return product;
};
