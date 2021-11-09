// Libraries.
import express from "express";
import dotenv from "dotenv";

// Routes.
import oneTimePasswordRouter from "./routes/one-time-password.js";
import googleSheetsRouter from "./routes/google-sheets.js";

const app = express();

// Environment variables.
dotenv.config();

// Middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public folder.
app.use(express.static("public"));

// Routes.
app.use(oneTimePasswordRouter);
app.use(googleSheetsRouter);

export default app;
