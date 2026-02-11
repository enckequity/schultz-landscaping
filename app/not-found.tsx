import Link from "next/link"
import { COMPANY } from "@/lib/constants"
import { Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary mx-auto mb-6">
          <span className="text-white font-heading font-bold text-3xl leading-none">
            S
          </span>
        </div>

        <h1 className="font-heading text-6xl font-bold text-text mb-4">404</h1>
        <p className="text-text-light text-lg mb-2">
          This page doesn&apos;t exist — but we do.
        </p>
        <p className="text-text-muted mb-8">
          Looking for landscaping or concrete work in Central Ohio? We can help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
          >
            Back to Home
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md font-semibold transition-all duration-200 hover:bg-primary hover:text-white active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
