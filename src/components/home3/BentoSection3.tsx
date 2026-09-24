import Image from "next/image";
import { ArrowUpRight, Check, Heart, Sparkles } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function BentoSection3() {
  const homeClean = ALL_SERVICES[2];
  const carpetClean = ALL_SERVICES[0];
  const deepClean = ALL_SERVICES[4];
  const moveTurnover = ALL_SERVICES[6];

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-[#2C221E] text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d97742] block mb-2">
              Our Signature Specialties
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Boutique Cleaning Offerings
            </h2>
          </div>
          <p className="text-sm text-stone-300 max-w-md">
            From recurring family maid services to deep spring cleans and pet-safe carpet shampooing.
          </p>
        </div>

        {/* Masonry-Style Warm Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Recurring Home Cleaning (Featured) */}
          <div className="lg:col-span-2 bg-[#3a2e29] border border-stone-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#c25e3e] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#fbece7]/10 text-amber-200 border border-[#fbece7]/20">
                  Most Beloved
                </span>
                <span className="text-xs font-bold text-stone-300">
                  Starts at {homeClean.priceStarting}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {homeClean.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed mb-4">
                {homeClean.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {homeClean.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#d97742] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-stone-700">
              <Image
                src={homeClean.image}
                alt={homeClean.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-cursive text-xl text-amber-100">
                  Same dedicated cleaner every visit
                </span>
                <a
                  href="#book"
                  className="px-4 py-2 rounded-xl bg-[#c25e3e] hover:bg-[#a94f33] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Get Free Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Carpet & Rug Extraction */}
          <div className="bg-[#3a2e29] border border-stone-700/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c25e3e] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d97742]">
                  Pet & Allergy Safe
                </span>
                <span className="text-xs font-bold text-stone-300">
                  {carpetClean.priceStarting}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {carpetClean.name}
              </h4>
              <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                {carpetClean.description}
              </p>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-700">
              <Image
                src={carpetClean.image}
                alt={carpetClean.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 3: Detailed Deep Clean Reset */}
          <div className="bg-[#3a2e29] border border-stone-700/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c25e3e] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d97742]">
                  Top-to-Bottom Reset
                </span>
                <span className="text-xs font-bold text-stone-300">
                  {deepClean.priceStarting}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {deepClean.name}
              </h4>
              <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                {deepClean.description}
              </p>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-700">
              <Image
                src={deepClean.image}
                alt={deepClean.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 4: Move-In / Move-Out Turnover (2 Columns wide) */}
          <div className="lg:col-span-2 bg-[#3a2e29] border border-stone-700/80 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#c25e3e] transition-all duration-300">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d97742]">
                Smooth Relocations
              </span>
              <h3 className="text-2xl font-bold text-white">
                {moveTurnover.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md">
                {moveTurnover.description}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[10px] uppercase text-stone-400 block font-bold">
                  Unit Pricing
                </span>
                <span className="text-xl font-bold text-white">
                  {moveTurnover.priceStarting}
                </span>
              </div>
              <a
                href="#book"
                className="px-5 py-3 rounded-xl bg-[#c25e3e] hover:bg-[#a94f33] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#c25e3e]/30 transition-all flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
