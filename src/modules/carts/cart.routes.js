import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { addToCart, getCart, removeCart } from "./cart.controller.js";

const router = express.Router();

router.post("/", authenticate, addToCart);
router.get("/", authenticate, getCart);
router.delete("/:productId", authenticate, removeCart);

export default router;
