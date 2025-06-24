"use client"

import { Quote, Star, Award } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function Testimonial() {
  return (
    <section className="section-padding bg-gradient-to-r from-green-800 via-green-700 to-green-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-300/10 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-400/20 rounded-full float-animation"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-400/20 rounded-full float-delayed"></div>
      </div>

      <div className="container-max relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-green-100 rounded-full text-sm font-semibold mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Client Success Story
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <Quote className="w-16 h-16 mx-auto mb-8 text-yellow-500" />

              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-gray-800">
                "Walter's expertise transformed our retail operations across three countries. His strategic approach and
                hands-on training methodology delivered measurable results within the first quarter."
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-green-800 font-bold text-xl">JL</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl text-gray-800">Jennifer Liu</div>
                  <div className="text-gray-600">Regional Director, Fashion Retail Group</div>
                </div>
              </div>

              {/* Enhanced Rating */}
              <div className="flex justify-center mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="mt-8 inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                98% Client Satisfaction Rate
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
