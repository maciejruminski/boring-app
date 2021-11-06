import express from "express";
import bodyparser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

var email;

// var oneTimePassword = Math.random();
var oneTimePassword = 1; // https://www.npmjs.com/package/generate-password
// oneTimePassword = oneTimePassword * 1000000;
oneTimePassword = parseInt(oneTimePassword);

let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: true,
  service: process.env.NODEMAILER_SERVICE,
  from: process.env.NODEMAILER_AUTH_USER,
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS,
  },
});

app.post("/send", function (req, res) {
  email = req.body.email;

  console.log(email);

  // send mail with defined transport object
  var mailOptions = {
    to: req.body.email,
    subject: "Otp for registration is: ",
    html:
      "<h3>OTP for account verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      oneTimePassword +
      "</h1>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // res.render("otp");

    // console.log(error);

    res.status(200).json({ status: "ok" });

    // res.send(true);
    // res.sendStatus(200);
  });
});

app.post("/verify", function (req, res) {
  console.log(req.body.oneTimePassword, oneTimePassword);
  // console.log(res);
  if (req.body.oneTimePassword == oneTimePassword) {
    res.status(200).json({ status: "ok" });
    // res.send("You has been successfully registered");
  } else {
    res.json({ msg: "something doesnt work" });
  }
});

app.post("/resend", function (req, res) {
  var mailOptions = {
    to: email,
    subject: "Otp for registration is: ",
    html:
      "<h3>OTP for account verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      oneTimePassword +
      "</h1>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("otp", { msg: "otp has been sent" });
  });
});

//defining port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
