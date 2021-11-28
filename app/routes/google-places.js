import { Router } from "express";
import GooglePlacesController from "../controllers/GooglePlacesController.js";

const router = new Router();

router.post("/get-places", GooglePlacesController.getPlaces);
router.post("/get-place-details", GooglePlacesController.getPlaceDetails);

export default router;
