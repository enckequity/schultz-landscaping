import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants"

export function Footer() {
  const topAreas = SERVICE_AREAS.slice(0, 10)

  return (
    <footer id="contact" className="bg-bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-accent">
                  <span className="text-white font-heading font-bold text-lg leading-none">
                    S
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-base leading-tight text-white">
                    Schultz
                  </span>
                  <span className="text-[10px] font-body uppercase tracking-widest leading-tight text-white/60">
                    Landscaping & Concrete
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Professional landscaping and concrete services for homeowners
                across Knox County and Central Ohio. From driveways to dream
                yards, we handle it all.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white/70 hover:bg-accent hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white/70 hover:bg-accent hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {SERVICES.slice(0, 7).map((service) => (
                  <li key={service.slug}>
                    <a
                      href="#services"
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Service Areas
              </h3>
              <ul className="space-y-2.5">
                {topAreas.map((area) => (
                  <li key={area.name}>
                    <a
                      href="#service-areas"
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {area.name}, OH
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-start gap-3 text-sm text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-sm text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <a
                    href={COMPANY.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {COMPANY.address.full}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p>{COMPANY.hours.weekdays}</p>
                    <p>{COMPANY.hours.saturday}</p>
                    <p>{COMPANY.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/50">
            Serving Knox, Delaware &amp; Licking Counties
          </p>
        </div>
      </div>
    </footer>
  )
}
