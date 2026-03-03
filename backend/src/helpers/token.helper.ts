import * as jwt from "jsonwebtoken";
import { env } from "../config/env";

export const generateAccessToken = (userId: string) => {
  return jwt.sign(
    { userId },
    env.accessSecret,
    { expiresIn: "15m" }
  );
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign(
    { userId },
    env.refreshSecret,
    { expiresIn: "7d" }
  );
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, env.accessSecret);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, env.refreshSecret);
};