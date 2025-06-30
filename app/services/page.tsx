import { services } from "@/lib/services-data"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  GraduationCap,
  Cog,
  Globe,
  Lightbulb,
  Shield,
  Building,
  Palette,
  Brain,
  Code,
  ShoppingCart,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

// Icon mapping for services
const serviceIcons = {
  "standard-operating-procedures": Cog,
  "store-operations": Building,
  "risk-management": Shield,
  "performance-optimization": TrendingUp,
  "skill-academy": GraduationCap,
  "digital-transformation": Code,
  "branding-identity": Palette,
  "retail-business-intelligence": BarChart3,
  "franchise-development": Globe,
  "customer-experience": Users,
  "market-entry-strategy": Target,
  "international-expansion": Globe,
  "visual-merchandising": Palette,
  "ai-retail-analytics": Brain,
  "retail-software-solutions": Code,
  "ecommerce-integration": ShoppingCart,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center text-white">
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Retail Solutions</h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                Transform your retail business with our expert consulting services. From operations to digital
                transformation, we deliver results that matter.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Expert Solutions for Every Retail Challenge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive suite of services is designed to address every aspect of your retail operations, from
                strategy to execution.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Lightbulb

              return (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="mb-4">
                        <Badge variant="secondary" className="mb-3">
                          {service.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/services/${service.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white group-hover:shadow-lg transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expert solutions can help you achieve your retail goals and drive sustainable
                growth.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-4 text-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
