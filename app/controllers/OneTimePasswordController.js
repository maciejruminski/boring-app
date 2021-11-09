import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

// var generatedOneTimePassword = Math.random();
var generatedOneTimePassword = "1"; // https://www.npmjs.com/package/generate-password
// generatedOneTimePassword = generatedOneTimePassword * 1000000;
// generatedOneTimePassword = parseInt(generatedOneTimePassword);

var email;

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

class OneTimePasswordController {
  send(req, res) {
    email = req.body.email;

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

    // const JwtClient = new google.auth.JWT(
    //   "boring-app-test-account@boring-app-331008.iam.gserviceaccount.com",
    //   null,
    //   "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhcGUt8QRJG/eJ\nd9ZBS7CyMAmJDl/BgCsVjct6TxSQ4sg0qfg3Ubcn90BYFz8WntsCqUZwHBb18Ue5\nP/MY/GvHsEynlTzs0hn72vLVyc1P8iyB0L2jNkIxUFZSZVF6v1Ybd+1jKVIdlm3P\nMZCFzDHH1WakF+J97338u7ZGB7GNLX9VPeBWqCyhiSiov+RYa+br6SWWnk3CrXbh\nyt50hOAdLJV36xCwzRjb5nHh31ea3UQhlRUlE6YMVl5X7mJq5zwi8EauhkUa73rC\n5WzXppO4qbbfltCb/ZFhE2dMATOzfErGPjon7l66O7Q3oVqYAH5k2tX91VYuVLOb\nAgKhgZLJAgMBAAECggEADNYih2gm2fwurx7UuKkU/usUpT+H8kkDAFovkN+kiHob\n85ZjXNBZVnw8p1zDfzKSaTy27GFHvr9QrzAAqUE46IjrBHZ58/N5U/RBSYJmdLvn\nDt6SPb3e16ypuE1ZQ10BC9VbU1R3VC9MQgpMyWGOysB69LMAzDJGgTfgXBfKDgNt\ngJFrs4Tdh7sBDWYi/7FicM6LjydP7BTAiK7GQmCpovs+7eH6scILTuAfwRjga84I\nMvubYRk8DaOw1L90Qb+cmKe+sdU24cswE3xhR36ZjEyUUUa0g5oyEr16VLinVMQA\nvrDYeR9YXpn+6A03Nx1wXYwkFAMFOEcVwulvYIbJZQKBgQDxZ+UPuvXpEsanI3G9\nLATRcjJiWHMO59K9bKNvXw+hvXwvnXPUWd82kEk3eUX7nuPLOZ7gKnh5i0GSWmVl\nPwszV12Cvjebi85ymylsqeL1MqZrkg7wXHL+UaOmkNfSmCXxHkToHXlTbhTsZwG3\n/iHNszn8/7zTeogjFwT8Uh+/6wKBgQDvEWQje82h+1fSX/kJTCl4Vzsd3SyoeZ80\nS0kfGzP6sB8gsZXQxEamho82h2GHBQWRn+uGorUp4hRIywwcKmHUl/YN5dcbx+0/\nCU/39IM4yyet9meUK5kYOKbETr+jGJfaX+a301v+VdhVYip3qAaPj1x0RjZtk0ie\nAe2jUei/GwKBgQCPatDsGn+z+2Kns2gEIh2urPB/+tpIVbOes+cY6FnqFh+sThed\nZdM1oFzPJy5LgacFenMH7FNsqi3HnAq3LtAhrVqxrP5uW43ICqR+mSNr1q6GI9za\nMaJjsu7Nqyl9RMTtzbTUTYZh6XlmxP+BZuqAQWVHCEwPO7GbXzaoDMYuBwKBgFn5\nSJ/WI1EYQDgr6JUoNd9VrSkTKZCKnXFX+EAdw9VQXZa3XzP/+rsHn3SdRQZEzJC/\nCCxWpioKLSosSPV8ue8B9hfK7cdF2jNENPWT76L7Soa9WsQ4GFk2UQVGwfcG9Xe5\naiK7CD9TXaTc2jDIaxeyk9Aq8KcSrFzTSvWRiTALAoGAeBERRpGQ/EGcsLZGvHL6\ngaLKJPi+PeHZYrq6zNCpCQoZThQpPYW28lEDz3bjPoljT7PPvVHm3Cfkn/BiHb74\nzOwcwmkNPXlNPgi/sbFdbptA4M8blKaZ45nScPaI/42RMSu4Y8CkUxhIgX3LPwZK\nPv4BBnrGUMma/kz1Kbc1bx4=\n-----END PRIVATE KEY-----\n",
    //   ["https://www.googleapis.com/auth/spreadsheets"]
    // );

    // const client = google.sheets({ version: "v4", auth: JwtClient });

    // const spreadsheetId = "1b9v6SN6QIG564iHaZ4z1jeO2desK8f3GtYvXCjLzBnI";

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
