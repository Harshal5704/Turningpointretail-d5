import { getServiceBySlug, getAllServices } from "@/lib/services-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Star, ArrowRight, Users, TrendingUp, Target, Award } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current operations and identify key improvement opportunities.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts create a customized solution tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We work closely with your team to implement the solution effectively.",
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring and refinement to ensure lasting success.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Operations Director",
      company: "Fashion Forward",
      content:
        "The transformation in our operations has been remarkable. Our efficiency increased by 40% within the first quarter.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      position: "CEO",
      company: "Tech Retail Solutions",
      content: "Professional, knowledgeable, and results-driven. They exceeded our expectations in every way.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-green-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-green-600">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="text-white">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-green-100 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Services</span>
                </Link>

                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  {service.category}
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>

                <p className="text-xl text-green-100 mb-8 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">{service.overview}</p>
                </div>
              </FadeIn>
            </div>

            <div>
              <ScrollReveal>
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Proven Results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Customized Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">23+ Years Experience</span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Key Features & Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our comprehensive approach delivers measurable results for your business.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.keyFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature}</h3>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Expected Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the tangible improvements you can expect from our service implementation.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful implementation and lasting results.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our clients say about their experience working with us.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how {service.title.toLowerCase()} can transform your retail operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 px-8 bg-transparent"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
