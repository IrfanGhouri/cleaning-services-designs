"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building2, Phone, Menu, X, ArrowRight, Shield, Activity } from "lucide-react";

export default function Navbar2() {
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
    { label: "Services", href: "#services" },
    { label: "Facility Portfolio", href: "#portfolio" },
    { label: "Operations SLA", href: "#sla" },
    { label: "Client Reviews", href: "#reviews" },
    { label: "Request Quote", href: "#rfp" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/apex-commercial" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black tracking-wider uppercase text-white flex items-center gap-1.5">
                  Complete Building <span className="text-blue-500">Maintenance</span>
                </span>
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-0.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Facility Operations 24/7</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href="tel:8016873000"
                className="flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-blue-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>801-687-3000</span>
              </a>

              <a
                href="#rfp"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-slate-800 transition-colors"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-slate-950 border-l border-slate-800 h-full shadow-2xl p-6 flex flex-col justify-between z-10 text-white">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-wider text-white">
                    Complete Building Maintenance
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
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
                    className="block px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider text-slate-300 hover:bg-slate-900 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Compliance Certifications
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>OSHA 1910 General Industry Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    <span>Digital Punchlist Inspection Reports</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href="tel:8016873000"
                className="w-full py-3 rounded-xl border border-slate-800 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call 801-687-3000</span>
              </a>

              <a
                href="mailto:cbmorem@hotmail.com"
                className="w-full py-1.5 text-center text-xs text-slate-400 hover:text-blue-400 block font-mono"
              >
                cbmorem@hotmail.com
              </a>

              <a
                href="#rfp"
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
