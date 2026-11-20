"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, HeartHandshake } from "lucide-react";

export function AppHeader() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isDiscover = pathname === "/discover";
  const isMatches = pathname === "/matches";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 h-20">
        {/* Coy Wordmark */}
        <Link
          href="/"
          className="text-3xl sm:text-4xl font-black tracking-tight text-black lowercase leading-none flex-shrink-0"
          aria-label="Coy Home"
        >
          coy<span className="text-[#FF3864]">.</span>
        </Link>

        {/* Upper Navigation Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-5 text-sm font-bold text-black">
          {/* Home Tab */}
          <Link
            href="/"
            className={`px-3 sm:px-3.5 py-1.5 rounded-full transition-all ${
              isHome
                ? "bg-[#E2D9FC] text-black font-black border border-black shadow-[1px_1px_0px_#000]"
                : "text-gray-600 hover:text-black font-semibold"
            }`}
          >
            Home
          </Link>

          {/* Discover Tab (Normal Tab in the Upper Header) */}
          <Link
            href="/discover"
            className={`px-3 sm:px-3.5 py-1.5 rounded-full transition-all flex items-center space-x-1.5 ${
              isDiscover
                ? "bg-[#FF3864] text-black font-black border border-black shadow-[1px_1px_0px_#000]"
                : "text-gray-600 hover:text-[#FF3864] font-semibold"
            }`}
          >
            <Compass className="w-4 h-4 stroke-[2.5]" />
            <span>Discover</span>
          </Link>

          {/* Matches Tab (Normal Tab in the Upper Header) */}
          <Link
            href="/matches"
            className={`px-3 sm:px-3.5 py-1.5 rounded-full transition-all flex items-center space-x-1.5 ${
              isMatches
                ? "bg-[#D2F6DE] text-black font-black border border-black shadow-[1px_1px_0px_#000]"
                : "text-gray-600 hover:text-black font-semibold"
            }`}
          >
            <HeartHandshake className="w-4 h-4 stroke-[2.2]" />
            <span>Matches</span>
          </Link>

          {/* Marketing Links (Desktop) */}
          <a
            href="/#how-it-works"
            className="hidden lg:inline-block text-gray-600 hover:text-black transition-colors font-semibold"
          >
            How it works
          </a>
          <a
            href="/#privacy"
            className="hidden lg:inline-block text-gray-600 hover:text-black transition-colors font-semibold"
          >
            Privacy
          </a>
          <a
            href="/#pricing"
            className="hidden lg:inline-block text-gray-600 hover:text-black transition-colors font-semibold"
          >
            Pricing
          </a>
          <a
            href="/#questions"
            className="hidden lg:inline-block text-gray-600 hover:text-black transition-colors font-semibold"
          >
            Questions
          </a>
        </nav>

        {/* Right CTA Button from Screenshot 1 */}
        <Link
          href="/discover"
          className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-[#FF3864] hover:bg-[#E62854] text-black font-extrabold text-xs sm:text-sm border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex-shrink-0"
        >
          Add your crushes
        </Link>
      </div>
    </header>
  );
}
