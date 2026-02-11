import {
  Hammer,
  TreePine,
  Home,
  Layers,
  Fence,
  Flower2,
  Shovel,
  Pickaxe,
  Sun,
  type LucideIcon,
} from "lucide-react"

export const COMPANY = {
  name: "Schultz Landscaping and Concrete LLC",
  shortName: "Schultz Landscaping",
  phone: "(614) 394-3865",
  phoneHref: "tel:+16143943865",
  email: "schultzlandscapingconcrete@gmail.com",
  address: {
    street: "Centerburg",
    city: "Centerburg",
    state: "OH",
    zip: "43011",
    county: "Knox County",
    full: "Centerburg, OH 43011",
  },
  hours: {
    weekdays: "Mon - Fri: 7:00 AM - 6:00 PM",
    saturday: "Sat: 8:00 AM - 4:00 PM",
    sunday: "Sun: Closed",
  },
  rating: 5.0,
  reviewCount: 2,
  googleBusinessUrl:
    "https://www.google.com/maps/place/Schultz+Landscaping+and+Concrete+LLC",
  tagline: "Landscaping & Concrete Done Right",
  description:
    "Professional landscaping and concrete services for homeowners across Knox County and Central Ohio. From driveways to dream yards, we handle it all.",
  geo: {
    lat: 40.3068,
    lng: -82.6996,
  },
} as const

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  slug: string
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    icon: Hammer,
    title: "Concrete Driveways",
    description:
      "Durable, professionally poured driveways built to handle Ohio weather. We prep the base right so your concrete stays crack-free for years.",
    slug: "concrete-driveways",
    featured: true,
  },
  {
    icon: Layers,
    title: "Patios & Slabs",
    description:
      "Custom concrete patios that turn your backyard into real living space. Smooth finishes, stamped patterns, or exposed aggregate — your call.",
    slug: "patios-slabs",
  },
  {
    icon: Home,
    title: "Stamped & Decorative Concrete",
    description:
      "Get the look of natural stone, brick, or slate at a fraction of the cost. Stamped concrete adds serious curb appeal to any property.",
    slug: "stamped-decorative-concrete",
  },
  {
    icon: TreePine,
    title: "Landscape Design & Installation",
    description:
      "Complete landscape transformations — from grading and planting to mulch beds and ornamental trees. We design yards people actually use.",
    slug: "landscape-design",
    featured: true,
  },
  {
    icon: Fence,
    title: "Retaining Walls",
    description:
      "Structural and decorative retaining walls that solve drainage problems and create usable terraced space on sloped lots.",
    slug: "retaining-walls",
  },
  {
    icon: Flower2,
    title: "Mulching & Bed Installation",
    description:
      "Fresh mulch, clean edges, and new planting beds that make the whole property look maintained. Quick turnaround, big visual impact.",
    slug: "mulching-bed-installation",
  },
  {
    icon: Pickaxe,
    title: "Hardscaping",
    description:
      "Pavers, natural stone, and brick work for walkways, fire pits, and outdoor kitchens. Built to last through freeze-thaw cycles.",
    slug: "hardscaping",
  },
  {
    icon: Shovel,
    title: "Grading & Sodding",
    description:
      "Proper grading fixes drainage issues and gives you a level lawn. We finish with fresh sod for an instant green yard.",
    slug: "grading-sodding",
  },
  {
    icon: Sun,
    title: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups to keep your property sharp year-round. Leaf removal, bed prep, trimming, and debris hauling.",
    slug: "seasonal-cleanups",
  },
]


export const SERVICE_AREAS = [
  { name: "Centerburg", description: "Our home base in the heart of Ohio. Serving our neighbors with landscaping and concrete work they can count on." },
  { name: "Mount Vernon", description: "Knox County's largest town gets the same personal attention we give every job. Driveways, patios, full landscaping." },
  { name: "Sunbury", description: "Serving Sunbury and southern Delaware County with professional outdoor transformations." },
  { name: "Johnstown", description: "Reliable landscaping and concrete services for Johnstown homeowners and the surrounding Licking County area." },
  { name: "Westerville", description: "Bringing small-town work ethic to Westerville's growing neighborhoods. Quality concrete and landscaping." },
  { name: "Delaware", description: "Covering Delaware and northern Franklin County with expert hardscaping, concrete, and landscape services." },
  { name: "Galena", description: "Providing Galena homeowners with custom concrete work and landscape installations." },
  { name: "Marengo", description: "Your local contractor for concrete driveways, patios, and landscaping in the Marengo area." },
  { name: "Fredericktown", description: "Trusted by Fredericktown families for quality outdoor work at honest prices." },
  { name: "Howard", description: "Serving Howard and eastern Knox County with dependable landscaping and concrete services." },
  { name: "Gambier", description: "Professional landscape and concrete work for Gambier residents and the Kenyon College area." },
  { name: "Danville", description: "Quality hardscaping and yard transformations for Danville and the surrounding community." },
  { name: "Utica", description: "Covering Utica and western Licking County with concrete and landscaping expertise." },
  { name: "Granville", description: "Premium landscaping and concrete services for Granville's historic neighborhood homes." },
  { name: "Pataskala", description: "Reliable outdoor contractor services for Pataskala homeowners." },
  { name: "New Albany", description: "Expert concrete and landscape installations for New Albany and eastern Franklin County." },
  { name: "Powell", description: "Serving Powell families with quality concrete driveways, patios, and full landscape design." },
  { name: "Lewis Center", description: "Professional landscaping and concrete work throughout the Lewis Center area." },
]

export interface FAQ {
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  {
    question: "How much does a concrete driveway cost in Centerburg, OH?",
    answer:
      "Concrete driveway costs vary based on size, thickness, and finish. A standard two-car driveway in the Centerburg area typically runs between $4,000 and $8,000. We provide free on-site estimates so you get an accurate price for your specific project — no guessing, no surprises.",
  },
  {
    question: "Do you do stamped or decorative concrete?",
    answer:
      "Yes. Stamped concrete is one of our most popular services. We can replicate the look of natural stone, brick, slate, or wood plank patterns. We carry a range of colors and stamp patterns, and we're happy to show you samples during your estimate.",
  },
  {
    question: "How long does a new patio installation take?",
    answer:
      "Most concrete patios take 2 to 4 days from excavation to finished pour, depending on the size and complexity. Stamped or decorative work adds a day. You can typically start using your new patio within 5 to 7 days after the pour.",
  },
  {
    question: "Are you licensed and insured in Ohio?",
    answer:
      "Absolutely. Schultz Landscaping and Concrete LLC is fully licensed and insured in the state of Ohio. We carry general liability and workers' compensation coverage on every job site.",
  },
  {
    question: "What areas do you serve near Centerburg and Mount Vernon?",
    answer:
      "We serve a wide area across Knox, Delaware, and Licking Counties. That includes Centerburg, Mount Vernon, Sunbury, Johnstown, Westerville, Delaware, Galena, Marengo, Fredericktown, and many surrounding towns. If you're within about 30 miles of Centerburg, give us a call.",
  },
  {
    question:
      "Can you handle both the landscaping and concrete for my backyard project?",
    answer:
      "That's actually our specialty. Most contractors do one or the other, but we handle both. That means one crew, one schedule, and one point of contact for your entire outdoor project — whether it's a patio with surrounding landscape beds or a full backyard overhaul.",
  },
  {
    question: "What's the best time of year to pour concrete in Ohio?",
    answer:
      "The ideal concrete pouring season in Central Ohio runs from late April through October, when temperatures stay consistently above 50°F. Spring and fall are the sweet spot — not too hot, not too cold. We book up fast in those months, so planning ahead is smart.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, every estimate is free with no obligation. We come to your property, talk through what you want, take measurements, and give you a written quote — usually within a day or two. Call us at (614) 394-3865 to schedule yours.",
  },
]

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
] as const

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
} as const

export const STATS = [
  { value: 5.0, label: "Google Rating", suffix: "★", isDecimal: true },
  { value: 9, label: "Services Offered", suffix: "", isDecimal: false },
  { value: 18, label: "Service Areas", suffix: "+", isDecimal: false },
  { value: 3, label: "Counties Served", suffix: "", isDecimal: false },
]
