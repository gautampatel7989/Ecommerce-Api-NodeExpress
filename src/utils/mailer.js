import Mail from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = Mail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_ID,
    to,
    subject,
    text,
  });
};
