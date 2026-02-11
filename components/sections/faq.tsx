"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-start justify-between gap-4 w-full py-5 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="font-heading font-semibold text-text text-base sm:text-lg pr-4 group-hover:text-primary transition-colors duration-200">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-text-light leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-[var(--space-section)] bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-light text-lg">
              Answers to the questions Centerburg and Knox County homeowners ask
              us most.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
