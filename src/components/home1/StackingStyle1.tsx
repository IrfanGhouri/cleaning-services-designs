"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Shield } from "lucide-react";

export default function StackingStyle1() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      num: "01",
      title: "HEPA Extraction & Allergen Removal",
      tag: "Stage One",
      desc: "Industrial-grade HEPA filtration extracts 99.97% of fine dust, dander, and trapped particles from rugs and furniture without dispersing micro-dust into room air.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Zero airborne dust recirculation", "Color-coded microfibers", "High-velocity extraction"],
      stat: "99.97%",
      statLabel: "Allergen Capture",
      cardBg: "bg-slate-900 border-slate-800 text-white",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    },
    {
      num: "02",
      title: "Botanical Steam & Deep Degreasing",
      tag: "Stage Two",
      desc: "220°F pressurized steam infused with organic plant extracts breaks down grease, soap scum, and grime with zero synthetic chemicals or harsh odors.",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Food-safe botanical extracts", "Tile grout deep scrub", "Fast-drying steam formula"],
      stat: "0%",
      statLabel: "Toxic Residue",
      cardBg: "bg-emerald-950 border-emerald-800/80 text-white",
      badgeBg: "bg-emerald-400/20 text-emerald-200 border-emerald-300/30",
    },
    {
      num: "03",
      title: "White-Glove 60-Point Inspection",
      tag: "Stage Three",
      desc: "A dedicated supervisor verifies all baseboards, switch plates, appliance fronts, and mirrors against our strict Nordic clean checklist before departure.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Detailed room-by-room audit", "Free 24-hr re-touch guarantee", "Supervisor certified pass"],
      stat: "100%",
      statLabel: "Satisfaction Score",
      cardBg: "bg-teal-950 border-teal-800/80 text-white",
      badgeBg: "bg-teal-400/20 text-teal-200 border-teal-300/30",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          gsap.to(card, {
            scale: 0.93,
            opacity: 0.5,
            y: -10,
            ease: "power1.out",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 65%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block mb-3">
          Our Clean Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          The 3-Step Clean Standard
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Our certified multi-layer methodology delivers immaculate, chemical-free living environments.
        </p>
      </div>

      {/* Layered Deck Stacking Cards */}
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            style={{
              top: `${90 + idx * 18}px`,
              zIndex: idx + 1,
            }}
            className={`sticky rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all duration-300 ${step.cardBg}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${step.badgeBg}`}>
                    {step.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">STEP {step.num}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {step.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6 border-t border-white/10">
                  <div>
                    <span className="text-2xl font-black block">{step.stat}</span>
                    <span className="text-[10px] uppercase text-slate-400 font-bold">{step.statLabel}</span>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                    <Shield className="w-4 h-4" />
                    <span>Guaranteed Quality Check</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <Image src={step.image} alt={step.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
