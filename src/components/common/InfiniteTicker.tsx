"use client";

import React from "react";

interface InfiniteTickerProps {
  items: Array<{
    text: string;
    icon?: string;
    badge?: string;
  }>;
  variant?: "light" | "dark" | "sage" | "amber" | "cyan";
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}

export default function InfiniteTicker({
  items,
  variant = "light",
  speed = "normal",
  reverse = false,
}: InfiniteTickerProps) {
  const variantStyles = {
    light: "bg-slate-100 text-slate-800 border-y border-slate-200",
    dark: "bg-slate-950 text-white border-y border-slate-800",
    sage: "bg-emerald-950 text-emerald-100 border-y border-emerald-800/40",
    amber: "bg-stone-900 text-amber-100 border-y border-amber-900/40",
    cyan: "bg-slate-900 text-cyan-200 border-y border-cyan-800/50",
  };

  const speedDurations = {
    slow: "110s",
    normal: "80s",
    fast: "55s",
  };

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden py-4 select-none relative z-20 ${variantStyles[variant]}`}
    >
      <div
        style={{ animationDuration: speedDurations[speed] }}
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex items-center gap-8`}
      >
        {repeated.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shrink-0 px-4 group cursor-default"
          >
            {item.badge && (
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                {item.badge}
              </span>
            )}
            <span className="text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap">
              {item.text}
            </span>
            <span className="text-xs opacity-40 ml-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
