import { eventEmitter } from "../utils/eventEmitter.js";
import { EVENTS } from "../constants/event.js";
import { sendEmail } from "../utils/mailer.js";

eventEmitter.on(EVENTS.USER_REGISTERED, async (user) => {
  console.log(`sending email to user:`, user);
  try {
    await sendEmail(
      user.email,
      "Welcome 🎉",
      `Hello ${user.name}, Welcome to our platform`,
    );
  } catch (error) {
    console.error("Email Failed", error);
  }
});
