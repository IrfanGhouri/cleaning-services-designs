import Navbar1 from "@/components/home1/Navbar1";
import Hero1 from "@/components/home1/Hero1";
import ServiceShowcase1 from "@/components/home1/ServiceShowcase1";
import BentoSection1 from "@/components/home1/BentoSection1";
import FullWidthSplit1 from "@/components/home1/FullWidthSplit1";
import StackingStyle1 from "@/components/home1/StackingStyle1";
import Footer1 from "@/components/home1/Footer1";
import InfiniteTicker from "@/components/common/InfiniteTicker";
import InteractiveCarousel from "@/components/common/InteractiveCarousel";
import { HOME_1_REVIEWS } from "@/data/reviewsData";
import { Check, HelpCircle } from "lucide-react";

export default function Home1() {
  const tickerItems = [
    { text: "100% Plant-Derived & Non-Toxic Formulas", badge: "ECO-PURE" },
    { text: "Over 3,200 Five-Star Cleans Completed", badge: "TRUSTED" },
    { text: "Same-Day & Flexible Scheduling Available", badge: "CONVENIENT" },
    { text: "$2 Million Bonded & Fully Insured", badge: "PROTECTED" },
    { text: "100% Satisfaction Re-Clean Guarantee", badge: "GUARANTEED" },
    { text: "Child & Pet Safe Cleaning Products", badge: "SAFE" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header with Sticky & Animated Mobile Drawer */}
      <Navbar1 />

      <main className="flex-grow">
        {/* 2. Hero Section with Simple Quote Form (Wider 2xl) */}
        <Hero1 />

        {/* 3. True Full-Width Marquee Ticker (Edge-to-Edge) */}
        <InfiniteTicker items={tickerItems} variant="sage" speed="normal" />

        {/* 4. Unique Service Showcase Layout 1 (Wider 2xl) */}
        <ServiceShowcase1 />

        {/* 5. Unique Bento Layout 1 (Expansive Width) */}
        <BentoSection1 />

        {/* 6. True Full-Width Edge-to-Edge Section (100vw Split Screen) */}
        <FullWidthSplit1 />

        {/* 7. Unique Stacking Cards Style 1 (Deck Stacking with Scale Scrub) */}
        <section id="methodology" className="bg-slate-50/70 border-b border-slate-200/70">
          <StackingStyle1 />
        </section>

        {/* 8. Client Reviews Carousel Section (Wider Container) */}
        <section id="reviews" className="py-20 sm:py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <InteractiveCarousel
            items={HOME_1_REVIEWS}
            theme="emerald"
            title="Trusted by Over 3,200 Happy Clients"
            subtitle="Verified reviews from residential homeowners and commercial managers."
          />
        </section>

        {/* 9. Clean FAQ Section */}
        <section id="faq" className="py-20 bg-emerald-50/40 border-t border-emerald-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 px-3 py-1 rounded-full bg-emerald-100 inline-block mb-3">
                Helpful Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: "Are your cleaning products safe for pets and children?",
                  a: "Yes. We exclusively use non-toxic, plant-derived solutions that contain zero harsh chemicals, artificial perfumes, or toxic residues.",
                },
                {
                  q: "What is your 24-Hour Satisfaction Guarantee?",
                  a: "If any area isn't cleaned to your complete satisfaction, simply contact us within 24 hours and we will promptly send a team to re-clean the area free of charge.",
                },
                {
                  q: "Do I need to provide any supplies or equipment?",
                  a: "No, our uniformed professionals arrive fully equipped with commercial-grade vacuums, microfibers, and non-toxic supplies.",
                },
                {
                  q: "How long does carpet cleaning take to dry?",
                  a: "Thanks to our industrial hot water extraction systems, most carpets dry completely within 2 to 4 hours.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm"
                >
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center justify-between mb-2">
                    <span>{faq.q}</span>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 10. Full-Width Footer */}
      <Footer1 />
    </div>
  );
}
