import { Request, Response, NextFunction } from "express";
import { validateSwipeInput } from "./swipe.validator";
import { swipeService } from "./swipe.service";

export class SwipeController {
  async handleSwipe(req: Request, res: Response, next: NextFunction) {
    try {
      const { targetUserId, action } = validateSwipeInput(req.body);
      const result = await swipeService.processSwipe(req.demoUserId, targetUserId, action);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const swipeController = new SwipeController();
