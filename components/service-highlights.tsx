"use client"

import { Store, Users, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"

export function ServiceHighlights() {
  const services = [
    {
      icon: Store,
      title: "Store Operations",
      description: "Optimize your retail operations with proven systems that drive efficiency and profitability.",
      features: ["Inventory Management", "Staff Training", "Performance Analytics"],
      href: "/services/store-operations",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      hoverGradient: "from-green-600 to-green-700",
    },
    {
      icon: Users,
      title: "Franchise Development",
      description: "Scale your business through strategic franchise development and comprehensive support.",
      features: ["Franchise Models", "Partner Training", "Growth Strategy"],
      href: "/services/franchise-development",
      gradient: "from-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-50 to-yellow-100",
      hoverGradient: "from-yellow-600 to-yellow-700",
    },
    {
      icon: GraduationCap,
      title: "Skill Academy",
      description: "Empower your team with cutting-edge retail skills and leadership development programs.",
      features: ["Leadership Training", "Customer Service", "Digital Skills"],
      href: "/services/skill-academy",
      gradient: "from-green-400 to-yellow-400",
      bgGradient: "from-green-50 to-yellow-50",
      hoverGradient: "from-green-500 to-yellow-500",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-green-50/30 to-yellow-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/10 rounded-full blur-xl rotate-slow"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-yellow-100 text-green-700 rounded-full text-sm font-semibold mb-6 pulse-green">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Our Core Services
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-secondary slide-in-up">
              Comprehensive Solutions for
              <span className="text-green-600 block">Retail Excellence</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-in-up">
              Transform your business with our proven methodologies and expert guidance tailored for Southeast Asian
              markets.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Link href={service.href} className="group block">
                <div
                  className={`card-modern p-8 h-full relative overflow-hidden bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 bounce-subtle`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Enhanced Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl rotate-slow`}
                    ></div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full float-animation opacity-60"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-green-400 rounded-full float-delayed opacity-40"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} group-hover:bg-gradient-to-r group-hover:${service.hoverGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg pulse-green`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="heading-tertiary group-hover:text-green-600 transition-colors slide-in-left">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed slide-in-right">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700 slide-in-left"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 pulse-green`}
                          ></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors scale-hover">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
