import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const industries = [
    "Fashion & Apparel",
    "Electronics & Technology",
    "Food & Beverage",
    "Health & Beauty",
    "Home & Lifestyle",
    "Sports & Recreation",
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "News & Insights", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Store Operations", href: "/services/store-operations" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
    { name: "Franchise Development", href: "/services/franchise-development" },
    { name: "Performance Optimization", href: "/services/performance-optimization" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
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
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Turning Point Retail</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transforming retail businesses through strategic consulting, innovative solutions, and operational
                  excellence.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 px-3">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries We Serve */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Industries We Serve</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry} className="text-gray-300 text-sm">
                    {industry}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Office no: 2602, 26th floor</p>
                    <p>Diamond twin towers, Koh Pich</p>
                    <p>Phnom Penh, Cambodia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>+855 23 123 456</p>
                    <p className="text-xs text-gray-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>sarvajithadyanthaya@gmail.com</p>
                    <p className="text-xs text-gray-400">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-xs text-gray-400">Cambodia Time (ICT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Transform Your Retail Business?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve operational excellence and drive sustainable
                growth.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">© {currentYear} Turning Point Retail. All rights reserved.</p>
                <p className="text-gray-500 text-xs mt-1">Powered by Innovation & Excellence</p>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                <a
                  href="https://www.instagram.com/turningpointretail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/turningpointretail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/turningpointretail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
