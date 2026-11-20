export interface MatchProfileDto {
  id: string;
  userId: string;
  name: string;
  age: number;
  photoUrl: string;
  cityOrCollege: string;
  bio?: string;
  interests?: string[];
}

export interface MatchItem {
  id: string;
  createdAt: Date;
  profile: MatchProfileDto;
}

export interface MatchesResponse {
  matches: MatchItem[];
}
