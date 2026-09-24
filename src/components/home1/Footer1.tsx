import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer1() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-emerald-100" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Lumina<span className="text-emerald-400">Clean</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Pioneering botanical and non-toxic residential and commercial cleaning across the metropolitan area.
              Safe for children, pets, and the planet.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/50 p-2.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Carbon-Neutral Cleaning Crews</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Carpet Steam Extraction</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Residential Home Cleaning</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Detailed Deep Clean Reset</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Office & Workspace Care</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Multi-Family Unit Turnovers</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#methodology" className="hover:text-emerald-400 transition-colors">Our Nordic Standards</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Client Testimonials</a></li>
              <li><a href="#commercial" className="hover:text-emerald-400 transition-colors">Specialty Cleaning Services</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#quote" className="hover:text-emerald-400 transition-colors">Instant Quote Engine</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Dispatch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(800) 555-MINT</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>concierge@luminaclean.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Serving Metro & Greater Suburbs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lumina Clean Living Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
            <span>for healthy homes and sustainable spaces</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
