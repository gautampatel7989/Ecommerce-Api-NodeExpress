import express from "express";

import { createPaymentIntent, paymentWebhook } from "./payment.controller.js";

const router = express.Router();

router.post("/create-payment", createPaymentIntent);

router.post(
  "/webhook",
  express.raw({
    type: "application/json",
  }),
  paymentWebhook,
);

export default router;
