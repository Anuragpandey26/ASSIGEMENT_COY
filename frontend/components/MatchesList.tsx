"use client";

import React, { useState } from "react";
import { MatchItem } from "../types";
import { HeartHandshake, MapPin, User, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

interface MatchesListProps {
  matches: MatchItem[];
  isLoading: boolean;
  onRefresh?: () => void;
}

export function MatchesList({ matches, isLoading }: MatchesListProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  if (isLoading) {
    return (
      <div className="space-y-3 py-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="flex items-center space-x-3.5 p-3 rounded-2xl bg-white border border-gray-200 animate-pulse"
          >
            <div className="w-14 h-14 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center space-y-4 bg-white rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000] my-2">
        <div className="w-14 h-14 rounded-full bg-[#FFDCE5] border-2 border-black flex items-center justify-center text-black">
          <HeartHandshake className="w-7 h-7 stroke-[2]" />
        </div>
        <div className="space-y-1 max-w-xs">
          <h3 className="text-xl font-black text-black tracking-tight">
            No matches yet.
          </h3>
          <p className="text-xs font-medium text-gray-600 leading-relaxed">
            Keep discovering to find a mutual connection. Coy never reveals
            non-mutual likes, so nobody knows until you both match!
          </p>
        </div>
        <Link
          href="/discover"
          className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#FF3864] hover:bg-[#E62854] text-black font-extrabold text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Back to Discover</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3 py-1">
      {/* Summary */}
      <div className="flex items-center justify-between px-1">
        <span className="px-2.5 py-0.5 rounded-full bg-[#E2D9FC] border border-black shadow-[1px_1px_0px_#000] text-xs font-bold text-black">
          {matches.length} {matches.length === 1 ? "Match" : "Matches"}
        </span>
        <span className="text-[11px] font-semibold text-gray-500">
          Mutual interest only
        </span>
      </div>

      <div className="space-y-2.5">
        {matches.map((match) => {
          const profile = match.profile;
          const hasError = imageErrors[match.id];
          const formattedDate = new Date(match.createdAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          });

          return (
            <div
              key={match.id}
              className="flex items-center justify-between p-3 rounded-2xl bg-white border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              <div className="flex items-center space-x-3">
                {/* Photo */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-black flex-shrink-0">
                  {!hasError && profile.photoUrl ? (
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(match.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black">
                      <User className="w-6 h-6 stroke-[2]" />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-0.5">
                  <div className="flex items-baseline space-x-1.5">
                    <h3 className="text-sm font-extrabold text-black">
                      {profile.name}
                    </h3>
                    <span className="text-xs font-semibold text-gray-500">
                      {profile.age}
                    </span>
                  </div>
                  {profile.cityOrCollege && (
                    <div className="flex items-center space-x-1 text-[11px] font-medium text-gray-600">
                      <MapPin className="w-2.5 h-2.5 text-black stroke-[2.5]" />
                      <span>{profile.cityOrCollege}</span>
                    </div>
                  )}
                  <div className="text-[10px] font-medium text-gray-400">
                    Matched {formattedDate}
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BE5C] text-black font-extrabold text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex-shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
