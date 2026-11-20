export interface FeedProfileDto {
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
  profiles: FeedProfileDto[];
  hasMore: boolean;
}
