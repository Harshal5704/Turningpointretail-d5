import { notFound } from "next/navigation"
import { getServiceById, servicesData } from "@/lib/services-data"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedButton } from "@/components/animations/animated-button"
import { ArrowLeft, CheckCircle, Quote } from "lucide-react"
import Link from "next/link"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceById(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Turning Point Retail Solutions`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container-max">
          <FadeIn>
            <Link href="/services" className="inline-flex items-center text-green-700 hover:text-green-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <service.icon className="w-12 h-12 text-green-100" />
              </div>
            </FadeIn>

            <SlideUp delay={0.2}>
              <h1 className="heading-primary mb-6 text-green-800">{service.title}</h1>
            </SlideUp>

            <FadeIn delay={0.4}>
              <p className="text-xl text-green-600 leading-relaxed">{service.overview}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-700" />
                        </div>
                        <span className="text-green-700 font-medium">{feature}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8">Benefits</h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                        <p className="text-green-700 font-medium">{benefit}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {service.testimonial && (
        <ScrollReveal>
          <section className="section-padding bg-gray-50">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                  <Quote className="w-12 h-12 text-green-500 mb-6" />
                  <blockquote className="text-2xl text-green-700 font-light mb-8 leading-relaxed">
                    "{service.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-100 font-bold">
                        {service.testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-800">{service.testimonial.author}</div>
                      <div className="text-green-600">{service.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Case Study Placeholder */}
      {service.caseStudy && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Case Study</h2>
                <div className="bg-gradient-to-r from-green-700 to-green-800 p-8 md:p-12 rounded-2xl text-green-100">
                  <h3 className="text-2xl font-bold mb-4 text-green-100">{service.caseStudy.title}</h3>
                  <p className="text-green-200 mb-8 text-lg">{service.caseStudy.description}</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {service.caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-green-200 mb-2">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-500 to-green-600">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how this service can transform your retail operations and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/contact"
                className="bg-green-100 text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Get in Touch
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="secondary"
                className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Request This Service
              </AnimatedButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
