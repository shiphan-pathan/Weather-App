import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import authRoutes from "./routes/auth/routes/auth.route";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(csrf({ cookie: true }));

app.use("/api/auth", authRoutes);

export default app;


















// import express, { Application, Request, Response } from "express";
// import prisma from "./config/prisma";

// const app: Application = express();

// app.use(express.json());

// // Simple DB test route
// app.get("/test-db", async (req: Request, res: Response) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Database connection failed" });
//   }
// });

// export default app;