// Libraries.
import * as express from "express";
import * as dotenv from "dotenv";
import * as path from "path";

// Config.
import config from "./config";

// Environment variables.
dotenv.config();

// Routes.
// import {oneTimePasswordRouter} from "./routes/one-time-password";
import oneTimePasswordRouter from "./routes/one-time-password";
import googleSheetsRouter from "./routes/google-sheets";
import googlePlacesRouter from "./routes/google-places";
// import { googlePlacesRouter,... }from "./routes";



// Creates an Express application.
const app = express();

// Middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public folder.
app.use(express.static("public"));

// Routes.
app.use(oneTimePasswordRouter);
app.use(googleSheetsRouter);
app.use(googlePlacesRouter);

// For Heroku.
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(config.port, () => `App is live at ${config.port}`);

export default app;
