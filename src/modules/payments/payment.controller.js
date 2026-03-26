import stripe from "../../config/stripe.js";
import { Payment } from "../../models/payment.model.js";
import { Order } from "../../models/order.model.js";

export const createPaymentIntent = async (req, res) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId).populate("items.product");
  if (!orderId) {
    return res.status(400).json({
      status: false,
      message: "Order Not Found!",
    });
  }
  console.log("orderId::", orderId);
  console.log("OrderItems::", order);
  const amount = order.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "inr",
    metadata: {
      orderId: order._id.toString(),
      userId: order.user.toString(),
    },
  });

  await Payment.create({
    userId: order.user,
    orderId: order._id,
    amount,
    stripePaymentIntentId: paymentIntent.id,
    status: "pending",
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
};

export const paymentWebhook = async (req, res) => {
  const event = req.body;
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;

    await Payment.findOneAndUpdate(
      {
        stripePaymentIntentId: paymentIntent.id,
      },
      {
        status: "success",
        paymentMethod: paymentIntent.payment_method_types[0],
        receiptUrl: paymentIntent.charges.data[0]?.receipt_url,
      },
    );

    await Order.findByIdAndUpdate(orderId, {
      status: "paid",
    });
  }
  if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object;
    await Payment.findOneAndUpdate(
      { stripePaymentIntentId: paymentIntent.id },
      { status: "failed" },
    );
  }
  res.sendStatus(200);
};
