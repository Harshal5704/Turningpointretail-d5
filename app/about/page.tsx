import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedButton } from "@/components/animations/animated-button"
import { Counter } from "@/components/animations/counter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, TrendingUp, Globe, Target, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About Us | Turning Point Retail Solutions",
  description:
    "Learn about Turning Point's 25+ years of retail expertise and our commitment to transforming businesses across Southeast Asia.",
}

export default function AboutPage() {
  const achievements = [
    {
      icon: TrendingUp,
      number: 150,
      suffix: "+",
      title: "Projects Completed",
      description: "Successfully delivered across Southeast Asia",
    },
    {
      icon: Users,
      number: 25,
      suffix: "+",
      title: "Years Experience",
      description: "Proven expertise in retail transformation",
    },
    {
      icon: Award,
      number: 95,
      suffix: "%",
      title: "Client Success Rate",
      description: "Consistently exceeding expectations",
    },
    {
      icon: Globe,
      number: 40,
      suffix: "+",
      title: "Retail Brands",
      description: "Trusted by leading companies",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line and growth.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor every solution to meet your unique business needs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge strategies and technologies to keep you ahead of the competition.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to implementation.",
    },
  ]

  const brandExperience = [
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
    <div className="animate-fade-in" style={{ paddingTop: "var(--header-height)" }}>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <Badge
                  variant="secondary"
                  className="text-base font-medium px-6 py-3 mb-6 bg-green-100 text-green-800 border border-green-200"
                >
                  About Turning Point
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
                  Transforming Retail Businesses Across Southeast Asia
                </h1>
                <p className="text-xl text-green-600 mb-8 leading-relaxed">
                  With 25+ years of proven expertise, we partner with retail businesses to unlock their full potential
                  through strategic consulting, operational excellence, and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <AnimatedButton
                      size="lg"
                      className="bg-green-600 text-green-100 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </AnimatedButton>
                  </Link>
                  <Link href="/services">
                    <AnimatedButton
                      size="lg"
                      variant="outline"
                      className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-green-100 px-8 py-4 rounded-lg font-semibold text-lg"
                    >
                      Our Services
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis - Founder & Managing Director"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Track Record</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                Numbers that reflect our commitment to delivering exceptional results
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-green-100" />
                    </div>
                    <div className="mb-4">
                      <Counter
                        end={achievement.number}
                        suffix={achievement.suffix}
                        className="text-4xl font-bold text-green-800"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{achievement.title}</h3>
                    <p className="text-green-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <Badge
                  variant="secondary"
                  className="text-base font-medium px-6 py-3 mb-6 bg-green-100 text-green-800 border border-green-200"
                >
                  Leadership
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                  Meet Walter Dantis
                  <span className="block text-xl font-normal text-green-600 mt-2">Founder & Managing Director</span>
                </h2>
                <div className="space-y-4 text-green-700 leading-relaxed">
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
              </div>
            </ScrollReveal>

            <FadeIn delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis - Founder & Managing Director"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Brand Experience</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                Trusted by leading retail brands across luxury, fashion, and lifestyle sectors
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {brandExperience.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-sm font-semibold text-green-800 group-hover:text-green-700 transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Values</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every relationship we build
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-green-100" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-green-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-green-100 mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our 25+ years of expertise can transform your retail business and drive sustainable
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  className="bg-green-100 text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
              </Link>
              <Link href="/services">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Explore Our Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
