import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

export const metadata: Metadata = {
  title: "About Walter Dantis | Turning Point Retail Solutions",
  description: "Learn about Walter Dantis, founder of Turning Point Retail Solutions, with over 15 years of retail expertise and international brand experience.",
}

export default function AboutPage() {
  const brandExperience = [
    "Adidas", "Nike", "Puma", "New Balance", "Converse", "Vans", 
    "Timberland", "Dr. Martens", "Clarks", "Ecco", "Geox", "Crocs",
    "Valentino", "Roberto Cavalli", "Calvin Klein", "Tommy Hilfiger", 
    "Polo Ralph Lauren", "Lacoste", "Hugo Boss", "Armani Exchange"
  ]

  const achievements = [
    {
      title: "15+ Years Experience",
      description: "Extensive retail industry expertise across multiple markets"
    },
    {
      title: "50+ Brand Partnerships",
      description: "Successful collaborations with leading international brands"
    },
    {
      title: "Multi-Market Presence",
      description: "Operations across Southeast Asia and international markets"
    },
    {
      title: "Proven Track Record",
      description: "Consistent delivery of exceptional retail solutions"
    }
  ]

  const expertise = [
    "Retail Operations Management",
    "Brand Development & Strategy",
    "International Market Expansion",
    "Franchise Development",
    "Digital Transformation",
    "Performance Optimization",
    "Risk Management",
    "Team Leadership & Training"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Founder & CEO
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-green-800 leading-tight">
                  Meet Walter Dantis
                </h1>
                <p className="text-xl text-green-700 leading-relaxed">
                  Transforming retail businesses with over 15 years of industry expertise, 
                  international brand experience, and a passion for operational excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-green-700">Years Experience</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-green-700">Brand Partners</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-green-600">100+</div>
                    <div className="text-sm text-green-700">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis - Founder & CEO"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                Professional Journey
              </h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                A proven track record of transforming retail businesses and building 
                successful partnerships with leading international brands.
              </p>
            </div>
          </SlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-green-700 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="prose prose-lg max-w-4xl mx-auto text-green-700">
              <p className="text-xl leading-relaxed mb-6">
                With over 15 years of dedicated experience in the retail industry, Walter Dantis 
                has established himself as a leading expert in retail operations, brand development, 
                and international market expansion. His journey began with a passion for creating 
                exceptional customer experiences and has evolved into a comprehensive understanding 
                of every aspect of retail business management.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Throughout his career, Walter has successfully partnered with over 50 international 
                brands, helping them navigate complex market challenges and achieve sustainable growth. 
                His expertise spans across multiple retail sectors, from fashion and footwear to 
                lifestyle and luxury brands, providing him with unique insights into diverse 
                consumer behaviors and market dynamics.
              </p>

              <p className="text-lg leading-relaxed">
                Walter's approach combines strategic thinking with practical implementation, ensuring 
                that every solution is not only theoretically sound but also practically viable. 
                His commitment to excellence and innovation has made Turning Point Retail Solutions 
                a trusted partner for businesses looking to transform their retail operations and 
                achieve lasting success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Experience */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                Brand Experience
              </h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Trusted partnerships with leading international brands across multiple industries.
              </p>
            </div>
          </SlideUp>

          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {brandExperience.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <span className="font-semibold text-green-800">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                Core Expertise
              </h2>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Comprehensive skills and knowledge areas that drive exceptional retail results.
              </p>
            </div>
          </SlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {skill.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-green-800 text-sm">
                      {skill}
                    </h3>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed text-green-100">
                  To be the leading catalyst for retail transformation in Southeast Asia, 
                  empowering businesses to achieve sustainable growth through innovative 
                  solutions and strategic excellence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed text-green-100">
                  To provide comprehensive retail solutions that transform businesses, 
                  enhance customer experiences, and drive measurable results through 
                  expertise, innovation, and unwavering commitment to excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <SlideUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-green-700 mb-8">
              Let's discuss how our expertise can help you achieve your retail goals 
              and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
              <a
                href="/services"
                className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  )
}
