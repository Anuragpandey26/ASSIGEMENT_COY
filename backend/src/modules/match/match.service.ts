import { prisma } from "../../core/database/prisma";
import { MatchItem, MatchesResponse } from "./match.types";

export class MatchService {
  async getMatchesForUser(demoUserId: string): Promise<MatchesResponse> {
    const matches = await prisma.match.findMany({
      where: {
        OR: [
          { user1Id: demoUserId },
          { user2Id: demoUserId },
        ],
      },
      include: {
        user1: { include: { profile: true } },
        user2: { include: { profile: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedMatches: MatchItem[] = matches.map((match) => {
      const otherUser = match.user1Id === demoUserId ? match.user2 : match.user1;
      const profile = otherUser.profile;

      let parsedInterests: string[] = [];
      if (profile?.interests) {
        try {
          parsedInterests = JSON.parse(profile.interests);
        } catch {
          parsedInterests = profile.interests.split(",").map((s) => s.trim());
        }
      }

      return {
        id: match.id,
        createdAt: match.createdAt,
        profile: {
          id: profile?.id || otherUser.id,
          userId: otherUser.id,
          name: profile?.name || "Matched User",
          age: profile?.age || 0,
          photoUrl: profile?.photoUrl || "",
          cityOrCollege: profile?.cityOrCollege || "",
          bio: profile?.bio,
          interests: parsedInterests,
        },
      };
    });

    return { matches: formattedMatches };
  }
}

export const matchService = new MatchService();
