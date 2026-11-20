import React from "react";

export function LoadingState() {
  return (
    <div className="w-full bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] overflow-hidden animate-pulse">
      {/* Photo skeleton */}
      <div className="w-full h-72 sm:h-80 bg-gray-200 border-b-2 border-black" />

      {/* Details skeleton */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="h-6 bg-gray-200 rounded-md w-1/2" />
        <div className="space-y-1.5">
          <div className="h-3.5 bg-gray-200 rounded w-full" />
          <div className="h-3.5 bg-gray-200 rounded w-4/5" />
        </div>
        <div className="flex gap-1.5 pt-1">
          <div className="h-5 bg-gray-200 rounded-full w-16" />
          <div className="h-5 bg-gray-200 rounded-full w-20" />
          <div className="h-5 bg-gray-200 rounded-full w-14" />
        </div>
      </div>
    </div>
  );
}
