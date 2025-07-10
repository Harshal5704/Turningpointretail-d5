"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Counter } from "@/components/animations/counter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award, Globe, Zap } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    number: 250,
    suffix: "+",
    label: "Retail Projects Completed",
    description: "Successfully delivered across Southeast Asia",
  },
  {
    icon: Users,
    number: 15,
    suffix: "+",
    label: "Years of Experience",
    description: "Deep expertise in retail operations",
  },
  {
    icon: Target,
    number: 95,
    suffix: "%",
    label: "Client Satisfaction Rate",
    description: "Consistently exceeding expectations",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition for excellence in retail consulting",
  },
  {
    icon: Globe,
    number: 12,
    suffix: "",
    label: "Countries Served",
    description: "International reach and expertise",
  },
  {
    icon: Zap,
    number: 40,
    suffix: "%",
    label: "Average ROI Improvement",
    description: "Measurable results for our clients",
  },
]

export function RetailInsights() {
  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-8 px-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-2 border-blue-200"
            >
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Proven Results That Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. We deliver measurable results that transform retail businesses across
              the region.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <insight.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      <Counter end={insight.number} />
                      <span>{insight.suffix}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{insight.label}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed flex-grow">{insight.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
