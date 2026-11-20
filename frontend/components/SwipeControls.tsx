"use client";

import React from "react";
import { Heart, X } from "lucide-react";

interface SwipeControlsProps {
  onSwipe: (action: "LIKE" | "PASS") => void;
  disabled?: boolean;
}

export function SwipeControls({ onSwipe, disabled = false }: SwipeControlsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-2 space-y-2.5">
      <div className="flex items-center justify-center space-x-8 sm:space-x-10">
        {/* Pass Button */}
        <button
          type="button"
          onClick={() => onSwipe("PASS")}
          disabled={disabled}
          aria-label="Pass on this profile (Left Arrow)"
          className="flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#FFDECE] hover:bg-[#FED7AA] text-black border-2 border-black shadow-[2.5px_2.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <X className="w-7 h-7 stroke-[2.8]" />
        </button>

        {/* Like Button */}
        <button
          type="button"
          onClick={() => onSwipe("LIKE")}
          disabled={disabled}
          aria-label="Like this profile (Right Arrow)"
          className="flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#FF3864] hover:bg-[#E62854] text-black border-2 border-black shadow-[2.5px_2.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
        >
          <Heart className="w-7 h-7 fill-black stroke-black stroke-[1.5]" />
        </button>
      </div>

      {/* Keyboard Shortcut Hint */}
      <div className="text-[11px] font-semibold text-gray-500 pt-1">
        Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-300 text-[10px]">←</kbd> to Pass, <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-300 text-[10px]">→</kbd> to Like
      </div>
    </div>
  );
}
