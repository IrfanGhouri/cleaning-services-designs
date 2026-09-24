"use client";

import { Building2, Shield, CheckCircle2 } from "lucide-react";
import SimpleQuoteForm from "@/components/common/SimpleQuoteForm";

export default function Hero2() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Commercial Janitorial & Day Porter Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              Pristine Workplaces.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Zero Operational Hassle.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Turnkey office cleaning, on-site day porters, carpet steam extraction, and multi-family unit turnover teams.
              Built for commercial towers, medical offices, and corporate suites.
            </p>

            {/* Industrial Metrics Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-y border-slate-800/80 py-4">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block font-mono">
                  4.8M
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Sq Ft Cleaned Daily
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-blue-400 block font-mono">
                  24/7
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Operational Support
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 block font-mono">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">
                  OSHA & Bond Insured
                </span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Uniformed & Vetted Janitors</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Quality Inspection Reports</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Quote Form with Navy Theme */}
          <div className="lg:col-span-6" id="rfp">
            <SimpleQuoteForm
              theme="navy"
              title="Request Commercial Facility Quote"
              subtitle="Customized janitorial proposal tailored to your square footage."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
