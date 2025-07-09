"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Counter } from "@/components/animations/counter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award, Globe, Briefcase } from "lucide-react"

export function RetailInsights() {
  const insights = [
    {
      icon: TrendingUp,
      number: 150,
      suffix: "+",
      title: "Successful Projects",
      description: "Retail transformations completed across Southeast Asia",
    },
    {
      icon: Users,
      number: 50,
      suffix: "+",
      title: "Happy Clients",
      description: "Brands trust us with their retail operations",
    },
    {
      icon: Target,
      number: 85,
      suffix: "%",
      title: "Success Rate",
      description: "Average improvement in client performance metrics",
    },
    {
      icon: Award,
      number: 25,
      suffix: "+",
      title: "Years Experience",
      description: "Proven track record in retail consulting",
    },
    {
      icon: Globe,
      number: 12,
      suffix: "+",
      title: "Countries Served",
      description: "International reach across Asia-Pacific region",
    },
    {
      icon: Briefcase,
      number: 200,
      suffix: "+",
      title: "Store Audits",
      description: "Comprehensive retail assessments conducted",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-base font-semibold">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Retail Insights & Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and the transformative impact we deliver for retail
              businesses across the region.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between min-h-[280px]">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <insight.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      <Counter end={insight.number} />
                      <span className="text-green-600">{insight.suffix}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{insight.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-auto">{insight.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
