"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ExpandableBentoGridProps {
  items: ServiceItem[];
  theme?: "emerald" | "blue" | "amber" | "cyan";
  tagline?: string;
}

export default function ExpandableBentoGrid({
  items,
  theme = "emerald",
  tagline = "Interactive Service Explorer",
}: ExpandableBentoGridProps) {
  // First item active by default
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const themeConfig = {
    emerald: {
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      accent: "text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-500 text-white",
      borderActive: "border-emerald-500/60 shadow-emerald-500/10",
      highlightBullet: "text-emerald-400",
    },
    blue: {
      badge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      accent: "text-blue-400",
      button: "bg-blue-600 hover:bg-blue-500 text-white",
      borderActive: "border-blue-500/60 shadow-blue-500/10",
      highlightBullet: "text-blue-400",
    },
    amber: {
      badge: "bg-amber-500/20 text-amber-200 border-amber-400/30",
      accent: "text-amber-300",
      button: "bg-[#c25e3e] hover:bg-[#b05132] text-white",
      borderActive: "border-amber-500/60 shadow-amber-500/10",
      highlightBullet: "text-amber-300",
    },
    cyan: {
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
      accent: "text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold",
      borderActive: "border-cyan-400/60 shadow-cyan-400/20",
      highlightBullet: "text-cyan-400",
    },
  };

  const currentTheme = themeConfig[theme];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className={`w-4 h-4 ${currentTheme.accent}`} />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {tagline} • Hover or tap to expand
        </span>
      </div>

      {/* Bento Container */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 min-h-[480px] md:h-[500px]">
        {items.map((service, index) => {
          const isExpanded = hoveredIndex === index;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${
                isExpanded
                  ? `flex-[2.8] md:flex-[3] shadow-2xl ${currentTheme.borderActive}`
                  : "flex-1 border-white/10 hover:border-white/20 bg-slate-900"
              }`}
            >
              {/* Background Image with adaptive dark gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition-transform duration-700 ease-out ${
                    isExpanded ? "scale-105 filter brightness-75" : "filter brightness-50 scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isExpanded
                      ? "from-slate-950 via-slate-950/70 to-slate-950/30"
                      : "from-slate-950/90 via-slate-950/60 to-slate-950/40"
                  } transition-opacity duration-300`}
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-5 sm:p-7 h-full flex flex-col justify-between text-white">
                {/* Header info */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${currentTheme.badge}`}
                  >
                    {service.shortTag}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 transition-transform duration-300 ${
                      isExpanded ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-3 mt-6 sm:mt-0">
                  <h4
                    className={`font-bold transition-all duration-300 ${
                      isExpanded
                        ? "text-2xl sm:text-3xl text-white"
                        : "text-lg sm:text-xl text-slate-200 line-clamp-2 md:whitespace-nowrap"
                    }`}
                  >
                    {service.name}
                  </h4>

                  {/* Expanded Content with details and bullet points */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded
                        ? "max-h-96 opacity-100 space-y-3"
                        : "max-h-0 md:max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Check className={`w-3.5 h-3.5 shrink-0 ${currentTheme.highlightBullet}`} />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          Starting at
                        </span>
                        <span className="text-lg font-bold text-white">
                          {service.priceStarting}
                        </span>
                      </div>

                      <a
                        href="#quote"
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 ${currentTheme.button}`}
                      >
                        <span>Schedule Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
