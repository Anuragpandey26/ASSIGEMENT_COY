export type SwipeAction = "LIKE" | "PASS";

export interface SwipeInput {
  targetUserId: string;
  action: SwipeAction;
}

export interface MatchedProfileSummary {
  id: string;
  userId: string;
  name: string;
  age: number;
  photoUrl: string;
  cityOrCollege?: string;
}

export interface SwipeResult {
  success: boolean;
  swipe: {
    targetUserId: string;
    action: SwipeAction;
  };
  matched: boolean;
  match: {
    id: string;
    profile: MatchedProfileSummary;
  } | null;
}
