import Image from "next/image";
import { Check, ArrowRight, Building2, Shield, Clock } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function ServiceShowcase2() {
  const commercialServices = [
    {
      ...ALL_SERVICES[1], // Corporate & Office cleaning
      shift: "Day & Night Shifts",
      capacity: "Up to 250,000 sq ft",
      sla: "Scheduled Custodial",
    },
    {
      ...ALL_SERVICES[3], // Day porter service
      shift: "On-Site Full Time",
      capacity: "Continuous Lobby & Restroom",
      sla: "15-Min Spill Response",
    },
    {
      ...ALL_SERVICES[0], // Carpet & Upholstery cleaning
      shift: "Off-Hours Extraction",
      capacity: "Commercial Carpet Tiles",
      sla: "220°F Thermal Rinse",
    },
    {
      ...ALL_SERVICES[6], // Multi-family unit cleaning
      shift: "Turnkey Lease Turns",
      capacity: "High-Rise Apartment Units",
      sla: "24-48 Hr Guaranteed Turn",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-2">
            Enterprise Facility Matrix
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Commercial Cleaning Capabilities
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md">
          Industrial-grade custodial staffing and equipment engineered for commercial towers and multi-family communities.
        </p>
      </div>

      {/* 4-Card Industrial Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commercialServices.map((service) => (
          <div
            key={service.id}
            className="group bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden"
          >
            <div>
              {/* Image Frame with Capacity Tag */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-800">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-blue-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-blue-900/50">
                  {service.shift}
                </div>
              </div>

              {/* Title & Price */}
              <div className="mb-2">
                <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs font-mono font-bold text-blue-400 block mt-1">
                  Starting at {service.priceStarting}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* SLA & Features */}
              <div className="space-y-2 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{service.sla}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="truncate">{service.capacity}</span>
                </div>
              </div>
            </div>

            {/* Bottom Quote Button */}
            <div className="pt-5 mt-5 border-t border-slate-800/80">
              <a
                href="#rfp"
                className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-slate-800 group-hover:border-blue-500"
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
