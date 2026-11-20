import { Request, Response, NextFunction } from "express";
import { feedService } from "./feed.service";

export class FeedController {
  async getFeed(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await feedService.getFeed(req.demoUserId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const feedController = new FeedController();
