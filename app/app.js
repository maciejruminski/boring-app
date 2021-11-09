import express from "express";
import bodyparser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Routes.
import oneTimePasswordRouter from "./routes/one-time-password.js";
import googleSheetsRouter from "./routes/google-sheets.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes.
app.use(oneTimePasswordRouter);
app.use(googleSheetsRouter);

export default app;
