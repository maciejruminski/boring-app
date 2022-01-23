import * as express from "express";
import GoogleSheetsController from "../controllers/GoogleSheetsController";

const router = express.Router();

router.post("/add-user", GoogleSheetsController.addUser);
router.post(
  "/add-filter-types",
  GoogleSheetsController.addFilterTypes.bind(GoogleSheetsController)
);

export default router;
