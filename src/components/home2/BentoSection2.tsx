import Image from "next/image";
import { ArrowUpRight, Check, Building2, Shield, Sparkles, Layers } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function BentoSection2() {
  const officeService = ALL_SERVICES[1]; // Office
  const porterService = ALL_SERVICES[3]; // Day porter
  const carpetService = ALL_SERVICES[0]; // Carpet
  const multiFamilyService = ALL_SERVICES[6]; // Multi-family

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-900/80 border-y border-slate-800 w-full text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Facility Services Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Commercial Janitorial Grid
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Our multi-disciplinary teams cover corporate office complexes, residential towers, and multi-tenant campuses.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Featured Card (Left Column - 7 Columns) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
                  Featured Service
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Starts at {officeService.priceStarting}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {officeService.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                {officeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {officeService.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo preview container */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-6 border border-slate-800">
              <Image
                src={officeService.image}
                alt={officeService.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Turnkey Janitorial
                </span>
                <a
                  href="#rfp"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Get Free Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Stack (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right Card: Day Porter */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  On-Site Staffing
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {porterService.priceStarting}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {porterService.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {porterService.description}
              </p>
              <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={porterService.image}
                  alt={porterService.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Middle Right Card: Commercial Carpet Steam Extraction */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  Fiber Restoration
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {carpetService.priceStarting}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {carpetService.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {carpetService.description}
              </p>
              <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={carpetService.image}
                  alt={carpetService.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Full-Width Bottom Span Card: Multi-Family Unit Turnover */}
          <div className="lg:col-span-12 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Property Management Turnover
              </span>
              <h3 className="text-2xl font-bold text-white">
                {multiFamilyService.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {multiFamilyService.description}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[10px] uppercase text-slate-500 block font-bold">
                  Unit Pricing
                </span>
                <span className="text-xl font-bold text-white">
                  {multiFamilyService.priceStarting}
                </span>
              </div>
              <a
                href="#rfp"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
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
