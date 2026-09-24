"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

export default function StackingStyle3() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const rituals = [
    {
      step: "01",
      title: "Gentle De-Clutter & Microfiber Dusting",
      subtitle: "Heirlooms & Playrooms",
      desc: "We gently organize surfaces, fold throws, straighten cushions, and dust delicate lamps, photo frames, and blinds with ultra-soft microfibers.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Feather-light handling of toys & items",
        "Microfiber duster on blinds & frames",
        "100% zero synthetic aerosol fumes",
      ],
    },
    {
      step: "02",
      title: "Botanical Kitchen & Bath Rejuvenation",
      subtitle: "Food-Safe Sanitization",
      desc: "Sinks, stovetops, faucets, and tile surrounds are hand-polished using food-safe citrus oils, baking soda paste, and gentle lavender steam.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Limescale removal on chrome & glass",
        "Microwave steamed & wiped clean",
        "Baby-safe counter & highchair sanitize",
      ],
    },
    {
      step: "03",
      title: "Fresh Linens & Barefoot Steam Clean",
      subtitle: "Peaceful Final Reveal",
      desc: "Beds are freshly made with hospital corners, rugs receive warm fiber extraction, and hard floors are left barefoot-clean with natural mint water.",
      image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Barefoot-safe streak-free wood floors",
        "Fresh linens changed & pillows fluffed",
        "Subtle organic French lavender mist",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Responsive ScrollTrigger: Mobile gets pinned horizontal scroll, Desktop gets clean 3-column layout
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      const pinContainer = triggerRef.current;
      const scrollSection = sectionRef.current;

      if (!pinContainer || !scrollSection) return;

      const totalWidth = scrollSection.scrollWidth - window.innerWidth + 40;
      if (totalWidth <= 0) return;

      gsap.to(scrollSection, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={triggerRef}
      className="min-h-[100dvh] flex flex-col justify-center py-4 sm:py-8 lg:py-24 bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Section Header - Compact on mobile to guarantee card visibility */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full mb-3 sm:mb-6 lg:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#c25e3e] block mb-0.5 sm:mb-2">
              Our Family Sanctuary Routine
            </span>
            <h2 className="text-lg sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-[#2C221E]">
              The 3-Step Sanctuary Clean Ritual
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md hidden sm:block">
            Our thorough top-to-bottom methodology ensures consistent, family-safe cleanliness on every visit.
          </p>
        </div>
      </div>

      {/* On Mobile/Tablet: Horizontal sliding track; On Desktop: Elegant 3-column card grid */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div
          ref={sectionRef}
          className="flex gap-4 sm:gap-6 pl-4 sm:pl-8 lg:pl-0 w-max lg:w-full lg:grid lg:grid-cols-3 lg:gap-8"
        >
          {rituals.map((item, idx) => (
            <div
              key={idx}
              className="w-[82vw] sm:w-[440px] lg:w-auto bg-white rounded-3xl p-4 sm:p-5 lg:p-7 border border-stone-200 shadow-xl flex flex-col justify-between shrink-0 lg:shrink transition-all duration-300 hover:shadow-2xl hover:border-[#c25e3e]/40 hover:-translate-y-1.5"
            >
              <div className="space-y-2 sm:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#fbece7] text-[#c25e3e] border border-[#f6d7cd]">
                    Step {item.step}
                  </span>
                  <span className="text-[11px] sm:text-xs text-stone-500 font-semibold">{item.subtitle}</span>
                </div>

                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#2C221E] leading-snug">
                  {item.title}
                </h3>

                <div className="relative h-28 sm:h-36 lg:h-48 w-full rounded-2xl overflow-hidden border border-stone-100 shadow-inner">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </p>

                <div className="space-y-1 sm:space-y-1.5 pt-1.5 sm:pt-2 border-t border-stone-100">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-stone-700">
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#c25e3e] shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 mt-2.5 sm:pt-4 sm:mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-cursive text-lg sm:text-xl text-[#c25e3e]">
                  gentle & peaceful
                </span>
                <a
                  href="#book"
                  className="px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl bg-[#c25e3e] hover:bg-[#a94f33] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
