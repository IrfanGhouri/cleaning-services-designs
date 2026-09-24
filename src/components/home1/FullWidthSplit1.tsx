import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, Sparkles, Leaf } from "lucide-react";

export default function FullWidthSplit1() {
  return (
    <section className="w-full bg-emerald-950 text-white overflow-hidden my-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
        {/* Left Side: 100% Full-Bleed Image (No Margins) */}
        <div className="relative min-h-[380px] lg:min-h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80"
            alt="Pristine Living Space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-md bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" />
              100% Plant-Derived Formulation
            </p>
            <p className="text-sm font-bold text-white">
              Zero synthetic fragrances, zero chlorine bleach, zero chemical residues.
            </p>
          </div>
        </div>

        {/* Right Side: Full-Bleed Emerald Content with Generous Fluid Padding */}
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16 xl:p-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Pure Living Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Every Corner Spotless. <br />
            <span className="text-emerald-400">Guaranteed Fresh Air.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            We don’t just mask odors with artificial sprays. Our botanical hot-water extraction and HEPA filtering eliminate allergens at the molecular level, leaving your home naturally pure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "EPA Safer Choice Certified",
              "Child & Pet Safe Formulations",
              "24-Hour Free Re-Clean Policy",
              "$2M Bonded & Insured Staff",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-400">
              Instant 60-second online quote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
