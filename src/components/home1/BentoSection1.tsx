"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function BentoSection1() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const bentoServices = [
    ALL_SERVICES[1], // Office cleaning
    ALL_SERVICES[3], // Day porter
    ALL_SERVICES[6], // Multi-family unit
    ALL_SERVICES[5], // Disinfection
  ];

  return (
    <section id="commercial" className="py-20 sm:py-28 bg-slate-950 text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Commercial & Specialty Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Specialized Cleaning Expertise
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            From modern office floors to rapid apartment turnovers, hover or tap any service to explore detailed scope.
          </p>
        </div>

        {/* Expandable Bento Cards */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[460px] md:h-[500px]">
          {bentoServices.map((service, index) => {
            const isExpanded = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${
                  isExpanded
                    ? "flex-[3] border-emerald-500/60 shadow-2xl shadow-emerald-500/10"
                    : "flex-1 border-white/10 hover:border-white/25 bg-slate-900"
                }`}
              >
                {/* Background Image with adaptive zoom */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isExpanded ? "scale-105 filter brightness-75" : "filter brightness-50 scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-emerald-500/20 text-emerald-300 border-emerald-400/30 backdrop-blur-md">
                      {service.shortTag}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 transition-transform duration-300 ${
                        isExpanded ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3 mt-6 sm:mt-0">
                    <h4 className="text-xl sm:text-3xl font-extrabold text-white">
                      {service.name}
                    </h4>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? "max-h-96 opacity-100 space-y-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.highlights.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                            Starting at
                          </span>
                          <span className="text-xl font-black text-white">
                            {service.priceStarting}
                          </span>
                        </div>

                        <a
                          href="#quote"
                          className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                        >
                          <span>Get Free Quote</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
