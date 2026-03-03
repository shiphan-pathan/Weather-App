import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../helpers/token.helper";

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded: any = verifyAccessToken(token);
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};