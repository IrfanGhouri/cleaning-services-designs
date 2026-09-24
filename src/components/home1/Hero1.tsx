"use client";

import Image from "next/image";
import { Sparkles, Check, Star } from "lucide-react";
import SimpleQuoteForm from "@/components/common/SimpleQuoteForm";

export default function Hero1() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-screen-2xl h-96 bg-emerald-200/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Value propositions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Plant-Based & Non-Toxic Cleaning</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              A Fresh, Spotless Clean For Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Home & Office.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Professional residential, carpet, and workspace cleaning with 100% plant-derived products.
              Safe for children, pets, and your team.
            </p>

            {/* Concise Trust Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Non-Toxic Formulations",
                "Vetted & Bonded Cleaners",
                "24-Hour Re-Clean Guarantee",
                "Same-Day Booking Available",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200">
              <div className="flex -space-x-2">
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 ml-1">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500">Over 3,200 spotless cleans completed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered Quote Form */}
          <div className="lg:col-span-6" id="quote">
            <SimpleQuoteForm
              theme="emerald"
              title="Schedule Your Clean"
              subtitle="Get an instant estimate with zero obligation."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
