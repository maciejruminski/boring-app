// Libraries.
import { Request, Response } from "express";
import * as nodemailer from "nodemailer";
import { generate } from "generate-password";
import { v4 as uuidv4 } from "uuid";

// Config.
import config from "../config";

const {
  nodemailerHost,
  nodemailerPort,
  nodemailerService,
  nodemailerAuthUser,
  nodemailerAuthPass,
} = config;

let transporter;
let generatedOneTimePassword: string = "";
let generatedOneTimePasswordTime = new Date();

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

  send(req: Request, res: Response) {
    this.generatePassword();

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

    if (!transporter) {
      transporter = nodemailer.createTransport({
        host: nodemailerHost,
        port: nodemailerPort,
        secure: true,
        service: nodemailerService,
        from: nodemailerAuthUser,
        auth: {
          user: nodemailerAuthUser,
          pass: nodemailerAuthPass,
        },
      });
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.json({
          status: 401,
          message: "Unfortunately, something went wrong.",
        });
      }

      res.json({ status: "OK", message: nodemailer.getTestMessageUrl(info) });
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
      status: "OK",
      uuid: uuidv4(),
      message: "You have been logged in correctly.",
    });
  }
}

export default new OneTimePasswordController();
