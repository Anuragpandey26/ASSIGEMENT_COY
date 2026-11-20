"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, HeartHandshake } from "lucide-react";

export function AppNavigation() {
  const pathname = usePathname();

  // Do not render floating bottom nav on the public landing page
  if (pathname === "/") {
    return null;
  }

  const isHome = pathname === "/";
  const isDiscover = pathname === "/discover";
  const isMatches = pathname === "/matches";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-black"
      aria-label="App Navigation"
    >
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-4">
        {/* Home */}
        <Link
          href="/"
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full transition-all ${
            isHome
              ? "bg-[#E2D9FC] text-black font-extrabold border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
              : "text-gray-500 hover:text-black font-bold text-xs"
          }`}
          aria-label="Home page"
        >
          <Home className="w-4 h-4 stroke-[2.2]" />
          <span className="text-xs">Home</span>
        </Link>

        {/* Discover */}
        <Link
          href="/discover"
          className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full transition-all ${
            isDiscover
              ? "bg-[#FF3864] text-black font-extrabold border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
              : "text-gray-500 hover:text-black font-bold text-xs"
          }`}
          aria-label="Discover profiles"
        >
          <Compass className="w-4 h-4 stroke-[2.5]" />
          <span className="text-xs">Discover</span>
        </Link>

        {/* Matches */}
        <Link
          href="/matches"
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full transition-all ${
            isMatches
              ? "bg-[#D2F6DE] text-black font-extrabold border-2 border-black shadow-[1.5px_1.5px_0px_#000]"
              : "text-gray-500 hover:text-black font-bold text-xs"
          }`}
          aria-label="View mutual matches"
        >
          <HeartHandshake className="w-4 h-4 stroke-[2.2]" />
          <span className="text-xs">Matches</span>
        </Link>
      </div>
    </nav>
  );
}
