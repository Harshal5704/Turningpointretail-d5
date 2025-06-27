import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedButton } from "@/components/animations/animated-button"
import { services } from "@/lib/services-data"
import { ArrowRight, CheckCircle, Star, Award, Users, TrendingUp, Zap, Target, Globe, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Services | Turning Point Retail Solutions",
  description: "Comprehensive retail consulting services to transform your business and drive sustainable growth.",
}

export default function ServicesPage() {
  const serviceIcons = [
    CheckCircle, // Standard Operating Procedures
    Star, // Store Operations
    Shield, // Risk Management
    TrendingUp, // Performance Optimization
    Users, // Skill Academy
    Zap, // Digital Transformation
    Award, // Branding & Identity
    Target, // Retail Business Intelligence
    Globe, // Franchise Development
    Users, // Customer Experience
    Target, // Market Entry Strategy
    Globe, // International Expansion
    Star, // Visual Merchandising
    Zap, // AI Retail Analytics
    CheckCircle, // Retail Software Solutions
    TrendingUp, // E-commerce Integration
  ]

  return (
    <div className="animate-fade-in" style={{ paddingTop: "var(--header-height)" }}>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max text-center">
          <FadeIn>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6 inline-block">
              Professional Services
            </span>
          </FadeIn>

          <SlideUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
              Transform Your Retail Business
            </h1>
          </SlideUp>

          <FadeIn delay={0.4}>
            <p className="text-xl text-green-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive consulting services designed to optimize operations, enhance customer experience, and drive
              sustainable growth in the competitive retail landscape.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/contact"
                className="bg-green-600 text-green-100 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
              >
                Get Free Consultation
              </AnimatedButton>
              <AnimatedButton
                href="#services"
                variant="secondary"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-green-100 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Explore Services
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Comprehensive Services</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                From strategy to implementation, we provide end-to-end solutions for retail excellence
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[index] || CheckCircle
              return (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-green-300 group">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), calc(33.333vw - 4rem)"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>

                      {/* Service Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-green-100" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-green-600 mb-4 leading-relaxed">{service.description}</p>

                      {/* Key Features Preview */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-1 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Turning Point?</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                We bring proven expertise and innovative solutions to drive your retail success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description:
                    "Over a decade of experience helping retail businesses achieve sustainable growth and operational excellence.",
                },
                {
                  icon: Users,
                  title: "Dedicated Team",
                  description:
                    "Expert consultants with deep industry knowledge and hands-on experience across all retail sectors.",
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Results",
                  description:
                    "Data-driven approach that delivers quantifiable improvements in performance and profitability.",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-green-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <item.icon className="w-8 h-8 text-green-100" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">{item.title}</h3>
                    <p className="text-green-600 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can drive growth and success for your retail business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/contact"
                className="bg-green-100 text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
              >
                Schedule Free Consultation
              </AnimatedButton>
              <AnimatedButton
                href="/about"
                variant="secondary"
                className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Learn About Us
              </AnimatedButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
