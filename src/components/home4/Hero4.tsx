"use client";

import Image from "next/image";
import { Sparkles, Check, Star } from "lucide-react";
import SimpleQuoteForm from "@/components/common/SimpleQuoteForm";

export default function Hero4() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-white text-slate-900 overflow-hidden">
      {/* Decorative sapphire glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Sparkling Clean Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Deep Cleaning, Carpet Care & Turnover Specialists</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-[1.08]">
              The Diamond Standard in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Deep Clean Living.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              From intensive baseboard-to-ceiling deep cleans and high-pressure steam carpet restoration
              to white-glove move-in and property turnovers. Flawless sparkle guaranteed.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-y border-slate-200/80 py-4">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-blue-600 block">
                  85-Pt
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Deep Clean Checklist
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-sky-600 block">
                  2-4 Hr
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Rapid Carpet Dry
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block">
                  100%
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Deposit Return Pass
                </span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">
                5.0 Star Rating Across 1,800+ Deep Cleans
              </span>
            </div>
          </div>

          {/* Right Column: Clean Simple Quote Form with Sapphire Theme */}
          <div className="lg:col-span-6" id="quote">
            <SimpleQuoteForm
              theme="sapphire"
              title="Get an Instant Deep Clean Quote"
              subtitle="Specialized care for apartments, homes, and commercial units."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
