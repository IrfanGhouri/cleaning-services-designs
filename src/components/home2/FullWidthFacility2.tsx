import { Building2, Shield, ArrowRight, Award, CheckCircle2 } from "lucide-react";

export default function FullWidthFacility2() {
  return (
    <section className="w-full bg-[#080d1a] border-y border-blue-900/40 text-white overflow-hidden my-12 relative">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-20 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Statement & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>Full-Scope Commercial Janitorial</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Enterprise Facility Management. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Audited & Inspected Daily.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              From Class-A commercial high-rises to multi-tenant campuses, our dedicated day porters and night-shift custodial teams ensure continuous workplace hygiene and OSHA compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "OSHA 1910 General Industry Compliant",
                "Dedicated On-Site Day Porter Staffing",
                "Digital Inspection Punchlists with Photos",
                "$5,000,000 Commercial Umbrella Coverage",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Big 4-Cell Enterprise Metric Grid (Edge-to-Edge feel) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white font-mono block">4.8M</span>
              <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Sq Ft Cleaned Daily</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-blue-400 font-mono block">&lt;15m</span>
              <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Spill Response SLA</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono block">100%</span>
              <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Bonded Staff</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono block">24/7</span>
              <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">Operations Support</span>
            </div>

            <div className="col-span-2 pt-2">
              <a
                href="#rfp"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
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
