import express from "express";
import { authorize } from "../../middlewares/authorize.middleware.js";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
} from "./product.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createProductSchema,
  updateProductSchema,
} from "./product.validation.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { upload } from "../../middlewares/upload.middleware.js";

const router = express.Router();
router.get("/", authenticate, getAllProducts);
router.get("/:id", authenticate, getProductById);
router.post(
  "/",
  authenticate,
  // authorize("create_product"),
  validate(createProductSchema),
  createProduct,
);
router.put("/:id", authenticate, validate(updateProductSchema), updateProduct);
router.delete("/:id", authenticate, authorize("delete_product"), deleteProduct);
router.post(
  "/:id/upload",
  authenticate,
  upload.single("image"),
  uploadProductImage,
);

export default router;
