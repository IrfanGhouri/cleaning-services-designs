"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sparkles, Building2, HeartHandshake, ShieldCheck, ChevronUp, ChevronDown, Layers } from "lucide-react";

export default function ThemeSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const homepages = [
    {
      id: "1",
      path: "/",
      name: "Lumina Clean",
      badge: "Eco-Fresh Scandinavian",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-700",
      accent: "#10b981",
    },
    {
      id: "2",
      path: "/apex-commercial",
      name: "Apex Facility Pro",
      badge: "Bold Commercial B2B",
      icon: Building2,
      color: "from-blue-600 to-slate-900",
      accent: "#2563eb",
    },
    {
      id: "3",
      path: "/purehaven-living",
      name: "PureHaven Living",
      badge: "Warm Domestic Sanctuary",
      icon: HeartHandshake,
      color: "from-amber-600 to-rose-700",
      accent: "#ea580c",
    },
    {
      id: "4",
      path: "/bioshield-clinical",
      name: "CrystalShine Pro",
      badge: "Deep & Turnover Clean",
      icon: Sparkles,
      color: "from-blue-600 to-sky-500",
      accent: "#2563eb",
    },
  ];

  return (
    <aside aria-label="Homepage switcher" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Panel */}
      {isOpen && (
        <div className="mb-2 bg-slate-950/90 text-white backdrop-blur-xl border border-white/15 p-3 rounded-2xl shadow-2xl shadow-black/40 w-72 sm:w-80 transition-all duration-300">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                <Layers className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Homepage Explorer</p>
                <p className="text-[10px] text-slate-400">4 Distinct Designs & Color Themes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              aria-label="Minimize switcher"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5">
            {homepages.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.path);

              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-white/15 border border-white/30 shadow-inner"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-sm`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-white">{item.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 block">{item.badge}</span>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isActive
                        ? "bg-white text-slate-900 font-bold"
                        : "text-slate-400 bg-white/5"
                    }`}
                  >
                    Design {item.id}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Trigger Button when minimized */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full shadow-2xl border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <Layers className="w-4 h-4 text-emerald-400 animate-spin-slow" />
          <span className="text-xs font-semibold">Switch Homepage (4)</span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      )}
    </aside>
  );
}
