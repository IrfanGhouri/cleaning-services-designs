import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, Star } from "lucide-react";
import { ALL_SERVICES } from "@/data/servicesData";

export default function BentoSection4() {
  const deepClean = ALL_SERVICES[4];
  const carpet = ALL_SERVICES[0];
  const turnover = ALL_SERVICES[6];
  const disinfection = ALL_SERVICES[5];

  return (
    <section id="specialty" className="py-20 sm:py-28 bg-slate-900 text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
              White Glove Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Specialty Deep Cleaning Grid
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Meticulous attention to grime, limescale, stains, and high-touch areas that standard cleanings leave behind.
          </p>
        </div>

        {/* 4-Card Modern Glossy Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 group">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <Image
                  src={deepClean.image}
                  alt={deepClean.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Top Seller
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {deepClean.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {deepClean.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400">{deepClean.priceStarting}</span>
              <a
                href="#quote"
                className="p-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white transition-colors"
                aria-label={`Get quote for ${deepClean.name}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 group">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <Image
                  src={carpet.image}
                  alt={carpet.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-sky-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Steam Power
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {carpet.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {carpet.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-sm font-bold text-sky-400">{carpet.priceStarting}</span>
              <a
                href="#quote"
                className="p-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white transition-colors"
                aria-label={`Get quote for ${carpet.name}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 group">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <Image
                  src={turnover.image}
                  alt={turnover.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Fast Turn
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {turnover.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {turnover.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-sm font-bold text-emerald-400">{turnover.priceStarting}</span>
              <a
                href="#quote"
                className="p-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white transition-colors"
                aria-label={`Get quote for ${turnover.name}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 group">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-800">
                <Image
                  src={disinfection.image}
                  alt={disinfection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Sanitized
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {disinfection.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {disinfection.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-sm font-bold text-indigo-400">{disinfection.priceStarting}</span>
              <a
                href="#quote"
                className="p-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white transition-colors"
                aria-label={`Get quote for ${disinfection.name}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
