"use client"
import { ArrowRight, Star, Award, TrendingUp, Globe, Building2, Users, Target } from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { AnimatedButton } from "@/components/animations/animated-button"
import { Counter } from "@/components/animations/counter"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-yellow-50/20">
      {/* Business-Focused Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-green-600/10 rounded-full blur-3xl"></div>

        {/* Clear Business Icons */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-100/80 rounded-full flex items-center justify-center shadow-lg">
          <Building2 className="w-8 h-8 text-green-600" />
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-yellow-100/80 rounded-full flex items-center justify-center shadow-lg">
          <Target className="w-6 h-6 text-yellow-600" />
        </div>
        <div className="absolute top-1/2 right-10 w-14 h-14 bg-green-100/80 rounded-full flex items-center justify-center shadow-lg">
          <TrendingUp className="w-7 h-7 text-green-600" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Immediate Business Identifier */}
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-green-100 rounded-full text-sm font-bold mb-6 shadow-lg">
                <Building2 className="w-4 h-4 mr-2" />
                RETAIL BUSINESS CONSULTING FIRM
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-green-100 text-green-700 rounded-full text-sm font-semibold mb-8 border border-green-200">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                #1 Retail Consulting in Southeast Asia
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-green-600">Professional Retail</span>
                <span className="block">Business Consulting</span>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  & Training Services
                </span>
              </h1>
            </FadeIn>

            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong className="text-green-700">Expert retail business consulting</strong> helping companies across
                Southeast Asia achieve operational excellence through proven strategies, staff training, and business
                optimization.
              </p>
            </SlideUp>

            {/* Clear Business Services */}
            <FadeIn delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-white/80 rounded-2xl border border-green-100 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-semibold">Staff Training Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-semibold">Business Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-semibold">Strategic Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-semibold">Operational Excellence</span>
                </div>
              </div>
            </FadeIn>

            {/* Business Results */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl border border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">
                    <Counter end={150} suffix="%" />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Avg Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">
                    <Counter end={5000} suffix="+" />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Staff Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">
                    <Counter end={98} suffix="%" />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">
                    <Counter end={8} />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Countries</div>
                </div>
              </div>
            </FadeIn>

            <SlideUp delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <AnimatedButton href="/contact">
                  <Building2 className="mr-2 w-5 h-5" />
                  Get Business Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton href="/services" variant="secondary">
                  <Users className="mr-2 w-5 h-5" />
                  View Our Services
                </AnimatedButton>
              </div>
            </SlideUp>

            {/* Company Stats */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-800">
                    <Counter end={23} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years in Business</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-800">
                    <Counter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Retail Brands</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-800">
                    <Counter end={8} />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Countries Served</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="relative">
              {/* Business Owner Professional Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-green-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-full -mr-16 -mt-16"></div>

                {/* Business Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-green-100 rounded-full text-sm font-bold mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    BUSINESS FOUNDER & CEO
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Owner's Professional Image */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-green-100 shadow-lg">
                        <Image
                          src="/images/walter-dantis.jpg"
                          alt="Walter Dantis - Business Founder & CEO"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-green-100" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="font-bold text-2xl text-gray-900">Walter Dantis</h3>
                      <p className="text-green-600 font-bold">Business Founder & CEO</p>
                      <p className="text-gray-600 text-sm font-semibold">23+ Years Retail Business Expert</p>
                    </div>
                  </div>

                  {/* Business Credentials */}
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-2xl mb-6 border border-green-100">
                    <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-green-600" />
                      Business Leadership Portfolio
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      <strong>Executive leadership</strong> of major international retail brands including Escada, M&S,
                      Kenzo,Valentino and Roberto Cavalli brands across Southeast Asia with proven business transformation results.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Escada", "M&S", "Kenzo", "Valentino","Roberto Cavalli"].map((brand, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Coverage */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-xl flex items-center justify-center mr-3">
                        <Globe className="w-5 h-5 text-green-100" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Business Operations</h4>
                        <p className="text-gray-600 text-sm font-semibold">Southeast Asia Coverage</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { flag: "🇰🇭", country: "Cambodia" },
                        { flag: "🇻🇳", country: "Vietnam" },
                        { flag: "🇹🇭", country: "Thailand" },
                        { flag: "🇱🇦", country: "Laos" },
                      ].map((item, index) => (
                        <div
                          key={item.country}
                          className="flex items-center p-3 bg-white border border-green-100 rounded-xl hover:shadow-md transition-shadow"
                        >
                          <span className="text-xl mr-3">{item.flag}</span>
                          <span className="font-semibold text-gray-700 text-sm">{item.country}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Call to Action */}
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-2xl text-center">
                    <p className="text-green-100 mb-4 font-semibold">
                      "Ready to transform your retail business with proven strategies?"
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg"
                    >
                      <Building2 className="w-4 h-4 mr-2" />
                      Schedule Business Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Achievement Badges */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">23+</div>
                  <div className="text-xs text-green-800 font-bold">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Building2 className="w-8 h-8 text-green-100" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
