import express, { Application, Request, Response } from "express";
import prisma from "./config/prisma";

const app: Application = express();

app.use(express.json());

// Simple DB test route
app.get("/test-db", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Database connection failed" });
  }
});

export default app;