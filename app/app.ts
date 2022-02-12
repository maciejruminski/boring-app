// Libraries.
import express from 'express';
import dotenv from "dotenv";

// Routes.
// import {oneTimePasswordRouter} from "./routes/one-time-password";
import oneTimePasswordRouter from "./routes/one-time-password";
import googleSheetsRouter from "./routes/google-sheets";
import googlePlacesRouter from "./routes/google-places";
// import { googlePlacesRouter,... }from "./routes";

// Environment variables.
dotenv.config();

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

export default app;
