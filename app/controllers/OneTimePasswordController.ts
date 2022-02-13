// Libraries.
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { generate } from "generate-password";
import { v4 as uuidv4 } from "uuid";

let generatedOneTimePassword: string = "";
let generatedOneTimePasswordTime = new Date();
let transporter: any;

class OneTimePasswordController {
  generatePassword() {
    const now = new Date();
    const minutesToAdd = 15;

    if (now > generatedOneTimePasswordTime) {
      generatedOneTimePasswordTime = new Date(
        now.getTime() + minutesToAdd * 60000
      );

      generatedOneTimePassword = generate({
        length: 6,
        numbers: true,
        symbols: false,
        lowercase: false,
        uppercase: false,
      });
    }
  }

  createTransport() {
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

  send(req: Request, res: Response) {
    this.generatePassword();

    if (!transporter) {
      this.createTransport();
    }

    const email = req.body.email;
    const mailOptions = {
      to: email,
      subject: "Otp for registration is: ",
      html:
        "<h3>OTP for account verification is </h3>" +
        "<h1 style='font-weight:bold;'>" +
        generatedOneTimePassword +
        "</h1>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.json({
          status: 401,
          message: "Unfortunately, something went wrong.",
        });
      }

      res
        .status(200)
        .json({ status: 200, message: nodemailer.getTestMessageUrl(info) });
    });
  }

  async verify(req: Request, res: Response) {
    this.generatePassword();

    const { oneTimePassword } = req.body;
    const oneTimePasswordIsEmpty = oneTimePassword === "";

    if (oneTimePasswordIsEmpty) {
      return res.json({
        status: 401,
        message: "Please fill in this field.",
      });
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

    res.json({
      status: 200,
      uuid: uuidv4(),
      message: "You have been logged in correctly.",
    });
  }
}

export default new OneTimePasswordController();
