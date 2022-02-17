import * as express from "express";
import GooglePlacesController from "../controllers/GooglePlacesController";

const router = express.Router();

router.post(
  "/get-places",
  GooglePlacesController.getPlaces.bind(GooglePlacesController)
);

router.post(
  "/get-place-details",
  GooglePlacesController.getPlaceDetails.bind(GooglePlacesController)
);

export default router;
