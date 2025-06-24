"use client"
import { ArrowRight, MapPin, Star, Users, Award, TrendingUp } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { AnimatedButton } from "@/components/animations/animated-button"
import { Counter } from "@/components/animations/counter"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-full blur-3xl rotate-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center float-animation">
          <TrendingUp className="w-8 h-8 text-green-600" />
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center float-delayed">
          <Star className="w-6 h-6 text-yellow-500" />
        </div>
      </div>

      <div className="container-max relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-yellow-100 text-green-700 rounded-full text-sm font-semibold mb-8 pulse-green">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                #1 Retail Consulting in Southeast Asia
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="heading-primary mb-8 slide-in-left">
                Transform Your
                <span className="text-green-600 block">Retail Business</span>
                <span className="text-gold">Today</span>
              </h1>
            </FadeIn>

            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We help retail businesses across Southeast Asia achieve operational excellence through innovative
                strategies, comprehensive training, and proven methodologies.
              </p>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <AnimatedButton href="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton href="/services" variant="secondary">
                  Explore Services
                </AnimatedButton>
              </div>
            </SlideUp>

            {/* Enhanced Stats */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200">
                <div className="text-center lg:text-left scale-hover">
                  <div className="text-3xl font-bold text-green-800 pulse-green">
                    <Counter end={23} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center lg:text-left scale-hover">
                  <div className="text-3xl font-bold text-green-800 pulse-yellow">
                    <Counter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Brands Served</div>
                </div>
                <div className="text-center lg:text-left scale-hover">
                  <div className="text-3xl font-bold text-green-800 pulse-green">
                    <Counter end={4} />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Countries</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="relative slide-in-right">
              {/* Main Card with enhanced animations */}
              <div className="card-modern p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-yellow-500/10 rounded-full -mr-16 -mt-16 rotate-slow"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6 slide-in-up">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4 pulse-green">
                      <MapPin className="w-6 h-6 text-green-100" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-green-800">Southeast Asia</h3>
                      <p className="text-gray-600">Regional Coverage</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { flag: "🇰🇭", country: "Cambodia" },
                      { flag: "🇻🇳", country: "Vietnam" },
                      { flag: "🇹🇭", country: "Thailand" },
                      { flag: "🇱🇦", country: "Laos" },
                    ].map((item, index) => (
                      <div
                        key={item.country}
                        className="flex items-center p-3 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl scale-hover bounce-subtle"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <span className="text-2xl mr-3">{item.flag}</span>
                        <span className="font-medium text-gray-700">{item.country}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl text-green-100 slide-in-up">
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 mr-2 text-yellow-300" />
                      <span className="font-semibold text-green-100">Walter Dantis</span>
                    </div>
                    <p className="text-green-200 text-sm mb-2">Founder & CEO</p>
                    <p className="text-sm text-green-200 opacity-90">
                      Leading Escada, M&S, Kenzo, Hush Puppies for 23+ years
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl float-animation pulse-yellow">
                <Users className="w-8 h-8 text-green-800" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl float-delayed pulse-green">
                <TrendingUp className="w-6 h-6 text-green-100" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
