import * as express from "express";
import GoogleSheetsController from "@controllers/GoogleSheetsController";

const router = express.Router();

// Users.
router.post(
  "/add-user",
  GoogleSheetsController.addUser.bind(GoogleSheetsController)
);

// Filters.
router.post(
  "/add-filters",
  GoogleSheetsController.addFilters.bind(GoogleSheetsController)
);
router.post(
  "/get-filters",
  GoogleSheetsController.getFilters.bind(GoogleSheetsController)
);

// Historic places.
router.post(
  "/add-historic-places",
  GoogleSheetsController.addHistoricPlace.bind(GoogleSheetsController)
);

router.post(
  "/get-historic-places",
  GoogleSheetsController.getHistoricPlaces.bind(GoogleSheetsController)
);

export default router;
