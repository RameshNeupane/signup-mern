import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRouter from "@routes/user";
import configureDB from "@config/database";
import { PORT } from "@config/environment";
import authRouter from "@routes/google-auth";

// express app instance
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use("/user", userRouter);
app.use("/auth", authRouter);

// database connection
configureDB();

// root route
app.get("/", (req, res) => {
  res.send({
    app: "signup-mern",
  });
});

const server = app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});

// on signal interrupt
const onSignalInterrupt = () => {
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      server.close(() => {
        console.log("Express server closed");
        process.exit(0);
      });
    });
  });
};
onSignalInterrupt();
