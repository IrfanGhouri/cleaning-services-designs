import Navbar4 from "@/components/home4/Navbar4";
import Hero4 from "@/components/home4/Hero4";
import ServiceShowcase4 from "@/components/home4/ServiceShowcase4";
import BentoSection4 from "@/components/home4/BentoSection4";
import FullWidthSparkle4 from "@/components/home4/FullWidthSparkle4";
import StackingStyle4 from "@/components/home4/StackingStyle4";
import Footer4 from "@/components/home4/Footer4";
import InfiniteTicker from "@/components/common/InfiniteTicker";
import InteractiveCarousel from "@/components/common/InteractiveCarousel";
import { Check, Sparkles } from "lucide-react";

export default function CrystalShinePage() {
  const tickerItems = [
    { text: "85-Point Intensive Deep Cleaning Checklist", badge: "CHECKLIST" },
    { text: "100% Full Security Deposit Return Guarantee", badge: "GUARANTEED" },
    { text: "Industrial Hot Water Carpet Extraction", badge: "CARPET" },
    { text: "Same-Day Dispatch & Weekend Booking", badge: "DISPATCH" },
    { text: "Over 1,800 Five-Star Turnover Cleans", badge: "REVIEWS" },
    { text: "Licensed, Vetted & Fully Insured Cleaners", badge: "PROTECTED" },
  ];

  const crystalReviews = [
    {
      id: "c-1",
      author: "Jessica Bradley",
      role: "Apartment Tenant",
      companyOrLocation: "Parkview High-Rise",
      rating: 5,
      serviceUsed: "Move-Out Deep Clean & Carpet Extraction",
      quote:
        "CrystalShine got 100% of my security deposit back from a very strict landlord. The oven looked brand new, and the carpet stains completely disappeared. Incredible job!",
      verified: true,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "c-2",
      author: "Anthony Rossi",
      role: "Property Manager",
      companyOrLocation: "Horizon Luxury Rentals (240 Units)",
      rating: 5,
      serviceUsed: "Multi-Family Unit Turnovers & Day Porters",
      quote:
        "We rely on CrystalShine for every lease turnover. Their 85-point checklist is reliable, fast, and ensures incoming tenants step into an immaculate home.",
      verified: true,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header with Sticky Diamond Clean Brand & Drawer */}
      <Navbar4 />

      <main className="flex-grow">
        {/* 2. Hero Section with Simple Sapphire Quote Form (Wider 2xl) */}
        <Hero4 />

        {/* 3. True Full-Width Marquee Ticker (Full Width Sapphire/Blue) */}
        <InfiniteTicker items={tickerItems} variant="light" speed="normal" />

        {/* 4. Unique Service Showcase Layout 4 (Top Segmented Card Tabs + Display) */}
        <ServiceShowcase4 />

        {/* 5. Unique Bento Layout 4 (Glossy Modern Cards) */}
        <BentoSection4 />

        {/* 6. True Full-Width Edge-to-Edge Section (100vw Before/After Transformation Banner) */}
        <FullWidthSparkle4 />

        {/* 7. Unique Stacking Style 4 (3D Depth Glass Stacking Cards) */}
        <section id="standards" className="bg-slate-50 border-y border-slate-200">
          <StackingStyle4 />
        </section>

        {/* 8. Client Reviews Carousel Section (Wider 2xl Container) */}
        <section id="reviews" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <InteractiveCarousel
            items={crystalReviews}
            theme="blue"
            title="What Clients Say About Our Deep Cleans"
            subtitle="Verified reviews from tenants, homeowners, and multi-family property managers."
          />
        </section>

        {/* 9. 85-Point Cleaning Checklist Breakdown Section (Wider 2xl Container) */}
        <section id="checklist" className="py-20 bg-blue-50/50 border-t border-blue-100">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2 font-mono">
                Detailed Scope
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900">
                The 85-Point Deep Clean Punchlist
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                Every corner is checked, sanitized, and certified before we hand over the keys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  area: "Kitchen Deep Reset",
                  items: [
                    "Oven interior degreased",
                    "Range hood & filters soaked",
                    "Refrigerator coils & inside",
                    "Cabinet faces wiped",
                    "Sink descaled & shined",
                  ],
                },
                {
                  area: "Bathrooms Sanitized",
                  items: [
                    "Tile grout hand scrubbed",
                    "Shower glass descaled",
                    "Toilet base & tank disinfected",
                    "Exhaust fan dust removal",
                    "Mirrors polished streak-free",
                  ],
                },
                {
                  area: "Living & Bedrooms",
                  items: [
                    "Baseboards wiped by hand",
                    "Door frames & switch plates",
                    "Window tracks vacuumed",
                    "Ceiling fan blades cleaned",
                    "Closet shelves & rods wiped",
                  ],
                },
                {
                  area: "Floors & Carpets",
                  items: [
                    "HEPA extraction vacuuming",
                    "Tile grout steam wash",
                    "Hardwood gentle polish",
                    "Edge & corner crevice clean",
                    "High-pressure carpet rinse",
                  ],
                },
              ].map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-md"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>{group.area}</span>
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 10. Full-Width Footer */}
      <Footer4 />
    </div>
  );
}
