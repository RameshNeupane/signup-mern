import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8000;

// express app instance
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// database connection
const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URI as string, () =>
      console.log("database connected.")
    );
  } catch (error) {
    console.error(error);
  }
};
connectDB();

// root route
app.get("/", (req, res) => {
  res.send({
    message: "signup-mern",
  });
});

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});
