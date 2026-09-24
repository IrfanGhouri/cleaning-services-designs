import Image from "next/image";
import { Star, CheckCircle, Building2 } from "lucide-react";
import { HOME_2_REVIEWS } from "@/data/reviewsData";

export default function ReviewGrid2() {
  const reviews = [
    ...HOME_2_REVIEWS,
    {
      id: "r2-3",
      author: "Robert Sterling",
      role: "Senior Asset Director",
      companyOrLocation: "Metropolitan Plaza (85,000 sq ft)",
      rating: 5,
      serviceUsed: "Multi-Family Turnover & Janitorial",
      quote:
        "Apex cut our turnover lead time in half. Flawless communication, bonded staff, and digital sign-off reports our regional partners rely on.",
      verified: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-800 relative z-20 text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
          Enterprise Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          Client Case Reviews
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Trusted by facility operators and property directors overseeing millions of commercial square feet.
        </p>
      </div>

      {/* 3-Column Enterprise Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-slate-400 ml-2">
                  5.0 Rating
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">
                      {item.author}
                    </span>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-300">
                {item.companyOrLocation.split("(")[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
