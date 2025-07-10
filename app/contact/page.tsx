"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedButton } from "@/components/animations/animated-button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Globe,
  MessageSquare,
  Users,
  Target,
  Zap,
} from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage(result.message || "Thank you for your message! We will get back to you soon.")
        reset()

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
          setStatusMessage("")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setStatusMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="animate-fade-in" style={{ paddingTop: "var(--header-height)" }}>
      {/* Enhanced Get in Touch Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-semibold border border-green-300">
                  <MessageSquare className="w-4 h-4" />
                  <span>Get In Touch</span>
                </div>
              </div>
            </FadeIn>

            <SlideUp delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
                  Retail Business?
                </span>
              </h1>
            </SlideUp>

            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Connect with our retail experts and discover how we can help you achieve sustainable growth, optimize
                operations, and create exceptional customer experiences that drive results.
              </p>
            </FadeIn>

            {/* Enhanced Value Propositions */}
            <ScrollReveal delay={0.6}>
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-sm text-gray-600">15+ Years Experience</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Proven Results</p>
                    <p className="text-sm text-gray-600">Measurable Impact</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Fast Response</p>
                    <p className="text-sm text-gray-600">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Enhanced CTA */}
            <ScrollReveal delay={0.8}>
              <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 p-8 md:p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-16 relative overflow-hidden">
                {/* CTA Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full blur-2xl"></div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Free Strategy Consultation</h3>
                  <p className="text-green-100 mb-6 text-lg leading-relaxed">
                    Book a complimentary 30-minute strategy session with our retail experts. Get personalized insights
                    and actionable recommendations for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <AnimatedButton className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Book Free Consultation</span>
                    </AnimatedButton>
                    <div className="flex items-center space-x-2 text-green-100">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">No commitment required</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-green-100" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Visit Our Office</h3>
                <p className="text-green-600 mb-4">
                  Office No: 2602, 26th Floor
                  <br />
                  Diamond Twin Towers
                  <br />
                  Koh Pich, Phnom Penh, Cambodia
                </p>
                <a
                  href="https://maps.google.com/?q=Diamond+Twin+Towers+Koh+Pich+Phnom+Penh+Cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  View on Map
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-100" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Call Us</h3>
                <p className="text-green-600 mb-2">Ready to discuss your project?</p>
                <p className="text-2xl font-bold text-green-700 mb-4">+855 86 844 464</p>
                <p className="text-sm text-green-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Response within 2 hours
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-purple-100" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Email Us</h3>
                <p className="text-green-600 mb-2">Send us a detailed message</p>
                <p className="text-lg font-semibold text-green-700 mb-4">info@turningpointretail.com</p>
                <p className="text-sm text-green-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Response within 24 hours
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-green-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center">
                    <MessageSquare className="w-8 h-8 mr-3 text-green-600" />
                    Send Us a Message
                  </h2>
                  <p className="text-green-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-green-700">{statusMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <p className="text-red-700">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-green-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-green-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-green-700 mb-2">
                        Company Name
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-green-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="+855 XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-green-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your project, challenges, or how we can help you..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-green-100 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-100 mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </AnimatedButton>

                  <p className="text-sm text-green-600 text-center">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </ScrollReveal>

            {/* Business Hours & Additional Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-semibold">Monday - Friday</span>
                      <span className="text-green-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-semibold">Saturday</span>
                      <span className="text-green-600">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-semibold">Sunday</span>
                      <span className="text-green-600">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-200/50 rounded-lg">
                    <p className="text-green-700 text-sm">
                      <strong>Emergency Support:</strong> Available 24/7 for existing clients
                    </p>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <Building2 className="w-6 h-6 mr-3" />
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Expert team with 15+ years of retail experience",
                      "Proven track record across Southeast Asia",
                      "Customized solutions for your specific needs",
                      "Ongoing support and consultation",
                      "Data-driven approach with measurable results",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Our Response Promise</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span>Initial response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span>Detailed proposal within 3-5 business days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span>Project kickoff within 1-2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
