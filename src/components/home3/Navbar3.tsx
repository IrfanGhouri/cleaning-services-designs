"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeartHandshake, Phone, Menu, X, ArrowRight, Heart, Sparkles } from "lucide-react";

export default function Navbar3() {
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
    { label: "Room Care", href: "#rituals" },
    { label: "Specialty Services", href: "#specialties" },
    { label: "Sanctuary Routine", href: "#philosophy" },
    { label: "Family Reviews", href: "#reviews" },
    { label: "Book a Clean", href: "#book" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-[#F3ECE2] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/purehaven-living" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-[#c25e3e] flex items-center justify-center text-white shadow-md shadow-[#c25e3e]/25 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#2C221E] flex items-center gap-1">
                  Complete Building <span className="text-[#c25e3e]">Maintenance</span>
                </span>
                <span className="text-[11px] font-cursive text-[#c25e3e] block -mt-1 font-semibold text-base">
                  CBM • family home sanctuary
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-[#2C221E]/80 hover:text-[#c25e3e] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href="tel:8016873000"
                className="flex items-center gap-2 text-xs font-semibold text-[#2C221E] hover:text-[#c25e3e] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#fbece7] flex items-center justify-center text-[#c25e3e]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>801-687-3000</span>
              </a>

              <a
                href="#book"
                className="px-5 py-2.5 rounded-full bg-[#c25e3e] hover:bg-[#a94f33] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#c25e3e]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#2C221E] hover:bg-[#F3ECE2] transition-colors"
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
            className="fixed inset-0 bg-[#2C221E]/60 backdrop-blur-sm"
          />

          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-[#F3ECE2]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F3ECE2]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#c25e3e] flex items-center justify-center text-white">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#2C221E] text-sm">Complete Building Maintenance</span>
                    <span className="text-[10px] font-cursive block text-[#c25e3e] -mt-0.5 font-semibold text-sm">
                      family home sanctuary
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-[#F3ECE2]"
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
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#2C221E] hover:bg-[#fbece7] hover:text-[#c25e3e] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 p-4 rounded-2xl bg-[#fbece7]/60 border border-[#f6d7cd] space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c25e3e]">
                  The CBM Promise
                </p>
                <p className="text-xs text-[#2C221E]/80 leading-relaxed">
                  We assign the exact same trusted cleaner to your family home on every recurring schedule.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#F3ECE2]">
              <a
                href="tel:8016873000"
                className="w-full py-3 rounded-xl border border-[#c25e3e]/30 text-[#2C221E] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c25e3e]" />
                <span>Call 801-687-3000</span>
              </a>

              <a
                href="mailto:cbmorem@hotmail.com"
                className="w-full py-1.5 text-center text-xs text-stone-500 hover:text-[#c25e3e] block font-medium"
              >
                cbmorem@hotmail.com
              </a>

              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#c25e3e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c25e3e]/30"
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
