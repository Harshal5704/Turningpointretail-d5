import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { AnimatedButton } from "@/components/animations/animated-button"
import Image from "next/image"

export const metadata = {
  title: "Services | Turning Point Retail Solutions",
  description:
    "Comprehensive retail consulting services including store operations, franchise development, training, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
                Comprehensive <span className="text-green-600">Retail Solutions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-green-600 max-w-4xl mx-auto leading-relaxed">
                From store operations to digital transformation, we provide end-to-end retail consulting services
                tailored to the Southeast Asian market with proven results and measurable impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid with Internet-Sourced Images */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white rounded-3xl shadow-lg border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer group overflow-hidden">
                    {/* Service Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.title} - Professional retail consulting service`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 767px) calc(100vw - 2rem), (min-width: 768px) and (max-width: 1023px) calc(50vw - 3rem), (min-width: 1024px) calc(33.3vw - 4rem)"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>

                      {/* Service Icon Overlay */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-green-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-7 h-7 text-green-100" />
                      </div>

                      {/* Service Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-4 py-2 bg-green-100/90 backdrop-blur-sm text-green-800 rounded-full text-sm font-semibold">
                          Professional Service
                        </span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-green-600 mb-4 line-clamp-3 leading-relaxed">{service.description}</p>

                      {/* Service Features Preview */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200 hover:bg-green-100 transition-colors"
                            >
                              {feature.length > 18 ? `${feature.substring(0, 18)}...` : feature}
                            </span>
                          ))}
                          {service.features.length > 2 && (
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                              +{service.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-green-100">
                        <div className="flex items-center text-green-700 font-semibold group-hover:text-green-800 transition-colors">
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="text-sm text-green-600 font-medium">{service.benefits.length} Key Benefits</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Stats */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-green-600 max-w-3xl mx-auto">
                Proven expertise delivering measurable results across Southeast Asia's retail landscape
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "16+", label: "Specialized Services", icon: "🎯", desc: "Comprehensive solutions" },
                { number: "150%", label: "Average Revenue Growth", icon: "📈", desc: "Proven results" },
                { number: "5000+", label: "Staff Trained", icon: "👥", desc: "Skilled professionals" },
                { number: "98%", label: "Client Success Rate", icon: "✅", desc: "Satisfied customers" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold text-green-800 mb-2">{stat.number}</div>
                    <div className="text-green-600 font-semibold mb-1">{stat.label}</div>
                    <div className="text-green-500 text-sm">{stat.desc}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Service Categories */}
      <ScrollReveal>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Service Categories</h2>
              <p className="text-xl text-green-600 max-w-3xl mx-auto">
                Organized expertise across key retail business areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Operations",
                  services: ["Store Operations", "Standard Operating Procedures", "Performance Optimization"],
                  icon: "🏪",
                  color: "from-green-500 to-green-600",
                },
                {
                  category: "Training & Development",
                  services: ["Skill Academy", "Customer Experience", "Leadership Development"],
                  icon: "🎓",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  category: "Technology",
                  services: ["Retail Software Solutions", "AI Retail Analytics", "Digital Transformation"],
                  icon: "💻",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  category: "Strategy",
                  services: ["Market Entry Strategy", "International Expansion", "Franchise Development"],
                  icon: "🎯",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((category, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-4 text-center">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="text-green-600 text-sm flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-700 to-green-800">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">
              Ready to Transform Your <span className="text-green-200">Retail Business</span>?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your retail goals and drive sustainable
              growth across Southeast Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/contact"
                className="bg-green-100 hover:bg-green-50 text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
              >
                Schedule Free Consultation
              </AnimatedButton>
              <AnimatedButton
                href="/services"
                variant="secondary"
                className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg"
              >
                Explore All Services
              </AnimatedButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
