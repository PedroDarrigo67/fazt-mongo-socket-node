import { config } from "dotenv";

config();

//levanto variable desde .env y exporto
export const MONGODB_URI = process.env.MONGODB_URI