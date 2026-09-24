import Image from "next/image";
import { Heart, Check, ArrowRight, Sparkles, Smile } from "lucide-react";

export default function FullWidthSanctuary3() {
  return (
    <section className="w-full bg-[#332520] text-white overflow-hidden my-12 relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Left Side: 100% Full-Bleed Panorama Photo */}
        <div className="relative min-h-[380px] lg:min-h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
            alt="Warm Family Sanctuary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#332520] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-md bg-stone-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <p className="text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#c25e3e] text-[#c25e3e]" />
              Same Dedicated Cleaner Always
            </p>
            <p className="text-xs text-white">
              We know trust takes time. That&apos;s why your home is cared for by the exact same familiar, background-checked cleaner on every scheduled visit.
            </p>
          </div>
        </div>

        {/* Right Side: Full-Bleed Warm Content */}
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16 xl:p-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbece7]/10 border border-[#fbece7]/20 text-amber-200 text-xs font-bold uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#d97742]" />
            <span>The PureHaven Sanctuary Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A Spotless Home. <br />
            <span className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-[#d97742] font-normal">
              More time for your family.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
            Reclaim your weekends. Step through your front door into folded throws, gleaming counters, and the comforting scent of natural citrus and lavender.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "100% Non-Toxic Botanical Supplies",
              "Same Dedicated Familiar Maid",
              "No Contracts • Cancel or Pause Anytime",
              "24-Hour Happiness Re-Clean Pledge",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                <div className="w-5 h-5 rounded-full bg-[#c25e3e]/30 text-[#d97742] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="px-7 py-3.5 rounded-full bg-[#c25e3e] hover:bg-[#a94f33] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#c25e3e]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-stone-400 font-cursive text-lg">
              tailored with love for family homes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
