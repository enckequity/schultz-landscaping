"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { COMPANY, IMAGES } from "@/lib/constants"
import { Shield, Users, Zap, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-[var(--space-section)] bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={IMAGES.about}
                  alt="Professional landscaping and concrete work on a residential property in Knox County Ohio"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-lg shadow-lg hidden sm:block">
                <div className="text-3xl font-heading font-bold">5.0★</div>
                <div className="text-sm text-white/80">Google Rating</div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                About Schultz
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-6">
                Why Knox County Homeowners Trust&nbsp;Schultz
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-text-light text-lg leading-relaxed mb-4">
                Schultz Landscaping and Concrete LLC was built on a simple
                idea: homeowners in Centerburg and the surrounding area
                deserve a contractor who shows up, does quality work, and
                treats the job like it&apos;s their own property.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <p className="text-text-light leading-relaxed mb-8">
                Based right here in Knox County, we handle both sides of
                outdoor work — landscaping and concrete — so you don&apos;t
                need to coordinate between two different crews. That means
                your driveway, patio, retaining wall, and yard all get done
                on one schedule, by one team that knows how the pieces fit
                together. From small mulch jobs to full backyard overhauls
                across Mount Vernon, Sunbury, and Westerville, we bring the
                same attention and professionalism to every project.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    desc: "Full coverage on every job",
                  },
                  {
                    icon: Zap,
                    title: "Fast Turnaround",
                    desc: "On schedule, every time",
                  },
                  {
                    icon: Users,
                    title: "Local Owner-Operated",
                    desc: "Centerburg born and based",
                  },
                  {
                    icon: Award,
                    title: "5-Star Rated",
                    desc: "Perfect Google score",
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-text">
                          {item.title}
                        </div>
                        <div className="text-xs text-text-muted">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
