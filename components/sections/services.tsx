"use client"

import { SERVICES } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Services() {
  return (
    <section id="services" className="py-[var(--space-section)] bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Concrete &amp; Landscaping Services in Centerburg, OH
            </h2>
            <p className="text-text-light text-lg leading-relaxed">
              Most contractors do one or the other. We do both — which means one
              crew, one timeline, and outdoor spaces that actually come together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <div
                  className={`group relative p-6 rounded-lg bg-white border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full ${
                    service.featured
                      ? "ring-2 ring-accent/20 border-accent/30"
                      : ""
                  }`}
                >
                  {service.featured && (
                    <span className="absolute -top-3 right-4 bg-accent text-white text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
