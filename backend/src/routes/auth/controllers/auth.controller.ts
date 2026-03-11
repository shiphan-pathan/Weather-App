import { Request, Response } from "express";
import {
  signupService,
  loginService,
  refreshService,
  logoutService,
} from "../services/auth.service";
import { setAuthCookies } from "../../../utils/cookieOptions";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  await signupService(name, email, password);

  res.status(201).json({ message: "User created successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = await loginService(email, password);

  setAuthCookies(res, accessToken, refreshToken);

  res.json({ message: "Login successful" });
};

export const refresh = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const { newAccessToken, newRefreshToken } = await refreshService(token);

  setAuthCookies(res, newAccessToken, newRefreshToken);

  res.json({ message: "Token refreshed" });
};

export const logout = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (token) await logoutService(token);

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.json({ message: "Logged out successfully" });
};

export const getCookies = (req: Request, res: Response) => {
  const token = req.cookies.accessToken; 

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  // res.json({ token });

  return res.status(200).json({
    authenticated: true,
  })
};

