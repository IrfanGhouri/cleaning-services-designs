"use client";

import Image from "next/image";
import { Check, ArrowRight, Sparkles, Clock, DollarSign } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function ServiceShowcase1() {
  const services = [
    {
      ...ALL_SERVICES[2], // Home Cleaning
      tag: "Botanical Living",
      badge: "Most Popular",
    },
    {
      ...ALL_SERVICES[0], // Carpet Cleaning
      tag: "Thermal Steam",
      badge: "Zero Residue",
    },
    {
      ...ALL_SERVICES[4], // Deep Cleaning
      tag: "Top-to-Bottom",
      badge: "Intensive",
    },
    {
      ...ALL_SERVICES[1], // Office Cleaning
      tag: "Workplace Care",
      badge: "Commercial",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 inline-block mb-3">
            Core Cleaning Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Care for Every Space
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          Explore our signature residential and workspace cleaning solutions powered by botanical formulations.
        </p>
      </div>

      {/* 4-Card Responsive Grid with Distinct Architectural Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl border border-emerald-100/90 shadow-lg hover:shadow-2xl hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              {/* Image Frame with Floating Badge */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-100 shadow-inner">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-emerald-800 text-[11px] font-extrabold shadow-sm">
                  {item.badge}
                </div>
              </div>

              {/* Title & Price */}
              <div className="mb-2">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </h3>
                <span className="text-xs font-bold text-emerald-600 block mt-1">
                  Starting from {item.priceStarting}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Micro Deliverables Checklist */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                {item.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA trigger */}
            <div className="pt-5 mt-5 border-t border-slate-100">
              <a
                href="#quote"
                className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
