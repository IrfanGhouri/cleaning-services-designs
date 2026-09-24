"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Phone, Menu, X, ArrowRight, ShieldCheck, Diamond } from "lucide-react";

export default function Navbar4() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Deep Cleaning", href: "#services" },
    { label: "Diamond Standards", href: "#standards" },
    { label: "Specialty Care", href: "#specialty" },
    { label: "Reviews", href: "#reviews" },
    { label: "85-Pt Checklist", href: "#checklist" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/bioshield-clinical" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 flex items-center gap-1">
                  Complete Building <span className="text-blue-600">Maintenance</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-500 block -mt-0.5 font-mono">
                  Deep Clean & Turnover Pro
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase font-bold tracking-wider text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href="tel:8016873000"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>801-687-3000</span>
              </a>

              <a
                href="#quote"
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-slate-100">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-wider uppercase text-slate-900">
                    Complete Building Maintenance
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1">
                <p className="text-xs font-bold text-blue-900">
                  White Glove Diamond Guarantee
                </p>
                <p className="text-xs text-blue-700">
                  Top-to-bottom reset for homes, apartments, and commercial properties.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <a
                href="tel:8016873000"
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call 801-687-3000</span>
              </a>

              <a
                href="mailto:cbmorem@hotmail.com"
                className="w-full py-1.5 text-center text-xs text-slate-500 hover:text-blue-600 block font-mono"
              >
                cbmorem@hotmail.com
              </a>

              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
