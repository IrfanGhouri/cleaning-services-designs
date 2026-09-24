"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SimpleQuoteFormProps {
  theme?: "emerald" | "navy" | "terracotta" | "sapphire";
  title?: string;
  subtitle?: string;
}

export default function SimpleQuoteForm({
  theme = "emerald",
  title = "Get an Instant Free Quote",
  subtitle = "No hidden fees. Free cancellation anytime.",
}: SimpleQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("Home Cleaning");
  const [frequency, setFrequency] = useState("Bi-Weekly");

  const themeConfig = {
    emerald: {
      card: "bg-white border-emerald-100 shadow-xl text-slate-900",
      btn: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30",
      accent: "text-emerald-600",
      inputClass: "border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-slate-900 placeholder:text-slate-400",
      label: "text-slate-700",
      radioActive: "bg-emerald-600 text-white border-emerald-600 shadow-sm font-semibold",
      radioInactive: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
      subtext: "text-slate-500",
      bgInput: "#ffffff",
      textInput: "#0f172a",
      colorScheme: "light" as const,
    },
    navy: {
      card: "bg-slate-900 border-slate-800 shadow-2xl text-white",
      btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30",
      accent: "text-blue-400",
      inputClass: "border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-slate-400",
      label: "text-slate-300",
      radioActive: "bg-blue-600 text-white border-blue-600 shadow-sm font-semibold",
      radioInactive: "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800",
      subtext: "text-slate-400",
      bgInput: "#090d16",
      textInput: "#ffffff",
      colorScheme: "dark" as const,
    },
    terracotta: {
      card: "bg-white border-stone-200 shadow-xl text-[#2C221E]",
      btn: "bg-[#c25e3e] hover:bg-[#a94f33] text-white shadow-[#c25e3e]/30",
      accent: "text-[#c25e3e]",
      inputClass: "border-stone-300 focus:border-[#c25e3e] focus:ring-2 focus:ring-[#c25e3e]/20 text-[#2C221E] placeholder:text-stone-400",
      label: "text-stone-700",
      radioActive: "bg-[#c25e3e] text-white border-[#c25e3e] shadow-sm font-semibold",
      radioInactive: "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100",
      subtext: "text-stone-500",
      bgInput: "#ffffff",
      textInput: "#2C221E",
      colorScheme: "light" as const,
    },
    sapphire: {
      card: "bg-white border-blue-100 shadow-xl text-slate-900",
      btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30",
      accent: "text-blue-600",
      inputClass: "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder:text-slate-400",
      label: "text-slate-700",
      radioActive: "bg-blue-600 text-white border-blue-600 shadow-sm font-semibold",
      radioInactive: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
      subtext: "text-slate-500",
      bgInput: "#ffffff",
      textInput: "#0f172a",
      colorScheme: "light" as const,
    },
  };

  const currentTheme = themeConfig[theme];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`p-6 sm:p-8 rounded-3xl border text-center space-y-3 ${currentTheme.card}`}>
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold">Request Received!</h4>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
          We received your quote inquiry for <span className="font-bold">{service}</span>. Our team will contact you within 15 minutes.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={`text-xs font-semibold underline pt-2 block mx-auto ${currentTheme.accent}`}
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: currentTheme.bgInput,
    color: currentTheme.textInput,
    colorScheme: currentTheme.colorScheme,
  };

  const optionStyle = {
    backgroundColor: currentTheme.bgInput,
    color: currentTheme.textInput,
  };

  return (
    <div className={`p-6 sm:p-7 rounded-3xl border ${currentTheme.card}`}>
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight">
          {title}
        </h3>
        <p className={`text-xs mt-0.5 ${currentTheme.subtext}`}>
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Service Type */}
        <div>
          <label className={`text-xs font-semibold block mb-1 ${currentTheme.label}`}>
            Select Cleaning Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={inputStyle}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none transition-all ${currentTheme.inputClass}`}
          >
            <option style={optionStyle} value="Home Cleaning">Home Cleaning</option>
            <option style={optionStyle} value="Carpet Cleaning">Carpet & Upholstery Cleaning</option>
            <option style={optionStyle} value="Office Cleaning">Corporate & Office Cleaning</option>
            <option style={optionStyle} value="Day Porter Service">Day Porter Service</option>
            <option style={optionStyle} value="Deep Cleaning">Deep Cleaning Intensive</option>
            <option style={optionStyle} value="Disinfection Services">Disinfection Services</option>
            <option style={optionStyle} value="Multi-Family Cleaning">Multi-Family Unit Cleaning</option>
          </select>
        </div>

        {/* 2-Column row: Phone & Zip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={`text-xs font-semibold block mb-1 ${currentTheme.label}`}>
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="(555) 000-0000"
              style={inputStyle}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${currentTheme.inputClass}`}
            />
          </div>
          <div>
            <label className={`text-xs font-semibold block mb-1 ${currentTheme.label}`}>
              ZIP / Postal Code
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 90210"
              style={inputStyle}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${currentTheme.inputClass}`}
            />
          </div>
        </div>

        {/* Preferred Frequency */}
        <div>
          <label className={`text-xs font-semibold block mb-1 ${currentTheme.label}`}>
            Service Frequency
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["One-Time", "Bi-Weekly", "Weekly"].map((freq) => {
              const isSelected = frequency === freq;
              return (
                <button
                  type="button"
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`flex items-center justify-center p-2 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                    isSelected ? currentTheme.radioActive : currentTheme.radioInactive
                  }`}
                >
                  <span>{freq}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Consistent button text across all forms */}
        <button
          type="submit"
          className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.01] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 mt-2 ${currentTheme.btn}`}
        >
          <span>Get Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-center text-slate-400 pt-1">
          ✓ No credit card required • Response within 15 mins
        </p>
      </form>
    </div>
  );
}
