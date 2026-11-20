"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchedProfile: {
    id: string;
    userId: string;
    name: string;
    age: number;
    photoUrl: string;
    cityOrCollege?: string;
  } | null;
}

export function MatchModal({ isOpen, onClose, matchedProfile }: MatchModalProps) {
  if (!isOpen || !matchedProfile) return null;

  const partnerInitial = matchedProfile.name ? matchedProfile.name.charAt(0).toUpperCase() : "M";

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="match-heading"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-full max-w-[340px] bg-[#FF3864] rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_#000] text-center space-y-4 relative"
        >
          {/* Overlapping Circles: You + Heart + Partner (Directly from Screenshot 1) */}
          <div className="flex items-center justify-center -space-x-3 pt-1">
            {/* You circle */}
            <div className="w-14 h-14 rounded-full bg-[#FFE2D1] border-2 border-black flex items-center justify-center font-black text-sm text-black">
              You
            </div>

            {/* Heart connector */}
            <div className="z-10 w-7 h-7 rounded-full bg-white border-2 border-black flex items-center justify-center text-[#FF3864]">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </div>

            {/* Partner circle */}
            <div className="w-14 h-14 rounded-full bg-[#CBE9FE] border-2 border-black flex items-center justify-center overflow-hidden font-black text-base text-black">
              {matchedProfile.photoUrl ? (
                <img
                  src={matchedProfile.photoUrl}
                  alt={matchedProfile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ) : (
                <span>{partnerInitial}</span>
              )}
            </div>
          </div>

          {/* Heading and details */}
          <div>
            <h2
              id="match-heading"
              className="text-2xl font-black text-black tracking-tight"
            >
              It&apos;s a match!
            </h2>
            <p className="text-xs font-bold text-black mt-1">
              You and {matchedProfile.name} added each other.
            </p>
          </div>

          {/* Action buttons matching Screenshot 1 */}
          <div className="space-y-2 pt-1">
            {/* Say hi on WhatsApp */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5C] text-black font-extrabold text-sm border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Say hi on WhatsApp
            </a>

            {/* Keep discovering */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 px-4 rounded-full bg-white hover:bg-gray-100 text-black font-bold text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Keep discovering
            </button>

            {/* Link to matches */}
            <Link
              href="/matches"
              onClick={onClose}
              className="inline-flex items-center space-x-1 text-xs font-bold text-black underline underline-offset-2 pt-1"
            >
              <span>View match list</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
