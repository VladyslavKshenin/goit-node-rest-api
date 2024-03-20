import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const { MAILTRAP_PASSWORD } = process.env;
const { MAILTRAP_USER } = process.env;

const nodemailerConfig = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
};

export const sendEmail = async (data) => {
  const transport = nodemailer.createTransport(nodemailerConfig);
  const emailBady = {
    ...data,
    from: "GoIt NodeRestApi <legenda.bk@gmail.com>",
  };

  transport
    .sendMail(emailBady)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
};
