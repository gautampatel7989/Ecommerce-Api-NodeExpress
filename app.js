import express from "express";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import { notFound } from "./src/middlewares/notFound.middleware.js";
import { httpLogger } from "./src/middlewares/logger.middleware.js";
import authRoutes from "./src/modules/auth/ auth.routes.js";
import userRoutes from "./src/modules/user/user.routes.js";
import productRoutes from "./src/modules/product/product.routes.js";
import cartRoutes from "./src/modules/carts/cart.routes.js";
import orderRoutes from "./src/modules/order/order.routes.js";
import "./src/listeners/user.listner.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/health", (req, res) => {
  req.log.info("Health check Api hit");
  res.status(200).json({
    status: "OK",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
