import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
} from "@config/environment";
import axios from "axios";
import { profile } from "console";
import { Request, Response } from "express";
import { OAuth2Client, UserRefreshClient } from "google-auth-library";

const oAuth2Client = new OAuth2Client(
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  "postmessage"
);

const authController = {
  googleLogin: async (req: Request, res: Response) => {
    try {
      const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
      const profile = await axios.get(
        "https://people.googleapis.com/v1/people/me",
        {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
          },
        }
      );
      console.log(profile);
      res.json(profile);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },

  googleLoginRefreshToken: async (req: Request, res: Response) => {
    const user = new UserRefreshClient(
      GOOGLE_OAUTH_CLIENT_ID,
      GOOGLE_OAUTH_CLIENT_SECRET,
      req.body.refreshToken
    );
    try {
      const { credentials } = await user.refreshAccessToken();
      res.json(credentials);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default authController;
