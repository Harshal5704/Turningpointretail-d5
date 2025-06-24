import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { AnimatedButton } from "@/components/animations/animated-button"

export const metadata = {
  title: "Services | Turning Point Retail Solutions",
  description:
    "Comprehensive retail consulting services including store operations, franchise development, training, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <FadeIn>
              <h1 className="heading-primary mb-6 text-green-800">
                Comprehensive Retail Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-green-600 max-w-3xl mx-auto">
                From store operations to digital transformation, we provide end-to-end retail consulting services
                tailored to the Southeast Asian market.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-green-100" />
                    </div>

                    <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-green-600 mb-6">{service.description}</p>

                    <div className="flex items-center text-green-700 font-semibold group-hover:text-green-800">
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
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-700 to-green-800">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">
              Ready to Transform Your <span className="text-green-200">Retail Business</span>?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your retail goals and drive sustainable growth.
            </p>
            <AnimatedButton
              href="/contact"
              className="bg-green-100 hover:bg-green-50 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get Started Today
            </AnimatedButton>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
