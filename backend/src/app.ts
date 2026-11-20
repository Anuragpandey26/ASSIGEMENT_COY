import express from "express";
import cors from "cors";
import { config } from "./core/config";
import { demoUserMiddleware } from "./core/middleware/demo-user.middleware";
import { errorHandler } from "./core/middleware/error.middleware";
import { feedRouter } from "./modules/feed";
import { swipeRouter } from "./modules/swipe";
import { matchRouter } from "./modules/match";
import { systemRouter } from "./modules/system";

export function createApp() {
  const app = express();

  // CORS Configuration
  app.use(
    cors({
      origin: [config.frontendOrigin, "http://localhost:3000", "http://127.0.0.1:3000"],
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

  // Core global middleware
  app.use(express.json());
  app.use(demoUserMiddleware);

  // System & Health Module
  app.use("/", systemRouter);
  app.use("/api", systemRouter);

  // Feature Modules (Mounted on root and /api for compatibility)
  app.use("/feed", feedRouter);
  app.use("/api/feed", feedRouter);

  app.use("/swipe", swipeRouter);
  app.use("/api/swipe", swipeRouter);

  app.use("/matches", matchRouter);
  app.use("/api/matches", matchRouter);

  // Centralized Error Handling Middleware
  app.use(errorHandler);

  return app;
}
