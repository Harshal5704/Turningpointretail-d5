"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FadeIn } from "@/components/animations/fade-in"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: "No 101, Building 61, Street 57\nBKK 1, Phnom Penh, Cambodia",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+855 86 844 464",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@turningpointretail.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM",
      color: "from-orange-500 to-orange-600",
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
                Get In <span className="text-green-600">Touch</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-green-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your retail business? Let's start the conversation and explore how we can help you
                achieve your goals.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <ScrollReveal>
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">{info.title}</h3>
                    <p className="text-green-600 leading-relaxed whitespace-pre-line">{info.content}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form & Map Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-50 to-yellow-50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-green-100">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Send us a Message</h2>
                  <p className="text-green-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-green-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-green-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 text-lg transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-green-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-green-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 text-lg transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-green-700 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-green-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 text-lg transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-green-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-6 py-4 border-2 border-green-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 text-lg transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted || isLoading}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {isSubmitted && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-700 font-medium text-center">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Find Us</h3>
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl flex items-center justify-center border-2 border-green-200">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <p className="text-green-600 font-medium">Interactive Map Coming Soon</p>
                      <p className="text-green-500 text-sm mt-2">Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                      <Phone className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Call Now</p>
                        <p className="text-green-600">+855 86 844 464</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-2xl">
                      <Mail className="w-6 h-6 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-green-800">Email Us</p>
                        <p className="text-green-600">info@turningpointretail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="section-padding bg-gradient-to-r from-green-700 to-green-800">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-6">
              Ready to Start Your <span className="text-green-200">Retail Transformation</span>?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful retailers who have transformed their businesses with our expert guidance and
              proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-100 hover:bg-green-50 text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                Download Our Brochure
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
