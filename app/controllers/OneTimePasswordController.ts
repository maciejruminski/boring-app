// Libraries.
import { google } from "googleapis";
import { Request, Response } from "express";
import fetch from "node-fetch";

import nodemailer from "nodemailer";
import { generate } from "generate-password"; // https://www.npmjs.com/package/generate-password
import { v4 as uuidv4 } from "uuid";
import { Console } from "console";

// const generatedOneTimePassword = generate({
//   length: 6,
//   numbers: true,
//   symbols: false,
//   lowercase: false,
//   uppercase: false,
// });

const generatedOneTimePassword = "111111";

var email;

let transporter: any;

class OneTimePasswordController {
  // getClientValues() {
  //   const JwtClient = new google.auth.JWT(
  //     process.env.SERVICEACCOUNT_EMAIL,
  //     null,
  //     process.env.SERVICEACCOUNT_PRIVATE_KEY,
  //     ["https://www.googleapis.com/auth/spreadsheets"],
  //     null
  //   );

  //   const client = google.sheets({ version: "v4", auth: JwtClient });

  //   return client.spreadsheets.values;
  // }

  send(req, res) {
    email = req.body.email;



    if (!transporter) {

      console.log('RESEND!!');


      transporter = nodemailer.createTransport({
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
    }

    // send mail with defined transport object
    var mailOptions = {
      to: req.body.email,
      subject: "Otp for registration is: ",
      html:
        "<h3>OTP for account verification is </h3>" +
        "<h1 style='font-weight:bold;'>" +
        generatedOneTimePassword +
        "</h1>", // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // res.render("otp");
      res
        .status(200)
        .json({ status: 200, message: nodemailer.getTestMessageUrl(info) });
    });
  }

  resend(req, res) {
    var mailOptions = {
      to: email,
      subject: "Otp for registration is: ",
      html:
        "<h3>OTP for account verification is </h3>" +
        "<h1 style='font-weight:bold;'>" +
        generatedOneTimePassword +
        "</h1>", // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      res
        .status(200)
        .json({ status: 200, message: nodemailer.getTestMessageUrl(info) });

      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // res.render("otp", { msg: "otp has been sent" });
    });
  }

  async verify(req, res) {
    const { oneTimePassword } = req.body;

    const oneTimePasswordIsEmpty = oneTimePassword === "";

    if (oneTimePasswordIsEmpty) {
      return res.json({ status: 401, message: "Please fill in this field." });
    }

    const oneTimePasswordLengthIsWrong = oneTimePassword.length !== 6;

    if (oneTimePasswordLengthIsWrong) {
      return res.json({
        status: 401,
        message: "Password must contain exactly 6 digits.",
      });
    }

    const oneTimePasswordIsInvalid =
      oneTimePassword !== generatedOneTimePassword;

    if (oneTimePasswordIsInvalid) {
      return res.json({
        status: 401,
        message: "Password is incorrect, please double check your email.",
      });
    }

    const uuid = uuidv4();

    // await client.spreadsheets.values.append({
    //   spreadsheetId: process.env.SPREADSHEETS_ID,
    //   range: "Sheet1!A2", //sheet name and range of cells
    //   valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    //   resource: {
    //     values: [[uuid]],
    //   },
    // });

    res.status(200).json({
      status: 200,
      uuid: uuid,
      message: "Zostałeś poprawnie zalogowany",
    });
  }
}

export default new OneTimePasswordController();
