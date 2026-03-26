import * as productService from "./product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";

// Get All Products
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAllProducts();
  return successResponse(res, products, "The Fetched all products");
});

// Get Product By Id
export const getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  return successResponse(res, product, "The Fetch product successfully!");
});

// Create Product
export const createProduct = asyncHandler(async (req, res) => {
  console.log("req.user::", req.user);
  const product = await productService.createProduct(req.body, req.user.userId);
  return successResponse(
    res,
    product,
    "The product created successfully!",
    201,
  );
});

// Update Product
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  return successResponse(
    res,
    product,
    "The product has been updated successfully!",
  );
});

// Delete Product
export const deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  return successResponse(res, null, "Product has been deleted successfully!");
});

// Upload Product Image
export const uploadProductImage = asyncHandler(async (req, res) => {
  const file = req.file;
  const product = await productService.updateProduct(req.params.id, {
    image: file.path,
  });
  return successResponse(
    res,
    product,
    "The product image uploaded successfully",
    200,
  );
});
