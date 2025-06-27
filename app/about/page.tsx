"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Globe, TrendingUp, Target, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Countries Served" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparent communication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success.",
    },
  ]

  const expertise = [
    "Retail Strategy Development",
    "Operations Optimization",
    "Digital Transformation",
    "Brand Development",
    "Market Analysis",
    "Performance Management",
    "Staff Training & Development",
    "Customer Experience Design",
  ]

  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
                About Us
              </Badge>
              <h1 className="heading-primary mb-6">Transforming Retail Excellence</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                With over 15 years of experience in retail consulting, we help businesses across the globe achieve
                operational excellence, enhance customer experiences, and drive sustainable growth through innovative
                strategies and proven methodologies.
              </p>
            </div>
          </FadeIn>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <Badge variant="outline" className="mb-4">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Building Retail Success Stories Since 2008
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize the retail industry, Turning Point Retail has grown from a
                    small consulting firm to a globally recognized leader in retail transformation. Our journey began
                    with a simple belief: every retail business has the potential to achieve extraordinary success with
                    the right guidance and strategies.
                  </p>
                  <p>
                    Over the years, we've had the privilege of working with diverse clients across multiple industries,
                    from small local retailers to large multinational chains. Each project has taught us valuable
                    lessons and reinforced our commitment to delivering exceptional results.
                  </p>
                  <p>
                    Today, we continue to innovate and adapt to the ever-changing retail landscape, helping our clients
                    navigate challenges and capitalize on opportunities in an increasingly competitive market.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence in Retail</h3>
                    <p className="text-gray-600">Recognized industry leader</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Drives Us Forward</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Leadership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet Our Founder</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visionary leadership driving retail transformation across the globe.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal>
            <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto relative">
                    <Image
                      src="/images/walter-dantis.jpg"
                      alt="Walter Dantis - Founder & CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">Walter Dantis</h3>
                    <p className="text-xl text-green-600 mb-6 font-semibold">Founder & CEO</p>

                    <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                      <p>
                        With over 15 years of experience in retail consulting, Walter has led transformational projects
                        for major brands including Valentino, Roberto Cavalli, and numerous other international
                        retailers across Asia, Europe, and the Americas.
                      </p>
                      <p>
                        His expertise spans strategic planning, operations optimization, and digital transformation,
                        making him a sought-after advisor for retail businesses looking to achieve sustainable growth
                        and operational excellence.
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Link
                        href="https://www.linkedin.com/in/walterdantis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Connect on LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <Badge variant="outline" className="mb-4">
                  Our Expertise
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Comprehensive Retail Solutions</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We offer a full spectrum of retail consulting services, combining deep industry knowledge with
                  innovative approaches to help businesses thrive in today's competitive marketplace.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 border-0 shadow-lg">
                    <CardContent className="p-0 text-center">
                      <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                      <p className="text-sm text-gray-600">Serving clients worldwide</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border-0 shadow-lg">
                    <CardContent className="p-0 text-center">
                      <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Proven Results</h3>
                      <p className="text-sm text-gray-600">Measurable improvements</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6 pt-12">
                  <Card className="p-6 border-0 shadow-lg">
                    <CardContent className="p-0 text-center">
                      <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
                      <p className="text-sm text-gray-600">Industry specialists</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border-0 shadow-lg">
                    <CardContent className="p-0 text-center">
                      <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                      <p className="text-sm text-gray-600">Award-winning solutions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful retailers who have achieved remarkable growth with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
