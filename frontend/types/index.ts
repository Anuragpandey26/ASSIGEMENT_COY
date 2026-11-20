export interface Profile {
  id: string;
  userId: string;
  name: string;
  age: number;
  photoUrl: string;
  bio: string;
  cityOrCollege: string;
  interests: string[];
}

export interface FeedResponse {
  profiles: Profile[];
  hasMore: boolean;
}

export interface SwipeResponse {
  success: boolean;
  swipe: {
    targetUserId: string;
    action: "LIKE" | "PASS";
  };
  matched: boolean;
  match: {
    id: string;
    profile: {
      id: string;
      userId: string;
      name: string;
      age: number;
      photoUrl: string;
      cityOrCollege?: string;
    };
  } | null;
}

export interface MatchItem {
  id: string;
  createdAt: string;
  profile: {
    id: string;
    userId: string;
    name: string;
    age: number;
    photoUrl: string;
    cityOrCollege: string;
    bio?: string;
    interests?: string[];
  };
}

export interface MatchesResponse {
  matches: MatchItem[];
}
