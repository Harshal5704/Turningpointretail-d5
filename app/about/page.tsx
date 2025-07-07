"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { Award, Users, Globe, TrendingUp, Target, Lightbulb, CheckCircle, Star, Building, Calendar } from "lucide-react"

export default function AboutPage() {
  const achievements = [
    { icon: Building, number: "500+", label: "Stores Transformed" },
    { icon: Users, number: "50+", label: "Retail Brands Served" },
    { icon: Globe, number: "15+", label: "Countries Reached" },
    { icon: Calendar, number: "16+", label: "Years Experience" },
  ]

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve retail challenges.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term partnerships with our clients, becoming an extension of their team.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We are committed to driving sustainable growth for our clients and their businesses.",
    },
  ]

  const brandExperience = [
    "Adidas",
    "Nike",
    "Puma",
    "Under Armour",
    "New Balance",
    "Converse",
    "Vans",
    "Timberland",
    "Clarks",
    "Ecco",
    "Geox",
    "Crocs",
    "Birkenstock",
    "Dr. Martens",
    "UGG",
    "Toms",
    "Allbirds",
    "On Running",
    "Hoka",
    "Brooks",
    "Asics",
    "Mizuno",
    "Saucony",
    "New Era",
    "Champion",
    "Fila",
    "Kappa",
    "Umbro",
    "Diadora",
    "Le Coq Sportif",
    "Lacoste",
    "Polo Ralph Lauren",
    "Tommy Hilfiger",
    "Calvin Klein",
    "Hugo Boss",
    "Armani",
    "Versace",
    "Dolce & Gabbana",
    "Prada",
    "Gucci",
    "Louis Vuitton",
    "Hermès",
    "Chanel",
    "Dior",
    "Burberry",
    "Valentino",
    "Roberto Cavalli",
    "Bottega Veneta",
    "Saint Laurent",
    "Balenciaga",
    "Givenchy",
    "Fendi",
    "Moschino",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
                About Turning Point Retail
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
                Transforming Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">
                  Since 2008
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                We are Southeast Asia's leading retail consulting firm, dedicated to helping businesses achieve
                operational excellence and sustainable growth through innovative solutions and strategic expertise.
              </p>
            </FadeIn>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <achievement.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis - Founder & CEO"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-yellow-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">16+ Years</div>
                  <div className="text-sm opacity-90">Industry Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  Our Founder
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet Walter Dantis</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over 16 years of extensive experience in the retail industry, Walter Dantis founded Turning Point
                  Retail with a vision to transform how businesses approach retail operations and customer experience.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  His expertise spans across multiple retail sectors, having worked with some of the world's most
                  prestigious brands and helping them achieve remarkable growth and operational excellence across
                  Southeast Asian markets.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">16+ years of retail industry expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Extensive experience with luxury and premium brands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Deep understanding of Southeast Asian markets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Proven track record of business transformation</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Brand Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Premium Brands</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our extensive experience spans across luxury fashion, sportswear, and lifestyle brands, helping them
                achieve excellence in the competitive retail landscape.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {brandExperience.map((brand, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="text-gray-700 font-medium text-sm">{brand}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Drives Us Forward</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our core values guide every decision we make and every solution we deliver, ensuring we consistently
                exceed our clients' expectations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="text-center lg:text-left">
                <Award className="w-12 h-12 text-yellow-400 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To empower retail businesses across Southeast Asia with innovative solutions, strategic expertise, and
                  operational excellence that drive sustainable growth and create exceptional customer experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center lg:text-left">
                <Star className="w-12 h-12 text-yellow-400 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the leading retail consulting firm in Southeast Asia, recognized for transforming businesses
                  through innovation, excellence, and unwavering commitment to our clients' success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Your Success is Our Priority</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine deep industry expertise with innovative solutions to deliver measurable results that
                transform your retail business.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our track record speaks for itself with 500+ successful store transformations and measurable
                    improvements in client performance metrics.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Regional Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep understanding of Southeast Asian markets, consumer behavior, and regulatory environments across
                    15+ countries.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Dedicated Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We become an extension of your team, providing ongoing support and strategic guidance throughout
                    your transformation journey.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
