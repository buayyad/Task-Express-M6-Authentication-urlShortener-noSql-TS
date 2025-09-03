import dotenv from "dotenv";
dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGODB_URI,
  port: process.env.PORT,
};
