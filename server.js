import express from "express";
import { google } from "googleapis";

const port = process.env.PORT || 5000;

const app = express();

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
}); //Line 11

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`
//   <form action="" method="POST">
//   <div class="form-group">
//     <label for="formGroupExampleInput">Article Title</label>
//     <input type="text" class="form-control" id="article" name="article" placeholder="Article">
//   </div>
//   <div class="form-group">
//     <label for="formGroupExampleInput2">Article Author</label>
//     <input type="text" class="form-control" id="author" name="author" placeholder="Author">
//   </div>
//   <br>
//   <button type="submit" class="btn btn-primary btn-sm">Submit</button>
// </form>`);
// });

// app.post("/", async (request, response) => {
//   const { article, author } = request.body;
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "keys.json", //the key file
//     //url to spreadsheets API
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   const getUserData = (values) => {
//     let userRowIndex;
//     let userData = values.find((data, index) => {
//       userRowIndex = index;
//       return data[0] === userId;
//     });

//     const [index, places, filters] = userData;

//     return {
//       userRowIndex,
//       userData: { index, places, filters },
//     };
//   };

//   //Auth client Object
//   const authClientObject = await auth.getClient();

//   //Google sheets instance
//   const googleSheetsInstance = google.sheets({
//     version: "v4",
//     auth: authClientObject,
//   });

//   // spreadsheet id
//   const spreadsheetId = "1b9v6SN6QIG564iHaZ4z1jeO2desK8f3GtYvXCjLzBnI";

//   // Get metadata about spreadsheet
//   const sheetInfo = await googleSheetsInstance.spreadsheets.get({
//     auth,
//     spreadsheetId,
//   });

//   const userId = "212";

//   //Read from the spreadsheet
//   const readData = await googleSheetsInstance.spreadsheets.values.get({
//     auth, //auth object
//     spreadsheetId, // spreadsheet id
//     majorDimension: "ROWS", // ROWS or COLUMNS
//     range: "Sheet1!A2:Z1000", //range of cells to read from.
//     // range: "Sheet1!A3:B3", //range of cells to read from.
//   });

//   const userData = getUserData(readData.data.values);

//   console.log(userData.userRowIndex);

//   // const [id, places, filters] = await readData.data.values;
//   // const [a, b, c] = [10, 20, 30];

//   // console.log(a, b, c);
//   // console.log(id, places, filters);

//   await googleSheetsInstance.spreadsheets.values
//     .update({
//       spreadsheetId, // spreadsheet id
//       range: "Sheet1!A" + (2 + userData.userRowIndex),
//       valueInputOption: "RAW",
//       resource: {
//         values: [["212", "Gdansk"]],
//       },
//     })
//     .then(function (response) {
//       console.log(response);
//     });

//   //write data into the google sheets
//   // await googleSheetsInstance.spreadsheets.values.append({
//   //   auth, //auth object
//   //   spreadsheetId, //spreadsheet id
//   //   range: "Sheet1!A:C", //sheet name and range of cells
//   //   valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
//   //   resource: {
//   //     values: [[article, author]],
//   //   },
//   // });

//   response.send("Request submitted.!!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
