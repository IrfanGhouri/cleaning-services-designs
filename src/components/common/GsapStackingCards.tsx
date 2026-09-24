"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Shield } from "lucide-react";

export interface StackingCardItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  statsLabel: string;
  statsValue: string;
  image: string;
  bullets: string[];
  themeBg: string;
  themeBorder: string;
  themeBadge: string;
  accentColor?: string;
}

interface GsapStackingCardsProps {
  cards: StackingCardItem[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  badgeText?: string;
  cardOffsetTop?: number;
}

export default function GsapStackingCards({
  cards,
  sectionTitle = "Our Precision Cleaning Methodology",
  sectionSubtitle = "How our certified team guarantees spotless, healthy spaces on every visit.",
  badgeText = "The Standard of Clean",
  cardOffsetTop = 90,
}: GsapStackingCardsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cardElements.forEach((card, i) => {
        // Animate previous card when next card comes into view
        if (i < cardElements.length - 1) {
          const nextCard = cardElements[i + 1];
          if (!nextCard) return;

          gsap.to(card, {
            scale: 0.92,
            opacity: 0.6,
            filter: "blur(1px)",
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
  }, [cards]);

  return (
    <div ref={containerRef} className="relative w-full py-16 sm:py-24">
      {/* Header with authentic customer-facing copy */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 mb-3 border border-slate-200 dark:border-white/15">
          <span>{badgeText}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {sectionTitle}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {sectionSubtitle}
        </p>
      </div>

      {/* Stacking Cards Container using hardware-accelerated CSS sticky with GSAP scrub */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {cards.map((card, index) => {
          const topPosition = cardOffsetTop + index * 16;

          return (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                top: `${topPosition}px`,
                zIndex: index + 1,
              }}
              className={`sticky rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all duration-300 will-change-transform ${card.themeBg} ${card.themeBorder}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                {/* Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${card.themeBadge}`}
                    >
                      Step {card.stepNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {card.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {card.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4 border-t border-white/10">
                    <div>
                      <span className="text-2xl font-black text-white block">
                        {card.statsValue}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                        {card.statsLabel}
                      </span>
                    </div>
                    <div className="h-8 w-px bg-white/15" />
                    <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                      <Shield className="w-4 h-4" />
                      <span>Certified Quality Standard</span>
                    </div>
                  </div>
                </div>

                {/* Imagery */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
