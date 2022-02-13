import * as express from "express";
import GooglePlacesController from "@controllers/GooglePlacesController";

const router = express.Router();

router.post("/get-places", GooglePlacesController.getPlaces);
router.post("/get-place-details", GooglePlacesController.getPlaceDetails);

export default router;
