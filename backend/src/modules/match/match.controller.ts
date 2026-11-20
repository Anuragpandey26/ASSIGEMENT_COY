import { Request, Response, NextFunction } from "express";
import { matchService } from "./match.service";

export class MatchController {
  async getMatches(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await matchService.getMatchesForUser(req.demoUserId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const matchController = new MatchController();
