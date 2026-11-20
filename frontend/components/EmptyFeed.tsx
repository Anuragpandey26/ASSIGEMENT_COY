"use client";

import React, { useState } from "react";
import { Check, RotateCcw, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { api } from "../services/api";

interface EmptyFeedProps {
  onResetComplete: () => void;
}

export function EmptyFeed({ onResetComplete }: EmptyFeedProps) {
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await api.resetDemo();
      onResetComplete();
    } catch (e) {
      console.error("Reset demo failed", e);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] text-center space-y-4 my-4">
      {/* Mint green checkmark badge */}
      <div className="w-14 h-14 rounded-full bg-[#D2F6DE] border-2 border-black flex items-center justify-center text-black">
        <Check className="w-7 h-7 stroke-[3]" />
      </div>

      <div className="space-y-1 max-w-xs">
        <h3 className="text-xl font-black text-black tracking-tight">
          You&apos;re all caught up.
        </h3>
        <p className="text-xs font-medium text-gray-600 leading-relaxed">
          There are no more profiles to discover right now. Remember: matches
          happen only when interest is mutual!
        </p>
      </div>

      <div className="flex flex-col w-full max-w-xs space-y-2.5 pt-1">
        <Link
          href="/matches"
          className="flex items-center justify-center space-x-1.5 w-full py-2.5 px-4 rounded-full bg-[#FF3864] hover:bg-[#E62854] text-black font-extrabold text-xs border-2 border-black shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          <HeartHandshake className="w-4 h-4" />
          <span>View your matches</span>
        </Link>

        <button
          type="button"
          onClick={handleReset}
          disabled={isResetting}
          className="flex items-center justify-center space-x-1.5 w-full py-2 px-4 rounded-full bg-[#FFF066] hover:bg-[#FED7AA] text-black font-bold text-xs border border-black shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isResetting ? "animate-spin" : ""}`} />
          <span>{isResetting ? "Resetting demo..." : "Reset demo swipes"}</span>
        </button>
      </div>
    </div>
  );
}
