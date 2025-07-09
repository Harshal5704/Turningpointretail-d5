"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Counter } from "@/components/animations/counter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Target } from "lucide-react"

export function RetailInsights() {
  const insights = [
    {
      icon: TrendingUp,
      number: 150,
      suffix: "+",
      title: "Projects Completed",
      description: "Successfully delivered retail transformation projects across Southeast Asia",
    },
    {
      icon: Users,
      number: 25,
      suffix: "+",
      title: "Years Experience",
      description: "Decades of proven expertise in retail operations and business development",
    },
    {
      icon: Award,
      number: 95,
      suffix: "%",
      title: "Client Success Rate",
      description: "Consistently delivering measurable results and exceeding client expectations",
    },
    {
      icon: Target,
      number: 40,
      suffix: "+",
      title: "Retail Brands",
      description: "Trusted by leading retail brands across luxury, fashion, and lifestyle sectors",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <FadeIn>
            <Badge
              variant="secondary"
              className="text-base font-medium px-6 py-3 mb-6 bg-green-100 text-green-800 border border-green-200"
            >
              Our Impact
            </Badge>
          </FadeIn>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 leading-tight">
              Retail Insights & Results
            </h2>
          </ScrollReveal>
          <FadeIn delay={0.4}>
            <p className="text-lg text-green-600 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. Here's how we've helped retail businesses achieve remarkable growth
              and operational excellence.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full min-h-[280px] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white">
                <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <insight.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-4">
                      <Counter
                        end={insight.number}
                        suffix={insight.suffix}
                        className="text-4xl font-bold text-green-800 group-hover:text-green-700 transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-700 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                  <p className="text-green-600 leading-relaxed mt-auto">{insight.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
