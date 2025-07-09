"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, TrendingUp, Globe, Briefcase } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Proven track record in retail consulting and business transformation",
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Trusted by leading brands across Southeast Asia",
    },
    {
      icon: Target,
      title: "85% Success Rate",
      description: "Consistent delivery of measurable results and improvements",
    },
    {
      icon: TrendingUp,
      title: "150+ Projects",
      description: "Successful retail transformations completed",
    },
    {
      icon: Globe,
      title: "12+ Countries",
      description: "International reach across Asia-Pacific region",
    },
    {
      icon: Briefcase,
      title: "200+ Store Audits",
      description: "Comprehensive retail assessments conducted",
    },
  ]

  const brands = [
    "Escada",
    "Kenzo",
    "Roberto Cavalli",
    "Juicy Couture",
    "Mango",
    "Valentino",
    "Marks & Spencer",
    "Alviro Martini",
    "Next",
    "French Connection",
    "Monsoon",
    "Bhs",
    "Alcott",
    "Bendon",
    "Cafe Italia",
    "Irish Village",
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-6 py-3 text-base font-semibold">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Transforming Retail Excellence</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                With 25+ years of proven expertise, we partner with retail businesses to unlock their full potential
                through strategic consulting, operational excellence, and innovative solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Walter Dantis Profile Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis - Founder & Managing Director"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
                  Leadership
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Walter Dantis</h2>
                <p className="text-lg text-green-600 font-semibold mb-8">Founder & Managing Director</p>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Walter Dantis is a seasoned retail business leader and the driving force behind Turning Point, a
                    consulting firm dedicated to transforming retail businesses across Southeast Asia. With a
                    distinguished career spanning over 25+ years, Walter has led successful retail operations, launched
                    new market ventures, and turned around underperforming businesses in the luxury, fashion, and
                    lifestyle sectors.
                  </p>

                  <p>
                    His deep understanding of store operations, merchandising strategy, customer experience, and team
                    capability development has positioned him as a trusted advisor to both emerging and established
                    brands. Known for his sharp strategic thinking and practical execution, Walter partners with
                    retailers to design growth roadmaps, optimize performance, and implement high-impact solutions.
                  </p>

                  <p>
                    His expertise in franchise development, retail audits, and training systems has helped clients
                    achieve operational excellence and long-term profitability. As the Founder and Managing Director of
                    Turning Point, Walter brings a results-oriented mindset and a clear vision for modern retail
                    success.
                  </p>

                  <p>
                    He is recognized not only as a consultant but as a true change-maker in the industry—committed to
                    elevating retail standards and empowering businesses to thrive in competitive markets.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-6 py-3 text-base font-semibold">
                Our Achievements
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Proven Track Record of Success</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Over 25+ years of delivering exceptional results and transforming retail businesses across the region.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-6 py-3 text-base font-semibold">
                Brand Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Trusted by Leading Brands</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Over 25+ years of partnership with internationally recognized brands across luxury, fashion, and
                lifestyle sectors.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{brand}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-max">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                Let's discuss how our 25+ years of expertise can help you achieve operational excellence and sustainable
                growth.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
