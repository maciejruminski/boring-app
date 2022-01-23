import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

// var generatedOneTimePassword = Math.random();
var generatedOneTimePassword = "111111"; // https://www.npmjs.com/package/generate-password
// generatedOneTimePassword = generatedOneTimePassword * 1000000;
// generatedOneTimePassword = parseInt(generatedOneTimePassword);

var email;

let transporter: any;

class OneTimePasswordController {
  send(req, res) {
    email = req.body.email;

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
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // res.render("otp");
      res.status(200).json({ status: "ok" });
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
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.render("otp", { msg: "otp has been sent" });
    });
  }

  async verify(req, res) {
    const { oneTimePassword } = req.body;

    const oneTimePasswordIsEmpty = oneTimePassword === "";

    if (oneTimePasswordIsEmpty) {
      return res.json({ message: "Hasło nie może być puste" });
    }

    const oneTimePasswordIsInvalid =
      oneTimePassword !== generatedOneTimePassword;

    if (oneTimePasswordIsInvalid) {
      return res.json({ message: "Hasło jest niepoprawne" });
    }


    const uuid = uuidv4();

    // await client.spreadsheets.values.append({
    //   spreadsheetId, //spreadsheet id
    //   range: "Sheet1!A2:Z1000", //sheet name and range of cells
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
