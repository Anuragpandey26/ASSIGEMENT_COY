"use client";

import React, { useState, useEffect, useCallback } from "react";
import { MatchesResponse } from "../../types";
import { api } from "../../services/api";
import { MatchesList } from "../../components/MatchesList";
import { ArrowLeft, RotateCcw, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function MatchesPage() {
  const [matches, setMatches] = useState<MatchesResponse["matches"]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.getMatches();
      setMatches(data.matches || []);
    } catch (err: any) {
      setError(err.message || "Failed to load matches.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMatches();
  }, [loadMatches]);

  return (
    <div className="max-w-sm mx-auto px-4 pt-4 pb-12 space-y-4">
      {/* Top action bar */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <Link
          href="/discover"
          className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-black text-xs font-bold border border-black shadow-[1px_1px_0px_#000]"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Discover</span>
        </Link>

        <button
          type="button"
          onClick={loadMatches}
          disabled={isLoading}
          className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#FFF066] hover:bg-[#FED7AA] text-black text-xs font-bold border border-black shadow-[1px_1px_0px_#000]"
          aria-label="Refresh matches"
        >
          <RotateCcw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Header title */}
      <div>
        <h1 className="text-2xl font-black text-black tracking-tight">
          Your matches
        </h1>
        <p className="text-xs font-medium text-gray-600 mt-0.5">
          People you and they have mutually liked.
        </p>
      </div>

      {/* Error state */}
      {error ? (
        <div className="p-5 bg-red-50 rounded-2xl border border-black text-center space-y-3 my-4">
          <AlertCircle className="w-7 h-7 text-red-500 mx-auto" />
          <p className="text-xs font-bold text-red-800">{error}</p>
          <button
            type="button"
            onClick={loadMatches}
            className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold border border-black"
          >
            Retry
          </button>
        </div>
      ) : (
        <MatchesList matches={matches} isLoading={isLoading} onRefresh={loadMatches} />
      )}
    </div>
  );
}
