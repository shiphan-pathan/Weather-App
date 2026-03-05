import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
  "ACCESS_TOKEN_EXPIRES",
  "REFRESH_TOKEN_EXPIRES",
] as const;

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  PORT: Number(process.env.PORT) || 5000,
  accessSecret: process.env.JWT_ACCESS_SECRET!,
  refreshSecret: process.env.JWT_REFRESH_SECRET!,
  accessExpires: process.env.ACCESS_TOKEN_EXPIRES!,
  refreshExpires: process.env.REFRESH_TOKEN_EXPIRES!,
};