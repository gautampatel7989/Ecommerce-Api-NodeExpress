import { Product } from "../../models/product.model.js";

export const getAllProduct = () => {
  return Product.find().populate("createdBy", "email");
};

export const getProductById = (id) => {
  return Product.findById(id);
};

export const createProduct = (data) => {
  return Product.create(data);
};

export const updateProduct = (id, data) => {
  return Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = (id) => {
  return Product.findByIdAndDelete(id);
};
