import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import csrf from "csurf";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import authRoutes from "./routes/auth/routes/auth.route";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// app.use(csrf({ cookie: true }));

app.use("/api/auth", authRoutes);

export default app;


