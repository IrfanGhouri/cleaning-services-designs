import { HeartHandshake, Phone, Mail, MapPin, Heart, Sparkles } from "lucide-react";

export default function Footer3() {
  return (
    <footer className="w-full bg-[#2C221E] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#c25e3e] flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  PureHaven<span className="text-[#c25e3e]">Living</span>
                </span>
                <span className="text-[11px] font-cursive text-stone-400 block -mt-1 text-sm">
                  boutique family sanctuary
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Thoughtful, boutique residential cleaning crafted for families, pets, and homes that deserve gentle care.
              Bringing calm and time back to your family life.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#c25e3e] font-semibold bg-[#FAF7F2]/10 border border-[#c25e3e]/30 p-2.5 rounded-xl w-fit">
              <Heart className="w-4 h-4 fill-[#c25e3e]" />
              <span>100% Dedicated Cleaner Consistency Guarantee</span>
            </div>
          </div>

          {/* Domestic Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Home Care Rituals
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li><a href="#rituals" className="hover:text-[#c25e3e] transition-colors">Weekly Sanctuary Clean</a></li>
              <li><a href="#rituals" className="hover:text-[#c25e3e] transition-colors">Carpet & Rug Steam Extraction</a></li>
              <li><a href="#rituals" className="hover:text-[#c25e3e] transition-colors">Top-to-Bottom Deep Clean</a></li>
              <li><a href="#rituals" className="hover:text-[#c25e3e] transition-colors">Pet De-shedding & Allergen Mist</a></li>
              <li><a href="#rituals" className="hover:text-[#c25e3e] transition-colors">Move-in / Move-out Turnovers</a></li>
            </ul>
          </div>

          {/* Care Philosophy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              The Sanctuary Way
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li><a href="#philosophy" className="hover:text-[#c25e3e] transition-colors">Our Family Philosophy</a></li>
              <li><a href="#specialties" className="hover:text-[#c25e3e] transition-colors">Boutique Specialties</a></li>
              <li><a href="#reviews" className="hover:text-[#c25e3e] transition-colors">Family Love Stories</a></li>
              <li><a href="#book" className="hover:text-[#c25e3e] transition-colors">Gift A Clean to New Parents</a></li>
              <li><a href="#book" className="hover:text-[#c25e3e] transition-colors">Pricing & Frequency Discounts</a></li>
            </ul>
          </div>

          {/* Concierge Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Family Concierge
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c25e3e] shrink-0" />
                <span className="font-semibold text-white">(800) 412-HAVEN</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c25e3e] shrink-0" />
                <span>care@purehavenliving.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c25e3e] shrink-0" />
                <span>Serving Family Neighborhoods</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} PureHaven Living Boutique Care. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Made with warm hearts</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c25e3e]" />
            <span>for peaceful family homes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
