"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { COMPANY, NAV_LINKS } from "@/lib/constants"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-primary-dark/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div
                className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors duration-300 ${
                  scrolled ? "bg-primary" : "bg-accent"
                }`}
              >
                <span className="text-white font-heading font-bold text-lg leading-none">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading font-bold text-base leading-tight transition-colors duration-300 ${
                    scrolled ? "text-text" : "text-white"
                  }`}
                >
                  Schultz
                </span>
                <span
                  className={`text-[10px] font-body uppercase tracking-widest leading-tight transition-colors duration-300 ${
                    scrolled ? "text-text-muted" : "text-white/70"
                  }`}
                >
                  Landscaping & Concrete
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-text-light hover:text-primary after:bg-primary"
                      : "text-white/90 hover:text-white after:bg-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-primary hover:text-primary-dark"
                    : "text-white hover:text-accent-light"
                }`}
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>

              <a
                href={COMPANY.phoneHref}
                className={`hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] ${
                  scrolled
                    ? "bg-accent text-white hover:shadow-accent/25"
                    : "bg-accent text-white hover:shadow-accent/25"
                }`}
              >
                Free Estimate
              </a>

              <a
                href={COMPANY.phoneHref}
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md bg-accent text-white"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 ${
                  scrolled
                    ? "text-text hover:bg-bg-alt"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    className="text-2xl font-heading font-bold text-text py-3 border-b border-border hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-white rounded-md text-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
                <p className="text-center text-sm text-text-muted">
                  {COMPANY.hours.weekdays}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
