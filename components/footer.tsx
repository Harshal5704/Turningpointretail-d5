"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowRight, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/turning-point-logomark.png"
                  alt="Turning Point Retail"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Turning Point Retail</h3>
                  <p className="text-green-400 text-sm">Excellence in Retail</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Transforming retail businesses across Southeast Asia with innovative solutions, strategic consulting,
                and cutting-edge technology. Your success is our mission.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
                <p className="text-gray-400 text-sm">Get the latest retail insights and industry news</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 px-4">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-green-600 pb-2">Quick Links</h4>
              <nav className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/news", label: "News & Insights" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-green-600 pb-2">Our Services</h4>
              <nav className="space-y-3">
                {[
                  "Store Operations",
                  "Digital Transformation",
                  "Franchise Development",
                  "Performance Optimization",
                  "Risk Management",
                  "International Expansion",
                ].map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform text-sm"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Industries & Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-b border-green-600 pb-2">Industries We Serve</h4>
              <div className="space-y-2 text-sm text-gray-300">
                {[
                  "Fashion & Apparel",
                  "Electronics & Tech",
                  "Food & Beverage",
                  "Health & Beauty",
                  "Home & Lifestyle",
                  "Luxury Goods",
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {industry}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                <h4 className="text-lg font-semibold text-white border-b border-green-600 pb-2">Contact Info</h4>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      <p>Office no: 2602, 26th floor</p>
                      <p>Diamond twin towers</p>
                      <p>Koh Pich, Phnom Penh, Cambodia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <div>
                      <a
                        href="mailto:info@turningpointretail.com"
                        className="text-gray-300 hover:text-green-400 transition-colors"
                      >
                        info@turningpointretail.com
                      </a>
                      <p className="text-xs text-gray-500">Response within 24hrs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">+855 86 844 464</p>
                      <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM ICT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 1:00 PM</p>
                      <p className="text-xs text-gray-500">Cambodia Time (ICT)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 text-center backdrop-blur-sm border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Retail Business?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful retailers who have partnered with us to achieve exceptional growth and
                operational excellence.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
                <p className="text-gray-400 text-sm">Stay connected for updates and insights</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/turningpoint_retail?igsh=MXUzYzEzZXcwdzlxaQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BD1c5XAna/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/turningpoint-retail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">© 2024 Turning Point Retail. All rights reserved.</p>
                <p className="text-gray-500 text-xs mt-1">Powered by Innovation & Excellence</p>
              </div>

              <div className="flex gap-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
