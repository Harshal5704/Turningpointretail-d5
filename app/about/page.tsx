import Image from "next/image"
import { Award, Users, TrendingUp, Heart } from "lucide-react"

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
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">
              Retail Experts. <span className="text-accent">Global Vision.</span> Local Impact.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming retail landscapes across Southeast Asia through innovative strategies, operational
              excellence, and people-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-amber-50">
                <Image
                  src="/images/walter-dantis.jpg"
                  alt="Walter Dantis, Founder & CEO"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-700">23+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div>
              <h2 className="heading-secondary">Meet Walter Dantis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founder & CEO with over 23 years of retail excellence across international markets.
              </p>

              <div className="space-y-4 text-gray-700">
                <p>
                  Walter brings unparalleled expertise from his leadership roles at prestigious brands including
                  <span className="font-semibold text-blue-700"> Escada, Marks & Spencer, Kenzo, and Hush Puppies</span>
                  . His deep understanding of both global retail standards and Southeast Asian market dynamics makes him
                  uniquely positioned to drive transformational change.
                </p>

                <p>
                  Having successfully managed retail operations across multiple countries, Walter founded Turning Point
                  Retail Solutions to share his expertise and help businesses navigate the complex retail landscape with
                  confidence and strategic clarity.
                </p>

                <p>
                  His passion for developing people and building sustainable business practices has helped countless
                  retailers achieve operational excellence and sustainable growth throughout the region.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-gray-600">Brands Transformed</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">4</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower retail businesses across Southeast Asia with innovative strategies, operational excellence,
                and comprehensive training that drives sustainable growth and success.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading retail consulting partner in Southeast Asia, recognized for transforming businesses
                and developing retail talent that shapes the future of the industry.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and people-first approach guide everything we do. We believe in
                building lasting partnerships based on trust and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Key Pillars */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Our Four Key Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our approach to retail transformation and sustainable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
