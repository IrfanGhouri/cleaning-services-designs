import Image from "next/image";
import { Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function FullWidthSparkle4() {
  return (
    <section className="w-full bg-[#0a1426] text-white overflow-hidden my-12 relative border-y border-blue-900/50">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
        {/* Left Side: 100% Full-Bleed Transformation Image */}
        <div className="relative min-h-[380px] lg:min-h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1400&q=80"
            alt="Spotless Deep Clean"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a1426] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-md bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-blue-500/20">
            <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              100% Security Deposit Return
            </p>
            <p className="text-xs text-white">
              Approved by over 140 premier property managers. Every tile, appliance, baseboard, and carpet edge inspected.
            </p>
          </div>
        </div>

        {/* Right Side: Full-Bleed Sapphire Content */}
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16 xl:p-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>White-Glove Turnover Clean</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Intensive Reset. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              Diamond Shine Guaranteed.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            When standard surface cleaning isn&apos;t enough, our intensive crews roll up their sleeves to tackle baked-on kitchen grease, bathroom limescale, carpet stains, and neglected corners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "85-Point Inspection Punchlist",
              "220°F Hot Water Carpet Extraction",
              "Interior Oven & Fridge Detailing",
              "100% Deposit Return Pass Rate",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-400">
              Same-day & weekend appointments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
