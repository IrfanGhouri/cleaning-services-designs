export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: "residential" | "commercial" | "specialty";
  description: string;
  details: string;
  highlights: string[];
  image: string;
  priceStarting: string;
  turnaroundTime: string;
  iconName: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "carpet-cleaning",
    name: "Carpet & Upholstery Cleaning",
    shortTag: "Hot Water Extraction",
    category: "specialty",
    description:
      "Deep fiber steam cleaning using industrial-grade hot water extraction that eliminates 99.2% of ground-in dirt, pet allergens, and stubborn stains.",
    details:
      "We utilize dual-cylinder rotary extraction and eco-safe enzymatic pre-sprays. Safe for delicate wool, synthetic fibers, and oriental rugs without leaving stiff chemical residue.",
    highlights: [
      "220°F Thermal steam extraction",
      "Pet odor & deep stain removal guarantee",
      "Rapid dry time in 2 to 4 hours",
      "Zero toxic surfactants or soapy residues",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$129",
    turnaroundTime: "2-3 hrs",
    iconName: "Sparkles",
  },
  {
    id: "office-cleaning",
    name: "Corporate & Office Cleaning",
    shortTag: "Turnkey Workplace Care",
    category: "commercial",
    description:
      "Scheduled night or weekend commercial cleaning for corporate headquarters, open-plan workspaces, conference suites, and executive suites.",
    details:
      "Comprehensive workplace sanitation including desk sanitization, boardroom glass detailing, kitchen appliance degreasing, waste diversion, and high-filtration HEPA vacuuming.",
    highlights: [
      "Customizable night or day scheduling",
      "Uniformed, bonded, and background-vetted crews",
      "Full supply restocking & waste separation",
      "Dedicated account manager & digital inspection reports",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$249/mo",
    turnaroundTime: "Scheduled recurring",
    iconName: "Building2",
  },
  {
    id: "home-cleaning",
    name: "Standard Home Cleaning",
    shortTag: "Recurring Domestic Sanctuary",
    category: "residential",
    description:
      "Reliable recurring home cleaning customized for apartments, townhomes, and single-family houses. Keeping your living sanctuary impeccably fresh.",
    details:
      "Weekly, bi-weekly, or monthly visits covering kitchens, bathrooms, sleeping quarters, and common living areas with pet-safe plant-derived formulations.",
    highlights: [
      "Same dedicated cleaning team every visit",
      "Hospital-grade microfiber color-coded cross-contamination prevention",
      "Pet-friendly and child-safe botanical solutions",
      "100% satisfaction re-clean guarantee within 24 hours",
    ],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$149",
    turnaroundTime: "2-4 hrs",
    iconName: "Home",
  },
  {
    id: "day-porter-service",
    name: "On-Site Day Porter Service",
    shortTag: "Continuous Facility Presence",
    category: "commercial",
    description:
      "Full-time or part-time uniformed on-site porters who maintain real-time cleanliness, lobby radiance, restroom hygiene, and spill response throughout the workday.",
    details:
      "Ideal for commercial towers, medical centers, shopping plazas, and university campuses requiring immediate touchpoint sanitization, trash compaction, and visitor greeting standards.",
    highlights: [
      "Live touchpoint sanitization between meetings",
      "Restroom replenishment and audit logs",
      "Immediate wet spill response and hazard containment",
      "Courteous, client-facing hospitality training",
    ],
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$28/hr",
    turnaroundTime: "4 - 8 hr shifts",
    iconName: "Shield",
  },
  {
    id: "deep-cleaning",
    name: "Detailed Deep Clean Intensive",
    shortTag: "Top-to-Bottom Reset",
    category: "residential",
    description:
      "A meticulous, intensive scrubbing protocol covering interior appliances, baseboards, grout remediation, door frames, light fixtures, and neglected buildup.",
    details:
      "We roll back furniture, detail inside cabinets, descale lime and calcium deposits in wet rooms, and scrub high-touch greasy kitchen range hoods.",
    highlights: [
      "Baseboards, crown molding, and door casings detailed by hand",
      "Interior oven and refrigerator intensive degrease",
      "Grout scrubbing & tile limescale dissolution",
      "Behind-and-under heavy appliance vacuuming",
    ],
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$289",
    turnaroundTime: "4-6 hrs",
    iconName: "Layers",
  },
  {
    id: "disinfection-services",
    name: "Electrostatic Disinfection & Sanitization",
    shortTag: "Hospital-Grade Pathogen Defense",
    category: "specialty",
    description:
      "EPA List N certified antimicrobial misting and electrostatic spray technology that envelopes 360-degrees of surfaces, neutralizing 99.999% of bacteria and viruses.",
    details:
      "Designed for clinics, gyms, schools, daycare centers, and workplaces recovering from contamination outbreaks. Odorless, non-corrosive, and zero dry dwell time penalty.",
    highlights: [
      "EPA List N certified virucidal & bactericidal disinfectants",
      "Electrostatic wraparound technology reaching shadows and undersides",
      "ATP bioluminescence swab testing for measurable proof of sterilization",
      "Rapid re-entry protocol in as little as 30 minutes",
    ],
    image:
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$199",
    turnaroundTime: "1-2 hrs",
    iconName: "ShieldCheck",
  },
  {
    id: "multi-family-unit-cleaning",
    name: "Multi-Family Unit & Apartment Turnover",
    shortTag: "Fast Property Turnaround",
    category: "commercial",
    description:
      "High-velocity, property manager approved turnover cleaning for multi-family residential communities, student complexes, and luxury high-rises.",
    details:
      "Standardized 85-point inspection punchlist guaranteed to deliver 100% deposit returns for departing tenants and white-glove move-in readiness for new residents.",
    highlights: [
      "Guaranteed 24-48 hour turnover turn times",
      "Direct portal billing & photo-documented sign-offs for property managers",
      "Complete appliance, patio, closet, and blind detailing",
      "Bulk volume pricing available for 10+ unit buildings",
    ],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "$179/unit",
    turnaroundTime: "24-48 hr turnover",
    iconName: "Building",
  },
];
