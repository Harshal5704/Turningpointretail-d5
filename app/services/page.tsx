"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-8 px-8 py-4 text-2xl font-bold bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 border-2 border-green-200"
              >
                Professional Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Comprehensive Retail Solutions</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transform your retail business with our proven expertise in operations, strategy, and growth. We deliver
                measurable results through tailored solutions designed for your unique challenges.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                        {service.features.slice(0, 3).map((feature, idx) => (
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-max">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-2xl font-semibold mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">Get in Touch</p>
              <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Let's discuss how our comprehensive retail solutions can help you achieve operational excellence, drive
                growth, and stay ahead of the competition.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                  Start Your Consultation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
