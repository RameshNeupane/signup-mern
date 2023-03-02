import express from "express";

import userController from "@controllers/user";

const userRouter = express.Router();

userRouter.get("/all-users", userController.getAllUsers);
userRouter.get("/:userId", userController.getSingleUser);
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.put("/:userId", userController.updateUser);
userRouter.delete("/:userId", userController.deleteUser);

export default userRouter;
