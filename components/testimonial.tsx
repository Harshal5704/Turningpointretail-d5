"use client"

import { Quote, Star } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function Testimonial() {
  return (
    <section className="section-padding bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8">
              <Star className="w-4 h-4 mr-2 text-amber-400" />
              Client Success Story
            </div>

            <div className="glass-effect rounded-3xl p-12 text-white">
              <Quote className="w-16 h-16 mx-auto mb-8 text-amber-400" />

              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                "Walter's expertise transformed our retail operations across three countries. His strategic approach and
                hands-on training methodology delivered measurable results within the first quarter."
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">JL</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl">Jennifer Liu</div>
                  <div className="text-blue-200">Regional Director, Fashion Retail Group</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
