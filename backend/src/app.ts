import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import csrf from "csurf";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import authRoutes from "./routes/auth/routes/auth.route";
import { env } from "./config/env";

const app = express();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

console.log("CLIENT_URL from env:", env.CLIENT_URL);

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// app.use(csrf({ cookie: true }));

app.use("/api/auth", authRoutes);

export default app;


