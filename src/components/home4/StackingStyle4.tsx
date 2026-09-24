"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Check, Diamond } from "lucide-react";

export default function StackingStyle4() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const phases = [
    {
      step: "01",
      title: "Intensive Buildup & Grime Remediation",
      badge: "Phase One // Detail Scrub",
      desc: "Our specialized crews tackle heavy grease in kitchen ovens, burnt stovetops, lime deposits in wet rooms, and hand-scrub every baseboard and door frame from corner to corner.",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Heavy appliance interior degreasing", "Tile grout hand-scrubbing with citrus paste", "Baseboard, door track, and casing wipe"],
      stat: "100%",
      statLabel: "Grime Remediation",
      glowBorder: "border-blue-500/40 shadow-blue-500/10",
      cardBg: "bg-slate-900",
    },
    {
      step: "02",
      title: "220°F Hot Water Carpet & Fiber Extraction",
      badge: "Phase Two // Deep Steam",
      desc: "Commercial steam equipment penetrates deep into fiber backings to dissolve embedded dirt, beverage spills, and pet odors without leaving sticky soap residue.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Thermal high-pressure rotary extraction", "Enzymatic pet stain neutralization", "Rapid drying in 2-4 hours"],
      stat: "2-4 Hr",
      statLabel: "Rapid Dry Window",
      glowBorder: "border-sky-500/40 shadow-sky-500/10",
      cardBg: "bg-slate-950",
    },
    {
      step: "03",
      title: "Streak-Free Diamond Glass & Polish",
      badge: "Phase Three // Crystal Polish",
      desc: "All shower doors, interior windows, faucets, and polished stone countertops receive an electrostatic microfiber polish for crystal-clear radiance and deposit-ready handover.",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1000&q=80",
      bullets: ["Streak-free glass and mirror detailing", "Chrome, brass, and fixture shine", "White-glove 85-point inspection sign-off"],
      stat: "100%",
      statLabel: "Deposit Return Pass",
      glowBorder: "border-blue-400/60 shadow-blue-500/20",
      cardBg: "bg-[#091528]",
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
            scale: 0.90,
            opacity: 0.5,
            y: -15,
            filter: "brightness(0.7)",
            ease: "power1.out",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 60%",
              end: "top 20%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 inline-block mb-3">
          The Diamond Standard
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900">
          Our 3-Phase Deep Clean Method
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Our intensive 3-phase methodology restores diamond-level shine to every room.
        </p>
      </div>

      {/* 3D Depth Pinned Stack */}
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {phases.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            style={{
              top: `${90 + idx * 18}px`,
              zIndex: idx + 1,
            }}
            className={`sticky rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all duration-300 ${item.cardBg} ${item.glowBorder} text-white`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">STEP {item.step}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6 border-t border-white/10">
                  <div>
                    <span className="text-2xl font-black text-blue-400 block font-mono">{item.stat}</span>
                    <span className="text-[10px] uppercase text-slate-400 font-bold">{item.statLabel}</span>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div className="flex items-center gap-1.5 text-xs text-blue-300 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>Diamond Pass Certified</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
