"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const services = [
    "Standard Operating Procedures",
    "Store Operations Management",
    "Performance Optimization",
    "Staff Training & Development",
    "Digital Transformation",
    "Franchise Development",
  ]

  const industries = [
    "Fashion & Apparel",
    "Electronics & Technology",
    "Food & Beverage",
    "Health & Beauty",
    "Home & Lifestyle",
    "Luxury Goods",
  ]

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/turning-point-new-logo.png"
                alt="Turning Point Retail Solutions"
                width={240}
                height={68}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Transforming retail businesses across Southeast Asia with 23+ years of expertise. We help brands achieve
              operational excellence and sustainable growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-green-100">info@turningpointretail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-green-100">+855 12 345 678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-green-100">Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-green-100">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-green-100 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Industries Served</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="text-green-100">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-green-100 mb-4">
              Get the latest retail insights and industry trends delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                required
              />
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-green-900 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-green-900 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-green-900 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-green-900 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-200 text-sm">© 2024 Turning Point Retail Solutions. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-green-200 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-green-200 hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
