"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">
              Get In <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Ready to transform your retail business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Address</h3>
                    <p className="text-green-600">
                      No 101, Building 61, Street 57
                      <br />
                      BKK 1, Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Phone</h3>
                    <p className="text-green-600">+855 86 844 464</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Email</h3>
                    <p className="text-green-600">info@turningpointretail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Business Hours</h3>
                    <p className="text-green-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-video bg-green-50 rounded-lg flex items-center justify-center border border-green-200">
                  <p className="text-green-600">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary" disabled={isSubmitted}>
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
