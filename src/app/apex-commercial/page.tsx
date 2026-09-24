import Navbar2 from "@/components/home2/Navbar2";
import Hero2 from "@/components/home2/Hero2";
import ServiceShowcase2 from "@/components/home2/ServiceShowcase2";
import BentoSection2 from "@/components/home2/BentoSection2";
import FullWidthFacility2 from "@/components/home2/FullWidthFacility2";
import StackingStyle2 from "@/components/home2/StackingStyle2";
import ReviewGrid2 from "@/components/home2/ReviewGrid2";
import Footer2 from "@/components/home2/Footer2";
import InfiniteTicker from "@/components/common/InfiniteTicker";
import { Check } from "lucide-react";

export default function ApexCommercialPage() {
  const tickerItems = [
    { text: "OSHA 1910 General Industry Compliant", badge: "OSHA" },
    { text: "Over 4.8 Million Sq Ft Maintained Daily", badge: "CAPACITY" },
    { text: "Dedicated On-Site Day Porters Available", badge: "STAFFING" },
    { text: "Digital ATP Swab Audit Verification Logs", badge: "VERIFIED" },
    { text: "Uniformed & Badge-Security Cleared Personnel", badge: "SECURITY" },
    { text: "$5 Million Commercial General Liability", badge: "BONDED" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      {/* 1. Header with Sticky Dark Command-Bar & Animated Drawer */}
      <Navbar2 />

      <main className="flex-grow">
        {/* 2. Hero Section with Simple Dark Quote Form (Wider 2xl) */}
        <Hero2 />

        {/* 3. True Full-Width Marquee Ticker (Full Width Dark) */}
        <InfiniteTicker items={tickerItems} variant="dark" speed="normal" />

        {/* 4. Unique Service Showcase Layout 2 (Vertical Sidebar + Large Display) */}
        <ServiceShowcase2 />

        {/* 5. Unique Bento Layout 2 (Asymmetric Grid Bento) */}
        <BentoSection2 />

        {/* 6. True Full-Width Edge-to-Edge Section (100vw Facility Command Center) */}
        <FullWidthFacility2 />

        {/* 7. Unique Stacking Style 2 (Split Pinned Sticky Rail Layout) */}
        <section id="sla" className="bg-slate-950 border-t border-slate-800">
          <StackingStyle2 />
        </section>

        {/* 8. Unique Review Layout 2 (3-Column Enterprise Grid) */}
        <ReviewGrid2 />

        {/* 9. Comparison Matrix (Wider 2xl Container) */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2 font-mono">
                Why Commercial Leaders Choose Apex
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
                Apex Pro vs. Traditional Janitorial
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px] font-mono">
                    <th className="py-3 px-4">Capability</th>
                    <th className="py-3 px-4 text-blue-400 font-bold">Apex Facility Pro</th>
                    <th className="py-3 px-4 text-slate-500">Standard Vendors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Dedicated Day Porters</td>
                    <td className="py-3.5 px-4 text-blue-400 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> Full-time / Shift-based
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">Night-only sweeps</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Digital Inspection Verification</td>
                    <td className="py-3.5 px-4 text-blue-400 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> Weekly cloud audit logs
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">Subjective check</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Spill Response Time</td>
                    <td className="py-3.5 px-4 text-blue-400 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> Under 15 minutes
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">Next scheduled visit (12-24h)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Multi-Family Turnover Turnaround</td>
                    <td className="py-3.5 px-4 text-blue-400 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> 24 to 48 hours guaranteed
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">4 to 7 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Full-Width Corporate Footer */}
      <Footer2 />
    </div>
  );
}
