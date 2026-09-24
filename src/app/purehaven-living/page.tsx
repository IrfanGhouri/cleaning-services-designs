import Navbar3 from "@/components/home3/Navbar3";
import Hero3 from "@/components/home3/Hero3";
import ServiceShowcase3 from "@/components/home3/ServiceShowcase3";
import BentoSection3 from "@/components/home3/BentoSection3";
import FullWidthSanctuary3 from "@/components/home3/FullWidthSanctuary3";
import StackingStyle3 from "@/components/home3/StackingStyle3";
import Footer3 from "@/components/home3/Footer3";
import InfiniteTicker from "@/components/common/InfiniteTicker";
import InteractiveCarousel from "@/components/common/InteractiveCarousel";
import { HOME_3_REVIEWS } from "@/data/reviewsData";
import { Smile } from "lucide-react";

export default function PureHavenLivingPage() {
  const tickerItems = [
    { text: "100% Pet-Safe & Kid-Friendly Botanicals", badge: "SAFE" },
    { text: "Same Trusted Cleaner Every Single Visit", badge: "CONSISTENCY" },
    { text: "No Long-Term Contracts • Pause or Cancel Anytime", badge: "FREEDOM" },
    { text: "Infused with Organic Lavender & Citrus Oils", badge: "AROMA" },
    { text: "24-Hour Happiness & Re-Clean Promise", badge: "HAPPINESS" },
    { text: "Background-Checked & Bonded Family Cleaners", badge: "TRUST" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#2C221E] selection:bg-[#fbece7] selection:text-[#c25e3e]">
      {/* 1. Header with Warm Sticky Pill & Mobile Menu */}
      <Navbar3 />

      <main className="flex-grow">
        {/* 2. Hero Section with Simple Terracotta Quote Form (Wider 2xl) */}
        <Hero3 />

        {/* 3. True Full-Width Marquee Ticker (Warm Amber/Stone) */}
        <InfiniteTicker items={tickerItems} variant="amber" speed="normal" />

        {/* 4. Unique Service Showcase Layout 3 (Room-by-Room Card Grid) */}
        <ServiceShowcase3 />

        {/* 5. Unique Bento Layout 3 (Warm Masonry Bento Cards) */}
        <BentoSection3 />

        {/* 6. True Full-Width Edge-to-Edge Section (100vw Sanctuary Panorama) */}
        <FullWidthSanctuary3 />

        {/* 7. Unique Stacking Style 3 (Horizontal Pinned Scroll Gallery) */}
        <section id="philosophy">
          <StackingStyle3 />
        </section>

        {/* 8. Client Reviews Carousel Section (Wider 2xl Container) */}
        <section id="reviews" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <InteractiveCarousel
            items={HOME_3_REVIEWS}
            theme="amber"
            title="Real Words from Grateful Families"
            subtitle="Read how busy parents and pet lovers found their peace with PureHaven Living."
          />
        </section>

        {/* 9. Full-Width Warm Checklist & Guarantee */}
        <section className="py-20 bg-[#fbece7]/50 border-t border-[#f6d7cd]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#c25e3e] text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c25e3e]/20">
              <Smile className="w-7 h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C221E]">
              The 100% Warm Heart Happiness Pledge
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
              If you ever open a drawer, walk across a rug, or inspect a countertop that doesn&apos;t feel impeccably serene, let us know within 24 hours. We will promptly return for a complimentary re-touch.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-stone-800 shadow-sm border border-stone-200">
                ✓ No Cancellation Fees
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-stone-800 shadow-sm border border-stone-200">
                ✓ Same Dedicated Cleaner
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-stone-800 shadow-sm border border-stone-200">
                ✓ All Eco-Safe Supplies Provided
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Full-Width Warm Footer */}
      <Footer3 />
    </div>
  );
}
