import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { Testimonial } from "@/components/testimonial"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <ServiceHighlights />
      <Testimonial />
      <Newsletter />
    </div>
  )
}
