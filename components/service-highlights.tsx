"use client"

import { Store, Users, GraduationCap, ArrowRight } from "lucide-react"
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
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      title: "Franchise Development",
      description: "Scale your business through strategic franchise development and comprehensive support.",
      features: ["Franchise Models", "Partner Training", "Growth Strategy"],
      href: "/services/franchise-development",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: GraduationCap,
      title: "Skill Academy",
      description: "Empower your team with cutting-edge retail skills and leadership development programs.",
      features: ["Leadership Training", "Customer Service", "Digital Skills"],
      href: "/services/skill-academy",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Our Core Services
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-secondary">
              Comprehensive Solutions for
              <span className="text-accent block">Retail Excellence</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  className={`card-modern p-8 h-full relative overflow-hidden bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}></div>
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="heading-tertiary group-hover:text-blue-600 transition-colors">{service.title}</h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
