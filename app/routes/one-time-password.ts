import * as express from "express";
import OneTimePasswordController from "../controllers/OneTimePasswordController";

const router = express.Router();

router.post("/send-password", OneTimePasswordController.send);
router.post("/resend-password", OneTimePasswordController.resend);
router.post("/verify-password", OneTimePasswordController.verify);


export default router;
