"use client"

import { Store, GraduationCap, Star, BarChart3, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"

const services = [
  {
    icon: Store,
    title: "Store Operations",
    description: "Streamline your retail operations with proven systems and processes.",
    href: "/services/store-operations",
    color: "from-green-600 to-green-700",
  },
  {
    icon: Star,
    title: "Customer Experience",
    description: "Create memorable experiences that drive loyalty and repeat business.",
    href: "/services/customer-experience",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Data-driven insights for informed decision making and growth.",
    href: "/services/retail-business-intelligence",
    color: "from-green-700 to-green-800",
  },
  {
    icon: TrendingUp,
    title: "Retail Analytics",
    description: "Advanced analytics solutions to optimize performance and profitability.",
    href: "/services/ai-retail-analytics",
    color: "from-yellow-600 to-yellow-700",
  },
  {
    icon: GraduationCap,
    title: "Staff Training",
    description: "Comprehensive training programs for retail excellence.",
    href: "/services/skill-academy",
    color: "from-green-800 to-green-900",
  },
]

export function ServiceHighlights() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container-max relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
              Our Services
            </Badge>
            <h2 className="heading-secondary mb-6">Comprehensive Retail Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your retail business with our proven expertise across operations, customer experience,
              analytics, and team development.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="group block">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
