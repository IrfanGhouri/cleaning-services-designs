"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle } from "lucide-react";

export interface CarouselReviewItem {
  id: string;
  author: string;
  role: string;
  companyOrLocation: string;
  rating: number;
  serviceUsed: string;
  quote: string;
  verified: boolean;
  avatar: string;
}

interface InteractiveCarouselProps {
  items: CarouselReviewItem[];
  theme?: "emerald" | "blue" | "amber" | "cyan";
  title?: string;
  subtitle?: string;
}

export default function InteractiveCarousel({
  items,
  theme = "emerald",
  title = "What Our Clients Say",
  subtitle = "Real feedback from homeowners, property managers, and facility directors.",
}: InteractiveCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const active = items[currentIndex];

  const themeConfig = {
    emerald: {
      star: "text-amber-400 fill-amber-400",
      quoteIcon: "text-emerald-500/20",
      btn: "bg-emerald-600 hover:bg-emerald-500 text-white",
      dotActive: "bg-emerald-600 w-8",
      dotInactive: "bg-slate-300 hover:bg-slate-400",
      card: "bg-white border-emerald-100 shadow-xl text-slate-900",
      title: "text-slate-900",
      subtitle: "text-slate-600",
      quote: "text-slate-800",
      author: "text-slate-900",
      meta: "text-slate-500",
      arrowBorder: "border-slate-200 text-slate-700 hover:bg-slate-100",
      badge: "bg-emerald-50 text-emerald-800 border border-emerald-200",
      divider: "border-slate-100",
    },
    blue: {
      star: "text-amber-400 fill-amber-400",
      quoteIcon: "text-blue-500/20",
      btn: "bg-blue-600 hover:bg-blue-500 text-white",
      dotActive: "bg-blue-600 w-8",
      dotInactive: "bg-slate-300 hover:bg-slate-400",
      card: "bg-white border-blue-100 shadow-xl text-slate-900",
      title: "text-slate-900",
      subtitle: "text-slate-600",
      quote: "text-slate-800",
      author: "text-slate-900",
      meta: "text-slate-500",
      arrowBorder: "border-slate-200 text-slate-700 hover:bg-slate-100",
      badge: "bg-blue-50 text-blue-800 border border-blue-200",
      divider: "border-slate-100",
    },
    amber: {
      star: "text-amber-500 fill-amber-500",
      quoteIcon: "text-[#c25e3e]/15",
      btn: "bg-[#c25e3e] hover:bg-[#a94f33] text-white",
      dotActive: "bg-[#c25e3e] w-8",
      dotInactive: "bg-stone-300 hover:bg-stone-400",
      card: "bg-white border-stone-200 shadow-xl text-[#2C221E]",
      title: "text-[#2C221E]",
      subtitle: "text-stone-600",
      quote: "text-[#2C221E]",
      author: "text-[#2C221E]",
      meta: "text-stone-500",
      arrowBorder: "border-stone-300 text-[#2C221E] hover:bg-[#fbece7]",
      badge: "bg-[#fbece7] text-[#c25e3e] border border-[#f6d7cd]",
      divider: "border-stone-100",
    },
    cyan: {
      star: "text-cyan-400 fill-cyan-400",
      quoteIcon: "text-cyan-500/20",
      btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
      dotActive: "bg-cyan-400 w-8",
      dotInactive: "bg-slate-700 hover:bg-slate-600",
      card: "bg-slate-900 border-slate-800 text-white shadow-2xl",
      title: "text-white",
      subtitle: "text-slate-400",
      quote: "text-slate-100",
      author: "text-white",
      meta: "text-slate-400",
      arrowBorder: "border-slate-700 text-slate-200 hover:bg-slate-800",
      badge: "bg-slate-800 text-cyan-300 border border-slate-700",
      divider: "border-slate-800",
    },
  };

  const currentTheme = themeConfig[theme];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
            Client Experiences
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold ${currentTheme.title}`}>
            {title}
          </h3>
          <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitle}`}>
            {subtitle}
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${currentTheme.arrowBorder}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${currentTheme.arrowBorder}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div
        className={`relative rounded-3xl p-6 sm:p-10 border shadow-xl transition-all duration-500 overflow-hidden ${currentTheme.card}`}
      >
        <Quote className={`absolute right-6 top-6 w-24 h-24 sm:w-32 sm:h-32 -z-0 pointer-events-none ${currentTheme.quoteIcon}`} />

        <div className="relative z-10 space-y-6">
          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${currentTheme.star}`} />
            ))}
            <span className={`text-xs font-bold ml-2 ${currentTheme.meta}`}>
              5.0 Verified Clean
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className={`text-base sm:text-xl lg:text-2xl font-medium leading-relaxed italic ${currentTheme.quote}`}>
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Client Author Info */}
          <div className={`flex items-center justify-between pt-4 border-t ${currentTheme.divider} flex-wrap gap-4`}>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={active.avatar}
                  alt={active.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-sm font-bold ${currentTheme.author}`}>
                    {active.author}
                  </span>
                  {active.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  )}
                </div>
                <p className={`text-xs ${currentTheme.meta}`}>
                  {active.role} • {active.companyOrLocation}
                </p>
              </div>
            </div>

            <div className={`text-xs font-semibold px-3 py-1.5 rounded-full ${currentTheme.badge}`}>
              Service: <span className="font-bold">{active.serviceUsed}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === i
                ? currentTheme.dotActive
                : `w-2 ${currentTheme.dotInactive}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
