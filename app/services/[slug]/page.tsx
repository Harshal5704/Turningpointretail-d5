import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServices } from "@/lib/services-data"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedButton } from "@/components/animations/animated-button"
import { ArrowLeft, CheckCircle, Star, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const allServices = getAllServices()
  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

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
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="animate-fade-in" style={{ paddingTop: "var(--header-height)" }}>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container-max">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center text-green-700 hover:text-green-800 mb-4 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Hero Section with Internet-Sourced Image */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <FadeIn>
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Award className="w-10 h-10 text-green-100" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Professional Service
                    </span>
                  </div>
                </div>
              </FadeIn>

              <SlideUp delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">{service.title}</h1>
              </SlideUp>

              <FadeIn delay={0.4}>
                <p className="text-xl text-green-600 leading-relaxed mb-8">{service.description}</p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-green-700 font-semibold">Expert Consulting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Proven Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-green-700 font-semibold">Expert Team</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton
                    href="/contact"
                    className="bg-green-600 text-green-100 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                  >
                    Get Started Now
                  </AnimatedButton>
                  <AnimatedButton
                    href="/contact"
                    variant="secondary"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-green-100 px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Schedule Consultation
                  </AnimatedButton>
                </div>
              </FadeIn>
            </div>

            {/* Internet-Sourced Hero Image */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Professional retail consulting service`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1023px) calc(100vw - 2rem), (min-width: 1024px) calc(50vw - 4rem)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="w-12 h-12 text-green-800" />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="w-10 h-10 text-green-100" />
                </div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-blue-100" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Expert Team", desc: "Experienced professionals with proven track record" },
                {
                  icon: TrendingUp,
                  title: "Measurable Results",
                  desc: "Data-driven outcomes that impact your bottom line",
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  desc: "Trusted by leading retail brands across Southeast Asia",
                },
              ].map((highlight, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-8 h-8 text-green-100" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{highlight.title}</h3>
                    <p className="text-green-600">{highlight.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features & Benefits with Enhanced Layout */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Key Features */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                  Key Features
                </h2>
                <div className="space-y-6">
                  {service.features.map((feature, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-green-100" />
                        </div>
                        <span className="text-green-700 font-semibold text-lg">{feature}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
                  <Award className="w-8 h-8 mr-3 text-green-600" />
                  Benefits & Results
                </h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-5 h-5 text-green-100" />
                          </div>
                          <p className="text-green-700 font-semibold text-lg">{benefit}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Proven Process</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                A systematic approach that delivers consistent results for your retail business
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-green-100">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{step}</h3>
                    <div className="w-12 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study */}
      {service.caseStudy && (
        <ScrollReveal>
          <section className="section-padding bg-gradient-to-r from-green-700 to-green-800">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-100 mb-8">Success Story</h2>
                <div className="bg-green-600/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-green-500/30 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-green-100">{service.caseStudy.title}</h3>
                  <p className="text-green-200 mb-8 text-lg leading-relaxed">{service.caseStudy.challenge}</p>
                  <div className="grid md:grid-cols-3 gap-8">
                    {service.caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">{result}</div>
                        <div className="w-12 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Enhanced CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-500 to-green-600">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how <strong>{service.title.toLowerCase()}</strong> can drive measurable results and
              sustainable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/contact"
                className="bg-green-100 text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
              >
                Schedule Free Consultation
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="secondary"
                className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Request Detailed Proposal
              </AnimatedButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
