"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Check, ArrowRight, Sparkles, Clock, DollarSign } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function ServiceShowcase4() {
  const crystalServices = [
    ALL_SERVICES[4], // Detailed deep cleaning
    ALL_SERVICES[0], // Carpet cleaning
    ALL_SERVICES[6], // Multi-family unit turnover
    ALL_SERVICES[5], // Disinfection services
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 5500;
    const step = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += step;
      const pct = Math.min((elapsed / interval) * 100, 100);
      setProgress(pct);

      if (elapsed >= interval) {
        clearInterval(timer);
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % crystalServices.length);
      }
    }, step);

    return () => clearInterval(timer);
  }, [activeIndex, crystalServices.length]);

  const active = crystalServices[activeIndex];

  return (
    <section id="services" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Intensive Care Suites
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900">
            Deep Clean & Turnover Solutions
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          When everyday surface dusting isn&apos;t enough, our intensive deep reset restores sparkling purity to every room.
        </p>
      </div>

      {/* Top Segmented Card Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {crystalServices.map((service, idx) => {
          const isSelected = idx === activeIndex;

          return (
            <button
              key={service.id}
              onClick={() => {
                setActiveIndex(idx);
                setProgress(0);
              }}
              className={`p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/25 scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300/40">
                  <div
                    className="h-full bg-white transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    isSelected ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  {service.shortTag}
                </span>
                <span className="text-xs font-bold">{service.priceStarting}</span>
              </div>
              <p className="text-sm sm:text-base font-bold truncate">{service.name}</p>
            </button>
          );
        })}
      </div>

      {/* Lower Showcase Display Panel */}
      <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual */}
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src={active.image}
              alt={active.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold">
              Turnaround: {active.turnaroundTime}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 inline-block">
              {active.shortTag}
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
              {active.name}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {active.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              {active.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Price Estimate
                </span>
                <span className="text-2xl font-black text-blue-600">
                  {active.priceStarting}
                </span>
              </div>

              <a
                href="#quote"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
