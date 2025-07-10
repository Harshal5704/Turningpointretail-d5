"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

const highlightedServices = [
  {
    title: "Store Operations Excellence",
    description:
      "Optimize your daily operations with proven systems and processes that drive efficiency and profitability.",
    image: "/images/services/store-operations.jpg",
    features: ["Standard Operating Procedures", "Staff Training & Development", "Performance Monitoring Systems"],
    slug: "store-operations",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your retail business with cutting-edge technology solutions and digital strategies.",
    image: "/images/services/digital-transformation.jpg",
    features: ["E-commerce Integration", "POS System Optimization", "Digital Marketing Strategies"],
    slug: "digital-transformation",
  },
  {
    title: "Customer Experience Design",
    description: "Create exceptional shopping experiences that build customer loyalty and drive repeat business.",
    image: "/images/services/customer-experience.jpg",
    features: ["Journey Mapping", "Touchpoint Optimization", "Loyalty Program Development"],
    slug: "customer-experience",
  },
  {
    title: "Performance Optimization",
    description: "Maximize your retail performance through data-driven insights and strategic improvements.",
    image: "/images/services/performance-optimization.jpg",
    features: ["KPI Development", "Analytics Implementation", "Continuous Improvement"],
    slug: "performance-optimization",
  },
  {
    title: "Franchise Development",
    description: "Scale your successful retail concept through strategic franchise development and support.",
    image: "/images/services/franchise-development.jpg",
    features: ["Franchise Model Development", "Partner Selection & Training", "Ongoing Support Systems"],
    slug: "franchise-development",
  },
  {
    title: "Market Entry Strategy",
    description: "Successfully enter new markets with comprehensive research and strategic planning.",
    image: "/images/services/market-entry-strategy.jpg",
    features: ["Market Research & Analysis", "Competitive Intelligence", "Entry Strategy Development"],
    slug: "market-entry-strategy",
  },
]

export function ServiceHighlights() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-8 px-8 py-4 text-xl font-bold bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 border-2 border-green-200"
            >
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Comprehensive Retail Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end retail consulting services to transform your business operations and drive
              sustainable growth.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlightedServices.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
