"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Clock, DollarSign, Pause, Play } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface AutoSwitchTabsProps {
  services: ServiceItem[];
  themeColor?: "emerald" | "blue" | "amber" | "cyan";
  intervalSeconds?: number;
}

export default function AutoSwitchTabs({
  services,
  themeColor = "emerald",
  intervalSeconds = 6,
}: AutoSwitchTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const themeClasses = {
    emerald: {
      activeTab: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30",
      inactiveTab: "bg-white text-slate-700 hover:bg-emerald-50/60 border border-slate-200/80",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      progressBar: "bg-emerald-500",
      accentText: "text-emerald-600",
      ctaBtn: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/30",
      cardBorder: "border-emerald-100",
    },
    blue: {
      activeTab: "bg-blue-600 text-white shadow-lg shadow-blue-600/30",
      inactiveTab: "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700/60",
      badge: "bg-blue-900/60 text-blue-300 border-blue-700/50",
      progressBar: "bg-blue-400",
      accentText: "text-blue-400",
      ctaBtn: "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30",
      cardBorder: "border-slate-800",
    },
    amber: {
      activeTab: "bg-[#c25e3e] text-white shadow-lg shadow-[#c25e3e]/30",
      inactiveTab: "bg-[#FAF7F2] text-stone-700 hover:bg-[#F3ECE2] border border-stone-200",
      badge: "bg-[#fbece7] text-[#c25e3e] border-[#f6d7cd]",
      progressBar: "bg-[#c25e3e]",
      accentText: "text-[#c25e3e]",
      ctaBtn: "bg-[#c25e3e] hover:bg-[#a94f33] text-white shadow-md shadow-[#c25e3e]/30",
      cardBorder: "border-stone-200",
    },
    cyan: {
      activeTab: "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30",
      inactiveTab: "bg-slate-900/80 text-cyan-200 hover:bg-slate-800/80 border border-cyan-900/40",
      badge: "bg-cyan-950 text-cyan-300 border-cyan-800",
      progressBar: "bg-cyan-400",
      accentText: "text-cyan-400",
      ctaBtn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/30",
      cardBorder: "border-cyan-900/30",
    },
  };

  const currentTheme = themeClasses[themeColor];
  const activeService = services[activeIndex];

  // Auto-switching timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const totalSteps = (intervalSeconds * 1000) / stepMs;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % services.length);
          return 0;
        }
        return prev + 100 / totalSteps;
      });
    }, stepMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, intervalSeconds, services.length]);

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="w-full">
      {/* Mobile-first Tabs Navigation (horizontal scroll on mobile, flex-wrap on desktop) */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full sm:w-auto">
          {services.map((service, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={service.id}
                onClick={() => handleSelectTab(idx)}
                className={`relative px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected ? currentTheme.activeTab : currentTheme.inactiveTab
                }`}
              >
                <span>{service.name}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Pause/Play toggle indicator */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all text-xs"
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Synchronized Content Card with Progress Bar */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all"
      >
        {/* Animated Progress Line on top */}
        <div className="w-full bg-slate-200/40 dark:bg-slate-800 h-1">
          <div
            className={`h-full transition-all duration-75 ${currentTheme.progressBar}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${currentTheme.badge}`}
              >
                {activeService.shortTag}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                Est. {activeService.turnaroundTime}
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <DollarSign className="w-3.5 h-3.5" />
                From {activeService.priceStarting}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {activeService.name}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeService.description}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 pl-3 border-slate-300 dark:border-slate-700">
              {activeService.details}
            </p>

            {/* Highlights List */}
            <div className="space-y-2.5 pt-2">
              {activeService.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${currentTheme.accentText}`} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${currentTheme.ctaBtn}`}
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400">
                Tab {activeIndex + 1} of {services.length} • Auto-advancing
              </span>
            </div>
          </div>

          {/* Right Column: Imagery with overlay badge */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={activeService.image}
                alt={activeService.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm backdrop-blur-md bg-black/40 p-3 rounded-xl border border-white/20">
                <span className="font-medium">100% Certified Field Team</span>
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  Guaranteed Clean
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
