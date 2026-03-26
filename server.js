import app from "./app.js";
import { connectDB } from "./src/config/db.js";
import { config } from "./src/config/env.js";

const StartServer = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
};

StartServer();
