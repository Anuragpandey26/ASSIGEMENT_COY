import { prisma } from "../../core/database/prisma";
import { FeedProfileDto, FeedResponse } from "./feed.types";

export class FeedService {
  async getFeed(demoUserId: string): Promise<FeedResponse> {
    // 1. Fetch user IDs that the demo user has already swiped on
    const swipedRecords = await prisma.swipe.findMany({
      where: { fromUserId: demoUserId },
      select: { toUserId: true },
    });

    const excludedUserIds = new Set<string>(swipedRecords.map((s) => s.toUserId));
    excludedUserIds.add(demoUserId); // Never display demo user's own profile

    // 2. Fetch profiles eligible for discovery
    const profiles = await prisma.profile.findMany({
      where: {
        userId: {
          notIn: Array.from(excludedUserIds),
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // 3. Strict privacy assurance: map only public presentation fields
    const formattedProfiles: FeedProfileDto[] = profiles.map((p) => {
      let parsedInterests: string[] = [];
      try {
        parsedInterests = JSON.parse(p.interests);
      } catch {
        parsedInterests = p.interests ? p.interests.split(",").map((s) => s.trim()) : [];
      }

      return {
        id: p.id,
        userId: p.userId,
        name: p.name,
        age: p.age,
        photoUrl: p.photoUrl,
        bio: p.bio,
        cityOrCollege: p.cityOrCollege,
        interests: parsedInterests,
      };
    });

    return {
      profiles: formattedProfiles,
      hasMore: false,
    };
  }
}

export const feedService = new FeedService();
