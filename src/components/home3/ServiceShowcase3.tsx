"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Check, ArrowRight, Heart, Clock, Flower2 } from "lucide-react";

export default function ServiceShowcase3() {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const rooms = [
    {
      title: "Spotless Living & Family Rooms",
      tag: "Everyday Sanctuary",
      price: "From $119",
      scent: "Sweet Orange & Cedarwood",
      duration: "45-60 min focus",
      desc: "Dusting high and low, vacuuming rugs, wiping picture frames, fluffing cushions, and leaving floors barefoot-clean for the whole family.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      tasks: [
        "Upholstery and couch cushions vacuumed & fluffed",
        "Baseboards, blinds, and ceiling fans dusted",
        "Hardwood & tile washed with gentle botanical cleaner",
        "Under-couch dust bunny extraction",
      ],
    },
    {
      title: "Sparkling Kitchen Care",
      tag: "Heart of the Home",
      price: "From $139",
      scent: "Lemon Peel & Thyme",
      duration: "60-75 min focus",
      desc: "Sanitizing food-prep countertops, degreasing stovetops, wiping appliance exteriors, and polishing sinks until they gleam.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      tasks: [
        "Microwave interior steamed and wiped clean",
        "Range hood, stovetop & backsplash degreased",
        "Chrome faucets and stainless steel shined",
        "Trash & recycling bins emptied and sanitized",
      ],
    },
    {
      title: "Peaceful Bedroom Sanctuary",
      tag: "Restful Spaces",
      price: "From $99",
      scent: "French Lavender Mist",
      duration: "40-50 min focus",
      desc: "Fresh bed sheets tucked with precision, nightstands dusted, mirrors polished, and carpets thoroughly vacuumed for restful sleep.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tasks: [
        "Linens changed & hotel-style hospital corners made",
        "Under-bed dust extraction and floor vacuuming",
        "Mirrors and wardrobe glass polished streak-free",
        "Lampshades and trinket surfaces dusted gently",
      ],
    },
    {
      title: "Gleaming Bathrooms",
      tag: "Deep Sanitized",
      price: "From $129",
      scent: "Eucalyptus & Mint",
      duration: "55-70 min focus",
      desc: "Scrubbing tubs, showers, tile grout, and toilets with gentle botanical disinfectant and streak-free glass polish.",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
      tasks: [
        "Tile grout hand scrubbed with non-bleach botanical paste",
        "Shower glass doors descaled and shined streak-free",
        "Toilet bowl, base, and flush lever disinfected",
        "Vanity sink, countertop, and cabinet exterior wiped",
      ],
    },
  ];

  // Auto changing tabs with smooth progress bar (clean single-step progression)
  useEffect(() => {
    if (isPaused) return;

    const interval = 5000;
    const step = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += step;
      const pct = Math.min((elapsed / interval) * 100, 100);
      setProgress(pct);

      if (elapsed >= interval) {
        clearInterval(timer);
        setProgress(0);
        setSelectedRoom((prev) => (prev + 1) % rooms.length);
      }
    }, step);

    return () => clearInterval(timer);
  }, [selectedRoom, isPaused, rooms.length]);

  const current = rooms[selectedRoom];

  return (
    <section id="rituals" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c25e3e] block mb-2">
            Room-by-Room Care
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2C221E]">
            How We Care For Your Home
          </h2>
        </div>
        <p className="text-sm text-stone-600 max-w-md">
          Every corner of your sanctuary receives devoted, gentle attention using pet-friendly, non-toxic botanicals.
        </p>
      </div>

      {/* Split Interactive Room Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Room Selection Tabs with Sticky Positioning */}
        <div
          className="lg:col-span-5 space-y-3 lg:sticky lg:top-28 self-start z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {rooms.map((room, idx) => {
            const isSelected = selectedRoom === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedRoom(idx);
                  setProgress(0);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#c25e3e] text-white border-[#c25e3e] shadow-lg shadow-[#c25e3e]/20 scale-[1.01]"
                    : "bg-white text-[#2C221E] border-stone-200 hover:border-[#c25e3e]/40 shadow-sm"
                }`}
              >
                {/* Auto-progression indicator bar on active tab */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                    <div
                      className="h-full bg-white transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#fbece7] text-[#c25e3e]"
                      }`}
                    >
                      {room.tag}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isSelected ? "text-stone-200" : "text-stone-500"
                      }`}
                    >
                      {room.price}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">
                    {room.title}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ml-3 ${
                    isSelected
                      ? "bg-white text-[#c25e3e] rotate-90"
                      : "bg-stone-100 text-stone-400 group-hover:text-[#c25e3e] group-hover:bg-[#fbece7]"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Featured Room Ambient Display Panel */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10 space-y-6">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-stone-100">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#c25e3e] text-xs font-bold shadow-sm flex items-center gap-1.5">
              <Flower2 className="w-3.5 h-3.5" />
              <span>Scent: {current.scent}</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#2C221E]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{current.duration}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2C221E]">
                {current.title}
              </h3>
              <span className="text-lg font-extrabold text-[#c25e3e]">
                {current.price}
              </span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Detailed Checklist */}
          <div className="pt-4 border-t border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-3">
              Included In Every Visit
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.tasks.map((task, tIdx) => (
                <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                  <Check className="w-4 h-4 text-[#c25e3e] shrink-0 mt-0.5" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <Heart className="w-4 h-4 text-[#c25e3e]" />
              <span>100% Pet-Safe & Kid-Friendly</span>
            </div>

            <a
              href="#book"
              className="px-6 py-3 rounded-xl bg-[#c25e3e] hover:bg-[#a94f33] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md shadow-[#c25e3e]/20 hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
