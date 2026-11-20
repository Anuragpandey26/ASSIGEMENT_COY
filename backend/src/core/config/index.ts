import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  demoUserId: process.env.DEMO_USER_ID || "demo-user",
  databaseUrl: process.env.DATABASE_URL || "file:./dev.db",
  frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
} as const;
