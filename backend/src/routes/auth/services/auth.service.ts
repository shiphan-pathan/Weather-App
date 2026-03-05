import prisma from "../../../config/prisma";
import {
  hashPassword,
  comparePassword,
} from "../../../helpers/password.helper";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../../helpers/token.helper";

export const signupService = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashed = await hashPassword(password);

  return prisma.user.create({
    data: { name, email, password: hashed },
  });
};

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("Invalid credentials");

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return { accessToken, refreshToken };
};

export const refreshService = async (token: string) => {
  const decoded: any = verifyRefreshToken(token);

  const storedToken = await prisma.refreshToken.findUnique({
    where: { token },
  });

  if (!storedToken) throw new Error("Invalid refresh token");

  // if (storedToken.expiresAt < new Date()) {
  //   throw new Error("Refresh token expired");
  // }

  await prisma.refreshToken.delete({ where: { token } });

  const newAccessToken = generateAccessToken(decoded.userId);
  const newRefreshToken = generateRefreshToken(decoded.userId);

  await prisma.refreshToken.create({
    data: {
      token: newRefreshToken,
      userId: decoded.userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return { newAccessToken, newRefreshToken };
};

export const logoutService = async (token: string) => {
  await prisma.refreshToken.deleteMany({ where: { token } });
};