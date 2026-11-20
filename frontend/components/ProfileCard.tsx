"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Profile } from "../types";
import { Heart, X, MapPin, Sparkles, User } from "lucide-react";

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (action: "LIKE" | "PASS") => void;
  isFrontCard: boolean;
}

const PASTEL_COLORS = [
  "bg-[#E2D9FC]",
  "bg-[#FFDECE]",
  "bg-[#D2F6DE]",
  "bg-[#FFDCE5]",
  "bg-[#FFF066]",
];

export function ProfileCard({ profile, onSwipe, isFrontCard }: ProfileCardProps) {
  const [imageError, setImageError] = useState(false);

  // Motion values for drag gestures
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-12, 0, 12]);
  const opacity = useTransform(x, [-240, -140, 0, 140, 240], [0.65, 1, 1, 1, 0.65]);

  // Indicator opacities
  const likeOpacity = useTransform(x, [20, 90], [0, 1]);
  const passOpacity = useTransform(x, [-20, -90], [0, 1]);

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 80;
    const velocityThreshold = 350;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      onSwipe("LIKE");
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onSwipe("PASS");
    }
  };

  return (
    <motion.div
      style={isFrontCard ? { x, rotate, opacity } : undefined}
      drag={isFrontCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={handleDragEnd}
      initial={{ scale: isFrontCard ? 1 : 0.96, y: isFrontCard ? 0 : 8 }}
      animate={{ scale: isFrontCard ? 1 : 0.96, y: isFrontCard ? 0 : 8 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 w-full bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] overflow-hidden cursor-grab active:cursor-grabbing select-none"
    >
      {/* Swipe Feedback Overlay Indicators */}
      {isFrontCard && (
        <>
          {/* LIKE Indicator (Right drag - Hot Pink with Black Border) */}
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-4 left-4 z-30 pointer-events-none flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#FF3864] text-black font-black text-xs tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] -rotate-12"
          >
            <Heart className="w-3.5 h-3.5 fill-black stroke-black" />
            <span>LIKE</span>
          </motion.div>

          {/* PASS Indicator (Left drag - Peach with Black Border) */}
          <motion.div
            style={{ opacity: passOpacity }}
            className="absolute top-4 right-4 z-30 pointer-events-none flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#FFDECE] text-black font-black text-xs tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] rotate-12"
          >
            <X className="w-3.5 h-3.5 stroke-[3]" />
            <span>PASS</span>
          </motion.div>
        </>
      )}

      {/* Image Container with Fallback - Clean compact height so it never overlaps buttons */}
      <div className="relative w-full h-64 sm:h-72 bg-gray-100 overflow-hidden border-b-2 border-black">
        {!imageError ? (
          <img
            src={profile.photoUrl}
            alt={`${profile.name}, ${profile.age}`}
            className="w-full h-full object-cover pointer-events-none"
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#E2D9FC]/30 text-black">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center mb-2 shadow-[1px_1px_0px_#000]">
              <User className="w-7 h-7 stroke-[2]" />
            </div>
            <span className="text-xs font-bold tracking-wide">Photo unavailable</span>
          </div>
        )}

        {/* Location badge on photo */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-[#FFF066] px-2.5 py-1 rounded-full border border-black shadow-[1px_1px_0px_#000] text-xs font-bold text-black">
          <MapPin className="w-3 h-3 stroke-[2.5]" />
          <span>{profile.cityOrCollege}</span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 space-y-2.5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
            {profile.name},{" "}
            <span className="font-bold text-gray-500">{profile.age}</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-medium text-gray-700 leading-snug line-clamp-2">
            {profile.bio}
          </p>
        </div>

        {/* Interest tags in Coy pastel neo-brutalist chips */}
        {profile.interests && profile.interests.length > 0 && (
          <div className="pt-0.5">
            <div className="flex flex-wrap gap-1.5">
              {profile.interests.map((interest, idx) => {
                const color = PASTEL_COLORS[idx % PASTEL_COLORS.length];
                return (
                  <span
                    key={idx}
                    className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${color} text-black border border-black shadow-[1px_1px_0px_#000]`}
                  >
                    {interest}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
