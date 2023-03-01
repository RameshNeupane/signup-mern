import { Request, Response } from "express";

import User from "@models/user";
import { hashPassword } from "@utils/hashPassword";
import { comparePassword } from "@utils/comparePassword";

const userController = {
  // get all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();

      if (allUsers.length === 0) {
        res.status(404).json({ message: "no user is created." });
      } else {
        res.status(200).json(allUsers);
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  // get single user by userId
  getSingleUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ _id: userId });

      if (user?._id) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "user not found." });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  // create a user
  createUser: async (req: Request, res: Response) => {
    try {
      const hashedPassword = hashPassword(req.body.password);
      const user = new User({ ...req.body, password: hashedPassword });
      await user.save();
      res.status(201).json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  // login user
  loginUser: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username as string });

      if (user?._id) {
        const isMatched = comparePassword(password, user?.password as string);

        if (isMatched) {
          res.status(200).json(user);
        } else {
          res.status(401).json({ message: "invalid username or password." });
        }
      } else {
        res.status(404).json({ message: "user not found." });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  // update user
  updateUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const updates = req.body;
      updates.updated_at = Date.now();
      const result = await User.updateOne({ _id: userId }, updates);

      if (result.modifiedCount === 0) {
        res.status(404).json({ message: "user not found." });
      } else {
        res.status(200).json({ message: "user updated successfully." });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  // delete user
  deleteUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const result = await User.deleteOne({ _id: userId });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: "user not found." });
      } else {
        res.status(200).json({ message: "user deleted successfully." });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default userController;
