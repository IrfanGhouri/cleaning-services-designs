import { Building2, Phone, Mail, MapPin, ShieldAlert, Award, FileText } from "lucide-react";

export default function Footer2() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black uppercase tracking-wider text-white">
                Complete Building <span className="text-blue-500">Maintenance</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Industrial-grade facility management, commercial janitorial, and day porter operations.
              Serving commercial towers, medical systems, and multi-family real estate nationwide.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                ISO 9001 Certified
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                OSHA 1910 Compliant
              </span>
            </div>
          </div>

          {/* Enterprise Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">On-Site Day Porter Staffing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Corporate Office Janitorial</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Multi-Family Unit Turnaround</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Electrostatic Disinfection</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Commercial Hot Water Extraction</a></li>
            </ul>
          </div>

          {/* Operations & SLA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Operational Protocols
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#sla" className="hover:text-blue-400 transition-colors">4-Tier Response SLA</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Commercial Facility Portfolio</a></li>
              <li><a href="#rfp" className="hover:text-blue-400 transition-colors">Square-Footage Bid Engine</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Enterprise Case Studies</a></li>
              <li><a href="#rfp" className="hover:text-blue-400 transition-colors">Safety Data Sheets (SDS)</a></li>
            </ul>
          </div>

          {/* 24/7 Dispatch Hotline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Enterprise Dispatch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:8016873000" className="font-mono font-bold text-white hover:text-blue-400 transition-colors">801-687-3000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:cbmorem@hotmail.com" className="hover:text-blue-400 transition-colors">cbmorem@hotmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>HQ: Operations Tower, Suite 900</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Complete Building Maintenance. Master Janitorial Contractor. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Security & Compliance</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Disaster Recovery SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
