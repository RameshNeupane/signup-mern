import mongoose from "mongoose";

import { DATABASE_URI } from "./environment";

const configureDB = () => {
  mongoose.connect(DATABASE_URI as string);

  const database = mongoose.connection;

  database.on("connected", () => console.log("database connected."));
  database.on("error", (err) =>
    console.error("database connection error: ", err)
  );
  database.on("disconnected", () => console.log("database disconnected."));
};

export default configureDB;
