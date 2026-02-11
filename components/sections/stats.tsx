"use client"

import { useEffect, useRef, useState } from "react"
import { STATS } from "@/lib/constants"

function useCountUp(end: number, duration: number = 2000, isDecimal: boolean = false) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            if (isDecimal) {
              setCount(
                Math.round(progress * end * 10) / 10
              )
            } else {
              setCount(Math.floor(progress * end))
            }
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, isDecimal])

  return { count, ref }
}

function StatItem({
  value,
  label,
  suffix,
  isDecimal,
}: {
  value: number
  label: string
  suffix: string
  isDecimal: boolean
}) {
  const { count, ref } = useCountUp(value, 2000, isDecimal)

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2">
        {isDecimal ? count.toFixed(1) : count}
        {suffix}
      </div>
      <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isDecimal={stat.isDecimal}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
