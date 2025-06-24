import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { Testimonial } from "@/components/testimonial"
import { RetailInsights } from "@/components/retail-insights"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceHighlights />
      <RetailInsights />
      <Testimonial />
      <Newsletter />
    </main>
  )
}
