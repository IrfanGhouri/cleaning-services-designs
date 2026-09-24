"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Check, Building2, Clock, CheckCircle2 } from "lucide-react";

export default function StackingStyle2() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftRailRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const protocols = [
    {
      step: "01",
      title: "Day Porter Touchpoint Sanitization",
      time: "Every 45 Minutes",
      desc: "Uniformed on-site staff continuously patrol high-traffic elevator banks, reception counters, conference suites, and restrooms to sanitize touchpoints and replenish supplies.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Immediate wet spill response SLA under 15 minutes",
        "Restroom replenishment and digital log sign-offs",
        "Professional front-of-house greeting and hospitality",
      ],
      metric: "15 Min",
      metricLabel: "Spill Response SLA",
    },
    {
      step: "02",
      title: "Night-Shift Mechanical Floor Care",
      time: "Off-Hours Shift",
      desc: "After office hours, automated industrial scrubbers and thermal hot-water extraction units deep clean commercial carpet tiles and burnish high-traffic hard floors.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Walk-behind auto-scrubbers for expansive floorplates",
        "Hot-water extraction for commercial carpet tiles",
        "Zero interruption to daytime office productivity",
      ],
      metric: "150K+",
      metricLabel: "Sq Ft Reset Per Shift",
    },
    {
      step: "03",
      title: "Digital Quality Audit & Sign-Off",
      time: "Daily Closeout",
      desc: "Field supervisors complete digital punchlist inspections and upload photo verification logs directly to your facility management portal for transparent accountability.",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Cloud-synced digital compliance reporting",
        "Real-time photo verification of critical zones",
        "Dedicated senior account manager contact",
      ],
      metric: "99.8%",
      metricLabel: "Inspection Pass Rate",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Update active step indicator based on scroll position of cards
      protocols.forEach((_, idx) => {
        ScrollTrigger.create({
          trigger: `#apex-card-${idx}`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [protocols]);

  return (
    <div ref={containerRef} className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-white relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 40% Column: Pinned Sticky Status Rail (Self-contained sticky, zero bleed) */}
        <div
          ref={leftRailRef}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 self-start z-10 bg-slate-950/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>Facility SLA Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            How We Manage Your Facility
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
            Our operational framework combines daytime porter readiness with night-shift heavy machinery restoration.
          </p>

          {/* Active Step Progress Switcher */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            {protocols.map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-slate-900 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                    : "bg-slate-950/40 border-slate-800/60 text-slate-500"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span>STEP {item.step}</span>
                  <span className={activeStep === idx ? "text-blue-400" : "text-slate-600"}>
                    {item.time}
                  </span>
                </div>
                <p className="text-sm font-bold mt-0.5 truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right 60% Column: Overlapping Facility Cards */}
        <div className="lg:col-span-7 space-y-8 sm:space-y-12">
          {protocols.map((item, idx) => (
            <div
              key={idx}
              id={`apex-card-${idx}`}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 transition-all duration-300 hover:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/60">
                  Protocol {item.step}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{item.time}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {item.title}
              </h3>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-2xl font-black text-blue-400 block font-mono">{item.metric}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{item.metricLabel}</span>
                </div>
                <a
                  href="#rfp"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
