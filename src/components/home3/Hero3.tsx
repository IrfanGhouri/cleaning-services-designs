"use client";

import Image from "next/image";
import { Heart, Star, Check } from "lucide-react";
import SimpleQuoteForm from "@/components/common/SimpleQuoteForm";

export default function Hero3() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbece7] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3ECE2] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Warm Emotional Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbece7] text-[#c25e3e] text-xs font-semibold tracking-wide border border-[#f6d7cd]">
              <Heart className="w-3.5 h-3.5 fill-[#c25e3e]" />
              <span>Dedicated Family Home & Maid Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2C221E] leading-[1.12]">
              Come Home to Pure Calm.{" "}
              <span className="block font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#c25e3e] font-normal mt-1">
                every single visit.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Thoughtful home cleaning crafted for busy families, pet lovers, and peaceful living.
              We assign the same trusted, vetted cleaner to your home on every scheduled clean.
            </p>

            {/* Warm trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Same Dedicated Cleaner Every Visit",
                "100% Non-Toxic & Pet-Safe Botanicals",
                "No Lock-In Contracts • Cancel Anytime",
                "100% Happiness Re-Clean Pledge",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#fbece7] text-[#c25e3e] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Parent & Family Testimonial Snip */}
            <div className="pt-4 flex items-center gap-4 border-t border-stone-200">
              <div className="flex -space-x-2">
                <div className="relative w-10 h-10 rounded-full border-2 border-[#FAF7F2] overflow-hidden shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Happy Family"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-[#FAF7F2] overflow-hidden shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Dog Owner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-[#2C221E] ml-1">4.98 / 5.0</span>
                </div>
                <p className="text-xs text-stone-500 font-cursive text-base">
                  &ldquo;They treat our home and dog with genuine care.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Quote Form with Terracotta Theme */}
          <div className="lg:col-span-6" id="book">
            <SimpleQuoteForm
              theme="terracotta"
              title="Schedule Your Family Home Clean"
              subtitle="Quick quote with your preferred dates and home details."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
