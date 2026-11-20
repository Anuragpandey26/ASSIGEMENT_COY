import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";

export function errorHandler(
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  // Handle Prisma unique constraint error
  if ("code" in err && (err as any).code === "P2002") {
    return res.status(409).json({
      error: {
        code: "ALREADY_SWIPED",
        message: "You have already swiped on this profile.",
      },
    });
  }

  console.error("[Modular Monolith Error]", err);
  return res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred. Please try again.",
    },
  });
}
