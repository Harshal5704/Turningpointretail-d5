"use client"

import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { RetailInsights } from "@/components/retail-insights"
import { Testimonial } from "@/components/testimonial"
import { Newsletter } from "@/components/newsletter"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current retail operations, challenges, and opportunities",
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Development of customized solutions and strategic roadmap tailored to your business goals",
    },
    {
      number: "03",
      title: "Implementation",
      description: "Systematic execution of strategies with hands-on support and guidance throughout the process",
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring, refinement, and scaling to ensure sustained success and growth",
    },
  ]

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-8 px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-2 border-blue-200"
              >
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Our Proven Process</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A systematic approach that delivers consistent results for your retail business
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceHighlights />
      <RetailInsights />
      <Testimonial />
      <Newsletter />
    </div>
  )
}
