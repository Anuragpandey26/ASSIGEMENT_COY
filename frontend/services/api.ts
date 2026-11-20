import { FeedResponse, SwipeResponse, MatchesResponse } from "../types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    });

    if (!res.ok) {
      let errorMessage = `Request failed with status ${res.status}`;
      try {
        const errorData = await res.json();
        if (errorData?.error?.message) {
          errorMessage = errorData.error.message;
        }
      } catch {
        // use default error message
      }
      throw new Error(errorMessage);
    }

    return res.json() as Promise<T>;
  }

  async getFeed(): Promise<FeedResponse> {
    return this.request<FeedResponse>("/feed");
  }

  async postSwipe(targetUserId: string, action: "LIKE" | "PASS"): Promise<SwipeResponse> {
    return this.request<SwipeResponse>("/swipe", {
      method: "POST",
      body: JSON.stringify({ targetUserId, action }),
    });
  }

  async getMatches(): Promise<MatchesResponse> {
    return this.request<MatchesResponse>("/matches");
  }

  async resetDemo(): Promise<{ success: boolean; message: string }> {
    return this.request<{ success: boolean; message: string }>("/reset", {
      method: "POST",
    });
  }
}

export const api = new ApiService();
