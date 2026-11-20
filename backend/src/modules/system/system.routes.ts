import { Router, Request, Response, NextFunction } from "express";
import { prisma } from "../../core/database/prisma";

const router = Router();

// Health check
router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Demo reset endpoint for reviewers
router.post("/reset", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const demoUserId = req.demoUserId;
    await prisma.swipe.deleteMany({
      where: { fromUserId: demoUserId },
    });
    await prisma.match.deleteMany({
      where: {
        OR: [{ user1Id: demoUserId }, { user2Id: demoUserId }],
      },
    });
    res.status(200).json({ success: true, message: "Demo swipes and matches reset successfully." });
  } catch (err) {
    next(err);
  }
});

export { router as systemRouter };
