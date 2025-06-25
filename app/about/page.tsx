import Image from "next/image"
import { Award, Users, TrendingUp, Heart } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata = {
  title: "About Us | Turning Point Retail Solutions",
  description:
    "Learn about Walter Dantis and our mission to transform retail across Southeast Asia with 23+ years of industry expertise.",
}

export default function AboutPage() {
  const pillars = [
    {
      icon: Award,
      title: "Expertise You Can Trust",
      description:
        "Over two decades of proven success with leading international brands and deep understanding of Southeast Asian markets.",
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description:
        "We put your business goals first, crafting tailored solutions that address your unique challenges and opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Investing in People",
      description:
        "Our comprehensive training programs empower your team with the skills and confidence to drive sustainable growth.",
    },
    {
      icon: Heart,
      title: "Sustainable Growth",
      description:
        "We focus on building long-term success through ethical practices and sustainable business strategies.",
    },
  ]

  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
                Retail Experts <span className="text-green-600">Global Vision</span>
                <br />
                <span className="text-yellow-600">Local Impact</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-green-600 max-w-4xl mx-auto leading-relaxed">
                Transforming retail landscapes across Southeast Asia through innovative strategies, operational
                excellence, and people-first approach.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <ScrollReveal>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-yellow-50 shadow-2xl">
                  <Image
                    src="/images/walter-dantis.jpg"
                    alt="Walter Dantis, Founder & CEO"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-700">23+</div>
                  <div className="text-sm text-green-600 font-medium">Years Experience</div>
                </div>
              </div>

              <div className="space-y-6">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Meet Walter Dantis</h2>
                  <p className="text-xl text-green-600 mb-6 font-medium">
                    Founder & CEO with over 23 years of retail excellence across international markets.
                  </p>
                </FadeIn>

                <div className="space-y-6 text-green-700 text-lg leading-relaxed">
                  <FadeIn delay={0.1}>
                    <p>
                      Walter brings unparalleled expertise from his leadership roles at prestigious brands including
                      <span className="font-bold text-green-800 bg-green-50 px-2 py-1 rounded-lg mx-1">
                        Escada, Marks & Spencer, Kenzo, and Hush Puppies
                      </span>
                      . His deep understanding of both global retail standards and Southeast Asian market dynamics makes
                      him uniquely positioned to drive transformational change.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <p>
                      Having successfully managed retail operations across multiple countries, Walter founded Turning
                      Point Retail Solutions to share his expertise and help businesses navigate the complex retail
                      landscape with confidence and strategic clarity.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <p>
                      His passion for developing people and building sustainable business practices has helped countless
                      retailers achieve operational excellence and sustainable growth throughout the region.
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
                      <div className="text-3xl font-bold text-green-700">50+</div>
                      <div className="text-sm text-green-600 font-medium">Brands Transformed</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200 hover:shadow-lg transition-shadow">
                      <div className="text-3xl font-bold text-yellow-700">4</div>
                      <div className="text-sm text-yellow-600 font-medium">Countries Served</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission, Vision, Values */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Foundation</h2>
              <p className="text-xl text-green-600 max-w-2xl mx-auto">
                The core principles that guide our approach to retail transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                  <p className="text-green-600 leading-relaxed">
                    To empower <span className="text-green-700 font-semibold">retail businesses</span> across Southeast
                    Asia with innovative strategies, operational excellence, and comprehensive training that drives
                    sustainable growth and success.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                  <p className="text-green-600 leading-relaxed">
                    To be the leading retail consulting partner in Southeast Asia, recognized for transforming
                    businesses and developing retail talent that shapes the future of the industry.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Values</h3>
                  <p className="text-green-600 leading-relaxed">
                    Excellence, integrity, innovation, and people-first approach guide everything we do. We believe in
                    building lasting partnerships based on trust and measurable results.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Four Key Pillars */}
      <ScrollReveal>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Four Key Pillars</h2>
              <p className="text-xl text-green-600 max-w-3xl mx-auto">
                The foundation of our approach to retail transformation and sustainable business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <pillar.icon className="w-12 h-12 text-green-100" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">{pillar.title}</h3>
                    <p className="text-green-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
