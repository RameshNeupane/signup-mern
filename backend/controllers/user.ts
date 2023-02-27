import { Request, Response } from "express";

import User from "@models/user";

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default userController;
