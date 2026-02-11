import type { Metadata } from "next"
import { Bitter, Nunito_Sans } from "next/font/google"
import { COMPANY } from "@/lib/constants"
import Script from "next/script"
import "./globals.css"

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title:
    "Landscaping & Concrete Services in Centerburg, OH | Schultz Landscaping and Concrete",
  description:
    "Professional landscaping and concrete services in Centerburg, OH and Knox County. 5-star rated. Driveways, patios, retaining walls, landscape design & more. Call (614) 394-3865 for a free estimate.",
  keywords: [
    "landscaping Centerburg OH",
    "concrete contractor Knox County Ohio",
    "concrete driveway Centerburg",
    "landscaping Mount Vernon Ohio",
    "patio installation Knox County",
    "retaining wall contractor Ohio",
    "Schultz Landscaping and Concrete",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title:
      "Landscaping & Concrete Services in Centerburg, OH | Schultz Landscaping",
    description:
      "Professional landscaping and concrete services in Centerburg, OH and Knox County. 5-star rated. Driveways, patios, retaining walls & more. Free estimates.",
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Landscaping & Concrete Services in Centerburg, OH | Schultz Landscaping",
    description:
      "Professional landscaping and concrete services in Centerburg, OH. 5-star rated. Call (614) 394-3865.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
}

function getJsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating,
      reviewCount: COMPANY.reviewCount,
      bestRating: 5,
    },
    areaServed: [
      "Centerburg, OH",
      "Mount Vernon, OH",
      "Sunbury, OH",
      "Johnstown, OH",
      "Westerville, OH",
      "Delaware, OH",
      "Knox County, OH",
      "Delaware County, OH",
      "Licking County, OH",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a concrete driveway cost in Centerburg, OH?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard two-car driveway in the Centerburg area typically runs between $4,000 and $8,000. We provide free on-site estimates.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do stamped or decorative concrete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Stamped concrete is one of our most popular services. We replicate natural stone, brick, slate, or wood plank patterns.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve near Centerburg and Mount Vernon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Knox, Delaware, and Licking Counties including Centerburg, Mount Vernon, Sunbury, Johnstown, Westerville, Delaware, Galena, Marengo, and Fredericktown.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every estimate is free with no obligation. Call us at (614) 394-3865 to schedule yours.",
        },
      },
    ],
  }

  return [businessSchema, faqSchema]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemas = getJsonLd()

  return (
    <html lang="en" className={`${bitter.variable} ${nunitoSans.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <Script
            key={i}
            id={`json-ld-${i}`}
            type="application/ld+json"
            strategy="beforeInteractive"
          >
            {JSON.stringify(schema)}
          </Script>
        ))}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
