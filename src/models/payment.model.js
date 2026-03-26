import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    amount: Number,
    currency: {
      type: String,
      default: "INR",
    },
    stripePaymentIntentId: String,
    paymentMethod: String,
    receiptUrl: String,
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export const Payment = mongoose.model("Payment", paymentSchema);
