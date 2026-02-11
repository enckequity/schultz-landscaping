"use client"

import { MapPin } from "lucide-react"
import { SERVICE_AREAS, COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-[var(--space-section)] bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Where We Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Landscaping &amp; Concrete Services Across Central Ohio
            </h2>
            <p className="text-text-light text-lg">
              Based in Centerburg, we serve homeowners across Knox, Delaware, and
              Licking Counties. If you&apos;re within 30 miles, we&apos;re your
              crew.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_AREAS.map((area, i) => (
            <ScrollReveal key={area.name} delay={i * 0.04}>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border hover:border-primary/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-text text-sm">
                    {area.name}, OH
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mt-1">
                    {area.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-text-light mb-4">
              Don&apos;t see your town listed? We likely serve your area too.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-200"
            >
              Call {COMPANY.phone} to check
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
