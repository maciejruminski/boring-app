import { Router } from "express";
import GoogleSheetsController from "../controllers/GoogleSheetsController.js";

const router = new Router();

router.post("/add-user", GoogleSheetsController.addUser);
router.post(
  "/add-filter-types",
  GoogleSheetsController.addFilterTypes.bind(GoogleSheetsController)
);

export default router;
