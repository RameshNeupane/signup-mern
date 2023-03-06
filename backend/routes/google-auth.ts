import authController from "@controllers/google-auth";
import express from "express";

const authRouter = express.Router();

authRouter.post("/google", authController.googleLogin);

export default authRouter;
