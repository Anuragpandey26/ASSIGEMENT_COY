import { Request, Response, NextFunction } from "express";
import { config } from "../config";

declare global {
  namespace Express {
    interface Request {
      demoUserId: string;
    }
  }
}

export function demoUserMiddleware(req: Request, _res: Response, next: NextFunction) {
  req.demoUserId = config.demoUserId;
  next();
}
