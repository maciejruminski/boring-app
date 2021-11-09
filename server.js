import express from "express";
import { google } from "googleapis";

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get("/express_backend", async (req, res) => {
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

// app.post("/send_password", (req, res) => {
//   res.send("12345");
// });

app.use(express.urlencoded({ extended: true }));

app.post("/express_backend", async (request, response) => {
  const { article, author } = request.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const JwtClient = new google.auth.JWT(
    "boring-app-test-account@boring-app-331008.iam.gserviceaccount.com",
    null,
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhcGUt8QRJG/eJ\nd9ZBS7CyMAmJDl/BgCsVjct6TxSQ4sg0qfg3Ubcn90BYFz8WntsCqUZwHBb18Ue5\nP/MY/GvHsEynlTzs0hn72vLVyc1P8iyB0L2jNkIxUFZSZVF6v1Ybd+1jKVIdlm3P\nMZCFzDHH1WakF+J97338u7ZGB7GNLX9VPeBWqCyhiSiov+RYa+br6SWWnk3CrXbh\nyt50hOAdLJV36xCwzRjb5nHh31ea3UQhlRUlE6YMVl5X7mJq5zwi8EauhkUa73rC\n5WzXppO4qbbfltCb/ZFhE2dMATOzfErGPjon7l66O7Q3oVqYAH5k2tX91VYuVLOb\nAgKhgZLJAgMBAAECggEADNYih2gm2fwurx7UuKkU/usUpT+H8kkDAFovkN+kiHob\n85ZjXNBZVnw8p1zDfzKSaTy27GFHvr9QrzAAqUE46IjrBHZ58/N5U/RBSYJmdLvn\nDt6SPb3e16ypuE1ZQ10BC9VbU1R3VC9MQgpMyWGOysB69LMAzDJGgTfgXBfKDgNt\ngJFrs4Tdh7sBDWYi/7FicM6LjydP7BTAiK7GQmCpovs+7eH6scILTuAfwRjga84I\nMvubYRk8DaOw1L90Qb+cmKe+sdU24cswE3xhR36ZjEyUUUa0g5oyEr16VLinVMQA\nvrDYeR9YXpn+6A03Nx1wXYwkFAMFOEcVwulvYIbJZQKBgQDxZ+UPuvXpEsanI3G9\nLATRcjJiWHMO59K9bKNvXw+hvXwvnXPUWd82kEk3eUX7nuPLOZ7gKnh5i0GSWmVl\nPwszV12Cvjebi85ymylsqeL1MqZrkg7wXHL+UaOmkNfSmCXxHkToHXlTbhTsZwG3\n/iHNszn8/7zTeogjFwT8Uh+/6wKBgQDvEWQje82h+1fSX/kJTCl4Vzsd3SyoeZ80\nS0kfGzP6sB8gsZXQxEamho82h2GHBQWRn+uGorUp4hRIywwcKmHUl/YN5dcbx+0/\nCU/39IM4yyet9meUK5kYOKbETr+jGJfaX+a301v+VdhVYip3qAaPj1x0RjZtk0ie\nAe2jUei/GwKBgQCPatDsGn+z+2Kns2gEIh2urPB/+tpIVbOes+cY6FnqFh+sThed\nZdM1oFzPJy5LgacFenMH7FNsqi3HnAq3LtAhrVqxrP5uW43ICqR+mSNr1q6GI9za\nMaJjsu7Nqyl9RMTtzbTUTYZh6XlmxP+BZuqAQWVHCEwPO7GbXzaoDMYuBwKBgFn5\nSJ/WI1EYQDgr6JUoNd9VrSkTKZCKnXFX+EAdw9VQXZa3XzP/+rsHn3SdRQZEzJC/\nCCxWpioKLSosSPV8ue8B9hfK7cdF2jNENPWT76L7Soa9WsQ4GFk2UQVGwfcG9Xe5\naiK7CD9TXaTc2jDIaxeyk9Aq8KcSrFzTSvWRiTALAoGAeBERRpGQ/EGcsLZGvHL6\ngaLKJPi+PeHZYrq6zNCpCQoZThQpPYW28lEDz3bjPoljT7PPvVHm3Cfkn/BiHb74\nzOwcwmkNPXlNPgi/sbFdbptA4M8blKaZ45nScPaI/42RMSu4Y8CkUxhIgX3LPwZK\nPv4BBnrGUMma/kz1Kbc1bx4=\n-----END PRIVATE KEY-----\n",
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  // await JwtClient.authorize();

  // google.options({ auth: JwtClient });

  // const client = google.sheets({ version: "v4" });

  // console.log(data.data);

  // const getUserData = (values) => {
  //   let userRowIndex;
  //   let userData = values.find((data, index) => {
  //     userRowIndex = index;
  //     return data[0] === userId;
  //   });

  //   const [index, places, filters] = userData;

  //   return {
  //     userRowIndex,
  //     userData: { index, places, filters },
  //   };
  // };

  //Auth client Object
  // const authClientObject = await auth.getClient();

  //Google sheets instance
  const client = google.sheets({ version: "v4", auth: JwtClient });

  // const googleSheetsInstance = google.sheets({
  //   version: "v4",
  //   auth: authClientObject,
  // });

  // spreadsheet id
  const spreadsheetId = "1b9v6SN6QIG564iHaZ4z1jeO2desK8f3GtYvXCjLzBnI";

  // // Get metadata about spreadsheet
  // const sheetInfo = await googleSheetsInstance.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });

  // const userId = "212";

  //Read from the spreadsheet
  const readData = await client.spreadsheets.values.get({
    spreadsheetId, // spreadsheet id
    majorDimension: "ROWS", // ROWS or COLUMNS
    range: "Sheet1!A2:Z1000", //range of cells to read from.
  });

  // const readData = await googleSheetsInstance.spreadsheets.values.get({
  //   auth,
  //   spreadsheetId, // spreadsheet id
  //   majorDimension: "ROWS", // ROWS or COLUMNS
  //   range: "Sheet1!A2:Z1000", //range of cells to read from.
  //   // range: "Sheet1!A3:B3", //range of cells to read from.
  // });

  console.log(readData.data);

  // const userData = getUserData(readData.data.values);

  // console.log(userData.userRowIndex);

  // const [id, places, filters] = await readData.data.values;
  // const [a, b, c] = [10, 20, 30];

  // console.log(a, b, c);
  // console.log(id, places, filters);

  // await googleSheetsInstance.spreadsheets.values
  //   .update({
  //     spreadsheetId, // spreadsheet id
  //     // range: "Sheet1!A" + (2 + userData.userRowIndex),
  //     range: "Sheet1!A3",
  //     valueInputOption: "RAW",
  //     resource: {
  //       values: [["218928392183921892", "Gdansk"]],
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   });

  //write data into the google sheets
  await googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: "Sheet1!A2:Z1000", //sheet name and range of cells
    valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    resource: {
      values: [[article, author]],
    },
  });

  response.json({ msg: "Request submitted.!!" });
});
