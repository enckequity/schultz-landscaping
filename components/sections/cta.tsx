"use client"

import { Phone, Clock } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Yard Won&apos;t Transform Itself
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a new driveway, a patio you&apos;ve been putting
            off, or a full landscape overhaul — one call gets the whole project
            moving. Free estimates, no pressure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-md text-lg font-semibold transition-all duration-200 hover:bg-white hover:text-text hover:border-white active:scale-[0.98]"
            >
              Email Us
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>
              {COMPANY.hours.weekdays} &middot; {COMPANY.hours.saturday}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
