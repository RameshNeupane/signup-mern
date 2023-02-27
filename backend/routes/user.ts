import express from "express";

import userController from "@controllers/user";

const userRouter = express.Router();

userRouter.get("/all-users", userController.getAllUsers);

export default userRouter;
