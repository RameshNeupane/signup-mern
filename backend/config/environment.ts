import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const DATABASE_URI = process.env.DATABASE_URI;
export const NODE_ENV = process.env.NODE_ENV || "development";
