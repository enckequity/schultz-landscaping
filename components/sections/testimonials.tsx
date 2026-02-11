"use client"

import { Star, Quote } from "lucide-react"
import { TESTIMONIALS, COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[var(--space-section)] bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Customer Reviews
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              What Central Ohio Homeowners Are Saying
            </h2>
            <p className="text-text-light text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say about working with Schultz Landscaping and
              Concrete.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-lg p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-text-light leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-text text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-text-muted text-xs">
                    {testimonial.location} &middot; {testimonial.service}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.slice(3).map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={0.3 + i * 0.1}>
              <div className="bg-white rounded-lg p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-text text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-text-muted text-xs">
                    {testimonial.location} &middot; {testimonial.service}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <a
              href={COMPANY.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-200"
            >
              Read All Reviews on Google
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
