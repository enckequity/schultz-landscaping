"use client"

import { motion } from "framer-motion"
import { Phone, ArrowDown, Star } from "lucide-react"
import Image from "next/image"
import { COMPANY, IMAGES } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Beautiful residential property with professional landscaping and concrete work in Centerburg Ohio"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                5.0 Rated on Google
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Beautiful Yards &{" "}
            <span className="text-accent-light">Rock-Solid Concrete</span>
            <br />
            <span className="text-white/90 text-3xl sm:text-4xl lg:text-[2.75rem]">
              for Central Ohio Homes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
          >
            Centerburg&apos;s trusted landscaping and concrete crew. Driveways,
            patios, retaining walls, and full landscape transformations — done
            fast, done right, done to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white rounded-md text-base font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Phone className="w-5 h-5" />
              Call for Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/30 text-white rounded-md text-base font-semibold transition-all duration-200 hover:bg-white hover:text-text hover:border-white active:scale-[0.98]"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex items-center gap-6 text-sm text-white/60"
          >
            <span>Landscaping & Concrete</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Knox County & Beyond</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Free Estimates</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#services"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
          aria-label="Scroll to services"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
