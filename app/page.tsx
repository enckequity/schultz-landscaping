import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { ServiceAreas } from "@/components/sections/service-areas"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Gallery />
        <Testimonials />
        <CTA />
        <FAQ />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  )
}
