"use client"
import { ArrowRight, MapPin, Star, Users, Award } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { AnimatedButton } from "@/components/animations/animated-button"
import { Counter } from "@/components/animations/counter"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 Retail Consulting in Southeast Asia
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="heading-primary mb-8">
                Transform Your
                <span className="text-accent block">Retail Business</span>
                <span className="text-gold">Today</span>
              </h1>
            </FadeIn>

            <SlideUp delay={0.2}>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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

            {/* Stats */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900">
                    <Counter value={23} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900">
                    <Counter value={50} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Brands Served</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900">
                    <Counter value={4} />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Countries</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="relative">
              {/* Main Card */}
              <div className="card-modern p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Southeast Asia</h3>
                      <p className="text-slate-600">Regional Coverage</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                      <span className="text-2xl mr-3">🇰🇭</span>
                      <span className="font-medium text-slate-700">Cambodia</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                      <span className="text-2xl mr-3">🇻🇳</span>
                      <span className="font-medium text-slate-700">Vietnam</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                      <span className="text-2xl mr-3">🇹🇭</span>
                      <span className="font-medium text-slate-700">Thailand</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                      <span className="text-2xl mr-3">🇱🇦</span>
                      <span className="font-medium text-slate-700">Laos</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Walter Dantis</span>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">Founder & CEO</p>
                    <p className="text-sm opacity-90">Leading Escada, M&S, Kenzo, Hush Puppies for 23+ years</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
