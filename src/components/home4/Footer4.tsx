import { Sparkles, Phone, Mail, MapPin, ShieldCheck, CheckCircle } from "lucide-react";

export default function Footer4() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-black uppercase tracking-wider text-white">
                Crystal<span className="text-blue-500">Shine</span> Pro
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Specialized deep cleaning, carpet steam restoration, move-in/move-out turnover, and routine surface sanitization for homes, apartments, and offices.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold bg-blue-950/60 border border-blue-800/50 p-2.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Deposit Return & Cleanliness Guarantee</span>
            </div>
          </div>

          {/* Deep Cleaning Offerings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialty Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Detailed Deep Clean</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Carpet & Rug Steam Clean</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Apartment Turnover Resets</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Office & Janitorial Services</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Day Porter Maintenance</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Our Standards
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#standards" className="hover:text-blue-400 transition-colors">85-Point Inspection List</a></li>
              <li><a href="#specialty" className="hover:text-blue-400 transition-colors">Specialty Deep Cleaning</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#checklist" className="hover:text-blue-400 transition-colors">Deep Clean Checklist</a></li>
              <li><a href="#quote" className="hover:text-blue-400 transition-colors">Instant Quote Engine</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Call & Book
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-bold text-white">(800) 888-SHINE</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@crystalshineclean.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dispatching Across All City Zones</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CrystalShine Pro Deep Cleaning Inc. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Commercial Grade Equipment</span>
            <span>•</span>
            <span>100% Happiness Pledge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
