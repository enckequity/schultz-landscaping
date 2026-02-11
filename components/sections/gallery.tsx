"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { IMAGES } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const GALLERY_ITEMS = [
  { src: IMAGES.gallery[0], alt: "Custom concrete driveway installation in Centerburg Ohio" },
  { src: IMAGES.gallery[1], alt: "Professional landscaping with retaining wall in Knox County" },
  { src: IMAGES.gallery[2], alt: "Stamped concrete patio for outdoor living space Mount Vernon" },
  { src: IMAGES.gallery[3], alt: "Residential landscape design and mulch bed installation" },
  { src: IMAGES.gallery[4], alt: "Concrete walkway and front yard landscaping Sunbury Ohio" },
  { src: IMAGES.gallery[5], alt: "Backyard transformation with concrete patio and landscaping" },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-[var(--space-section)] bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
              Recent Projects Across Knox County
            </h2>
            <p className="text-text-light text-lg">
              From concrete driveways to complete landscape overhauls — here are
              some of the outdoor spaces we&apos;ve transformed for Central Ohio
              homeowners.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden w-full cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
