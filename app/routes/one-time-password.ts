import * as express from "express";
import OneTimePasswordController from "../controllers/OneTimePasswordController";

const router = express.Router();

router.post(
  "/send-password",
  OneTimePasswordController.send.bind(OneTimePasswordController)
);

router.post(
  "/resend-password",
  OneTimePasswordController.resend.bind(OneTimePasswordController)
);

router.post(
  "/verify-password",
  OneTimePasswordController.verify.bind(OneTimePasswordController)
);

export default router;
