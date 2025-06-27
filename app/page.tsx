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
import { TrendingUp, Users, Target, BarChart3, GraduationCap } from "lucide-react"

export default function HomePage() {
  const featuredPoints = [
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Maximize your retail efficiency and profitability",
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Create exceptional shopping experiences that drive loyalty",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop winning strategies for sustainable growth",
    },
    {
      icon: BarChart3,
      title: "Retail Analytics",
      description: "Data-driven insights for informed decision making",
    },
    {
      icon: GraduationCap,
      title: "Staff Training",
      description: "Empower your team with world-class retail skills",
    },
  ]

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Featured Points Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
                Our Expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Comprehensive Retail Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We provide end-to-end retail consulting services to transform your business operations and drive
                sustainable growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {featuredPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
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
