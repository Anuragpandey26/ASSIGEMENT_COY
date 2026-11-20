import { prisma } from "../../core/database/prisma";
import { AppError } from "../../core/errors/app-error";
import { SwipeAction, SwipeResult } from "./swipe.types";

export class SwipeService {
  async processSwipe(
    demoUserId: string,
    targetUserId: string,
    action: SwipeAction
  ): Promise<SwipeResult> {
    // 1. Prevent self-swiping
    if (demoUserId === targetUserId) {
      throw new AppError(400, "INVALID_TARGET", "Cannot swipe on yourself");
    }

    // 2. Validate target user exists
    const targetUser = await prisma.user.findUnique({
      where: { id: targetUserId },
      include: { profile: true },
    });

    if (!targetUser) {
      throw new AppError(404, "NOT_FOUND", "Target user does not exist");
    }

    // 3. Atomically persist swipe and handle mutual match creation
    return prisma.$transaction(async (tx) => {
      // Check for duplicate swipe
      const existingSwipe = await tx.swipe.findUnique({
        where: {
          fromUserId_toUserId: {
            fromUserId: demoUserId,
            toUserId: targetUserId,
          },
        },
      });

      if (existingSwipe) {
        throw new AppError(409, "ALREADY_SWIPED", "You have already swiped on this profile.");
      }

      // Create outgoing swipe record
      await tx.swipe.create({
        data: {
          fromUserId: demoUserId,
          toUserId: targetUserId,
          action,
        },
      });

      // PASS never produces a match
      if (action === "PASS") {
        return {
          success: true,
          swipe: { targetUserId, action },
          matched: false,
          match: null,
        };
      }

      // Action is LIKE: check reverse LIKE from target to demo user
      const reverseLike = await tx.swipe.findFirst({
        where: {
          fromUserId: targetUserId,
          toUserId: demoUserId,
          action: "LIKE",
        },
      });

      if (!reverseLike) {
        return {
          success: true,
          swipe: { targetUserId, action },
          matched: false,
          match: null,
        };
      }

      // Mutual LIKE established: normalize IDs canonically (user1Id < user2Id)
      const [user1Id, user2Id] = [demoUserId, targetUserId].sort();

      const match = await tx.match.upsert({
        where: {
          user1Id_user2Id: {
            user1Id,
            user2Id,
          },
        },
        create: {
          user1Id,
          user2Id,
        },
        update: {},
      });

      return {
        success: true,
        swipe: { targetUserId, action },
        matched: true,
        match: {
          id: match.id,
          profile: {
            id: targetUser.profile?.id || targetUserId,
            userId: targetUserId,
            name: targetUser.profile?.name || "Matched User",
            age: targetUser.profile?.age || 0,
            photoUrl: targetUser.profile?.photoUrl || "",
            cityOrCollege: targetUser.profile?.cityOrCollege,
          },
        },
      };
    });
  }
}

export const swipeService = new SwipeService();
