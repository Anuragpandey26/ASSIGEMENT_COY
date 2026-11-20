"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Apple,
  Play,
  Pencil,
  Mail,
  Heart,
  Check,
  Gift,
  Plus,
  Minus,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* ========================================================= */}
      {/* HERO SECTION (Screenshot 1) */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-10 sm:pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* 100% Anonymous Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF066] border border-black shadow-[1.5px_1.5px_0px_#000] text-xs font-bold text-black">
              <span className="text-xs">🔒</span>
              <span>100% anonymous</span>
            </div>

            {/* Giant Headline */}
            <h1 className="text-5xl sm:text-7xl font-black text-black tracking-[-0.04em] leading-[0.98]">
              Find out if<br />
              your crush<br />
              likes you back.
            </h1>

            {/* Subcopy */}
            <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-lg">
              Add them secretly by phone number or email. If they add you too,
              it&apos;s a match. If not, nobody ever knows.
            </p>

            {/* Button + pricing note */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/discover"
                className="px-6 py-3.5 rounded-full bg-[#FF3864] hover:bg-[#E62854] text-black font-extrabold text-base border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                Add your crushes
              </Link>
              <span className="text-sm font-medium text-gray-500">
                Free for your first 3 crushes. 18+ only.
              </span>
            </div>

            {/* App download section */}
            <div className="pt-6 space-y-3">
              <p className="text-xs font-bold text-black">
                Rather use the app? It works the same way.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* App Store button */}
                <div className="flex items-center justify-between w-48 px-3.5 py-2.5 bg-black text-white rounded-xl border border-black shadow-[1.5px_1.5px_0px_#000] cursor-pointer hover:bg-neutral-900 transition-colors">
                  <div className="flex items-center space-x-2.5">
                    <Apple className="w-5 h-5 fill-current" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-gray-400">
                        Download on the
                      </div>
                      <div className="text-xs font-bold">App Store</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>

                {/* Google Play button */}
                <div className="flex items-center justify-between w-48 px-3.5 py-2.5 bg-white text-black rounded-xl border border-black shadow-[1.5px_1.5px_0px_#000] cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-2.5">
                    <Play className="w-5 h-5 fill-current" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-gray-500">
                        Get it on
                      </div>
                      <div className="text-xs font-bold">Google Play</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Cards (Screenshot 1) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px]">
            {/* White Notification Card (tilted behind) */}
            <div className="w-[310px] sm:w-[330px] bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] p-5 -rotate-2 -translate-y-4">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-bold text-black">A message from Coy</span>
                </div>
                <span className="text-[11px] text-gray-400 font-medium">now</span>
              </div>
              <p className="text-xs font-medium text-black leading-relaxed">
                Heads up: Someone who has your number added you as their crush on
                Coy. They won&apos;t know you saw this unless you add them too.
              </p>
              <div className="mt-3 text-xs font-bold text-black underline underline-offset-2">
                getcoy.com/n
              </div>
            </div>

            {/* Pink "It's a match!" Card (overlapping in front) */}
            <div className="w-[320px] sm:w-[340px] bg-[#FF3864] rounded-3xl border-2 border-black shadow-[4px_4px_0px_#000] p-6 text-center space-y-4 rotate-2 -mt-16 z-10">
              {/* Overlapping Circles: You + Heart + Partner */}
              <div className="flex items-center justify-center -space-x-3 pt-1">
                <div className="w-14 h-14 rounded-full bg-[#FFE2D1] border-2 border-black flex items-center justify-center font-black text-sm text-black">
                  You
                </div>
                <div className="z-10 w-7 h-7 rounded-full bg-white border-2 border-black flex items-center justify-center text-[#FF3864]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="w-14 h-14 rounded-full bg-[#CBE9FE] border-2 border-black flex items-center justify-center font-black text-base text-black">
                  R
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black tracking-tight">
                  It&apos;s a match!
                </h3>
                <p className="text-xs font-bold text-black mt-1">
                  You and Riya, 3rd floor added each other.
                </p>
              </div>

              <Link
                href="/discover"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5C] text-black font-extrabold text-sm border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                Say hi on WhatsApp
              </Link>
            </div>

            {/* Caption below cards */}
            <p className="text-xs font-medium text-gray-500 pt-5 text-center">
              The heads-up they get, and the moment it&apos;s mutual.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DARK BANNER (Screenshot 2) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#110F17] py-10 px-6 sm:px-10 my-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white text-center md:text-left">
            No profiles. No photos. No chat.
          </h2>
          <p className="text-sm sm:text-base font-medium text-purple-200 text-center md:text-right">
            Just one question: do they like you back?
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS (Screenshot 3) */}
      {/* ========================================================= */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 space-y-8">
        <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lavender */}
          <div className="p-7 rounded-2xl bg-[#E2D9FC] border-2 border-black shadow-[2px_2px_0px_#000] space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                1
              </div>
              <Pencil className="w-5 h-5 text-black stroke-[2.2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-black">
                Add your crushes
              </h3>
              <p className="text-sm font-medium text-black/80 leading-relaxed">
                Up to 3 people you know, by phone number, email or both. Only you
                can see your list.
              </p>
            </div>
          </div>

          {/* Card 2: Warm Peach */}
          <div className="p-7 rounded-2xl bg-[#FFDECE] border-2 border-black shadow-[2px_2px_0px_#000] space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                2
              </div>
              <Mail className="w-5 h-5 text-black stroke-[2.2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-black">
                They get an anonymous heads-up
              </h3>
              <p className="text-sm font-medium text-black/80 leading-relaxed">
                One message on WhatsApp, SMS or email: someone has a crush on
                them. Never who.
              </p>
            </div>
          </div>

          {/* Card 3: Soft Pink */}
          <div className="p-7 rounded-2xl bg-[#FFDCE5] border-2 border-black shadow-[2px_2px_0px_#000] space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                3
              </div>
              <Heart className="w-5 h-5 text-black stroke-[2.2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-black">
                Add each other and it&apos;s a match
              </h3>
              <p className="text-sm font-medium text-black/80 leading-relaxed">
                You both see the match and how to reach each other. If they
                don&apos;t add you, nobody ever finds out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT IF THEY DON'T ADD YOU BACK? (Screenshot 4) */}
      {/* ========================================================= */}
      <section id="privacy" className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              What if they don&apos;t add you back?
            </h2>
            <h3 className="text-3xl font-black text-[#FF3864]">
              Nothing happens.
            </h3>
            <p className="text-base font-medium text-gray-700 leading-relaxed pt-2 max-w-md">
              They only learn that someone has a crush on them. Your name stays
              hidden unless they add you too.
            </p>
          </div>

          {/* Right Card with Guarantees */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] p-6 sm:p-8 divide-y divide-gray-100">
            <div className="flex items-start space-x-3.5 pb-4">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-normal text-black leading-relaxed">
                <strong className="font-extrabold">We never say who.</strong> Not directly, and not through counts that would let someone work it out.
              </p>
            </div>

            <div className="flex items-start space-x-3.5 py-4">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-normal text-black leading-relaxed">
                <strong className="font-extrabold">Adding is final.</strong> Nobody can add and remove names to test who likes them.
              </p>
            </div>

            <div className="flex items-start space-x-3.5 py-4">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-normal text-black leading-relaxed">
                <strong className="font-extrabold">Few messages, never at night.</strong> At most one a week and 3 in total, each with a link to stop them for good.
              </p>
            </div>

            <div className="flex items-start space-x-3.5 pt-4">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-normal text-black leading-relaxed">
                <strong className="font-extrabold">Your list is locked away.</strong> Numbers and emails are matched as keyed hashes and stored encrypted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PRICING & SLOTS (Screenshot 5) */}
      {/* ========================================================= */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-18 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight">
            Your first 3 crushes are free.
          </h2>
          <span className="px-3.5 py-1 rounded-full bg-[#FF3864] text-white font-extrabold text-xs border border-black uppercase tracking-wider">
            LAUNCH OFFER
          </span>
        </div>
        <p className="text-base font-medium text-gray-700">
          Need more room? Buy slots once and keep them.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-3">
          {/* Card 1: +1 crush */}
          <div className="p-6 rounded-2xl bg-white border border-gray-300 flex flex-col justify-between space-y-6">
            <span className="text-sm font-extrabold text-black">+1 crush</span>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-base line-through text-gray-400 font-bold">₹199</span>
                <span className="text-4xl font-black text-black">₹49</span>
              </div>
              <span className="text-xs font-semibold text-gray-500">₹49 each</span>
            </div>
          </div>

          {/* Card 2: +3 crushes (Soft Pink highlight) */}
          <div className="p-6 rounded-2xl bg-[#FFDCE5] border-2 border-black shadow-[3px_3px_0px_#000] flex flex-col justify-between space-y-6">
            <span className="text-sm font-extrabold text-black">+3 crushes</span>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-base line-through text-gray-400 font-bold">₹499</span>
                <span className="text-4xl font-black text-black">₹129</span>
              </div>
              <span className="text-xs font-semibold text-gray-700">₹43 each</span>
            </div>
          </div>

          {/* Card 3: +5 crushes (Best Value badge) */}
          <div className="p-6 rounded-2xl bg-white border border-gray-300 flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3 right-4">
              <span className="px-3 py-0.5 rounded-full bg-[#FFF066] text-black font-extrabold text-[11px] border border-black shadow-[1px_1px_0px_#000]">
                Best value
              </span>
            </div>
            <span className="text-sm font-extrabold text-black">+5 crushes</span>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-base line-through text-gray-400 font-bold">₹799</span>
                <span className="text-4xl font-black text-black">₹199</span>
              </div>
              <span className="text-xs font-semibold text-gray-500">₹40 each</span>
            </div>
          </div>

          {/* Card 4: Gift invite */}
          <div className="p-6 rounded-2xl bg-[#D2F6DE] border-2 border-black flex flex-col justify-between space-y-4">
            <div className="w-9 h-9 rounded-xl bg-white border border-black flex items-center justify-center text-black">
              <Gift className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base font-black text-black">Or get one free</h4>
              <p className="text-xs font-medium text-black/80 mt-1.5 leading-relaxed">
                Invite 3 friends. When 3 join and add a crush, you get a slot.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs font-medium text-gray-500 pt-2">
          UPI, cards and wallets via Cashfree. Prices include GST.
        </p>
      </section>

      {/* ========================================================= */}
      {/* QUESTIONS FAQ (Screenshot 5) */}
      {/* ========================================================= */}
      <section id="questions" className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight">
              Questions
            </h2>
          </div>

          <div className="md:col-span-8 divide-y-2 divide-black border-y-2 border-black">
            {/* FAQ 1 */}
            <div className="py-5">
              <button
                type="button"
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between text-left font-extrabold text-lg text-black focus:outline-none"
              >
                <span>What is Coy?</span>
                <span className="text-xl font-bold ml-4">
                  {openFaq === 0 ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              {openFaq === 0 && (
                <p className="pt-3 text-sm font-medium text-gray-600 leading-relaxed">
                  Coy is a discreet mutual matching app. You add the people you
                  have a crush on secretly. If they add you too, you match. If
                  not, nobody ever finds out.
                </p>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="py-5">
              <button
                type="button"
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between text-left font-extrabold text-lg text-black focus:outline-none"
              >
                <span>Can they work out it was me?</span>
                <span className="text-xl font-bold ml-4">
                  {openFaq === 1 ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              {openFaq === 1 && (
                <p className="pt-3 text-sm font-medium text-gray-600 leading-relaxed">
                  No. We never show your name, hints, or counts. Your identity is
                  only revealed if they also independently add you.
                </p>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="py-5">
              <button
                type="button"
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between text-left font-extrabold text-lg text-black focus:outline-none"
              >
                <span>How do they find out?</span>
                <span className="text-xl font-bold ml-4">
                  {openFaq === 2 ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              {openFaq === 2 && (
                <p className="pt-3 text-sm font-medium text-gray-600 leading-relaxed">
                  They get a single message telling them someone added them as a
                  crush on Coy, with a link to add their own crushes. They never
                  learn who added them unless interest is mutual.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Clean minimal footer matching official Coy site */}
      <footer className="border-t border-gray-100 py-10 px-6 sm:px-10 text-center text-xs font-semibold text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Coy. All rights reserved. 18+ only.</span>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-black transition-colors">How it works</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
