"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Profile } from "../../types";
import { api } from "../../services/api";
import { ProfileCard } from "../../components/ProfileCard";
import { SwipeControls } from "../../components/SwipeControls";
import { MatchModal } from "../../components/MatchModal";
import { EmptyFeed } from "../../components/EmptyFeed";
import { LoadingState } from "../../components/LoadingState";
import { AlertCircle, RotateCcw, HeartHandshake } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedError, setFeedError] = useState<string | null>(null);
  const [swipeError, setSwipeError] = useState<string | null>(null);

  // Match celebration state
  const [activeMatch, setActiveMatch] = useState<{
    id: string;
    userId: string;
    name: string;
    age: number;
    photoUrl: string;
    cityOrCollege?: string;
  } | null>(null);

  // Load feed from backend
  const loadFeed = useCallback(async () => {
    setIsLoading(true);
    setFeedError(null);
    setSwipeError(null);
    try {
      const data = await api.getFeed();
      setProfiles(data.profiles || []);
      setCurrentIndex(0);
    } catch (err: any) {
      setFeedError(err.message || "We couldn't load profiles right now.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  // Handle Swipe (called by drag gestures or buttons)
  const handleSwipe = async (action: "LIKE" | "PASS") => {
    if (isSubmitting || currentIndex >= profiles.length) return;

    const currentProfile = profiles[currentIndex];
    setIsSubmitting(true);
    setSwipeError(null);

    // Optimistically advance to next card
    setCurrentIndex((prev) => prev + 1);

    try {
      const response = await api.postSwipe(currentProfile.userId, action);

      // Trigger celebration ONLY when backend explicitly confirms matched: true
      if (response.matched && response.match) {
        setActiveMatch(response.match.profile);
      }
    } catch (err: any) {
      // Revert optimistic advancement on error
      setCurrentIndex((prev) => Math.max(0, prev - 1));
      setSwipeError(err.message || "That didn't go through. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keyboard navigation (ArrowLeft = PASS, ArrowRight = LIKE)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeMatch || isSubmitting || currentIndex >= profiles.length) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSwipe("PASS");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSwipe("LIKE");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMatch, isSubmitting, currentIndex, profiles]);

  const activeProfile = profiles[currentIndex];
  const nextProfile = profiles[currentIndex + 1];
  const isFeedEmpty = !isLoading && !feedError && currentIndex >= profiles.length;

  return (
    <div className="max-w-sm mx-auto px-4 pt-4 pb-10 flex flex-col justify-start">
      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs pb-3 pt-1">
        {/* 100% Anonymous pill */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFF066] border border-black shadow-[1px_1px_0px_#000] text-xs font-bold text-black">
          <span className="text-xs">🔒</span>
          <span>100% anonymous</span>
        </div>

        {/* Matches CTA */}
        <Link
          href="/matches"
          className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#FFDCE5] hover:bg-[#FFC9D6] border border-black shadow-[1px_1px_0px_#000] text-xs font-bold text-black transition-colors"
        >
          <HeartHandshake className="w-3.5 h-3.5 stroke-[2]" />
          <span>Matches</span>
        </Link>
      </div>

      {/* Swipe Error Banner */}
      {swipeError && (
        <div className="flex items-center justify-between p-3 mb-2 bg-red-100 border border-black rounded-xl text-xs font-bold text-red-950">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span>{swipeError}</span>
          </div>
          <button
            type="button"
            onClick={() => setSwipeError(null)}
            className="text-black underline font-black text-xs ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Card Deck Area */}
      <div className="my-2">
        {isLoading ? (
          <LoadingState />
        ) : feedError ? (
          <div className="p-6 bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] text-center space-y-4 my-6">
            <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-base font-bold text-black">
              We couldn&apos;t load profiles right now.
            </h3>
            <p className="text-xs font-medium text-gray-600">{feedError}</p>
            <button
              type="button"
              onClick={loadFeed}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFF066] text-black text-xs font-bold border border-black shadow-[1px_1px_0px_#000]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        ) : isFeedEmpty ? (
          <EmptyFeed onResetComplete={loadFeed} />
        ) : (
          <div className="relative w-full h-[420px] sm:h-[440px]">
            {/* Underlying Next Card */}
            {nextProfile && (
              <ProfileCard
                key={nextProfile.userId}
                profile={nextProfile}
                onSwipe={() => {}}
                isFrontCard={false}
              />
            )}

            {/* Active Front Card */}
            <AnimatePresence mode="popLayout">
              {activeProfile && (
                <ProfileCard
                  key={activeProfile.userId}
                  profile={activeProfile}
                  onSwipe={handleSwipe}
                  isFrontCard={true}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Swipe Controls (Desktop buttons & touch support) with proper spacing */}
      {!isLoading && !feedError && !isFeedEmpty && (
        <div className="pt-6 sm:pt-7">
          <SwipeControls onSwipe={handleSwipe} disabled={isSubmitting} />
        </div>
      )}

      {/* Match Celebration Dialog */}
      <MatchModal
        isOpen={Boolean(activeMatch)}
        onClose={() => setActiveMatch(null)}
        matchedProfile={activeMatch}
      />
    </div>
  );
}
