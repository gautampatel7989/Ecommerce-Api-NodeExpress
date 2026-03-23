import express from "express";
import { createOrder, getOrders } from "./order.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createOrder);
router.get("/", authenticate, getOrders);

export default router;
