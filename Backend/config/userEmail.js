const mailer = require("nodemailer");
require('dotenv').config()
const senderEmail = mailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSKEY,
  },
});
module.exports=senderEmail