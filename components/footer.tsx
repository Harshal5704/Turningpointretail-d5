import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ArrowRight, Award, Users, TrendingUp, Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Standard Operating Procedures", href: "/services/standard-operating-procedures" },
    { name: "Store Operations", href: "/services/store-operations" },
    { name: "Performance Optimization", href: "/services/performance-optimization" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
    { name: "Franchise Development", href: "/services/franchise-development" },
    { name: "Customer Experience", href: "/services/customer-experience" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "News & Insights", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const industries = [
    "Fashion & Apparel",
    "Food & Beverage",
    "Electronics & Technology",
    "Health & Beauty",
    "Home & Lifestyle",
    "Sports & Recreation",
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/20 to-yellow-600/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Image
                src="/images/turning-point-new-logo.png"
                alt="Turning Point Retail Solutions"
                width={280}
                height={80}
                className="object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              Transforming retail businesses across Southeast Asia through innovative strategies, operational
              excellence, and people-first training programs.
            </p>

            {/* Business Highlights */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">23+</div>
                <div className="text-xs text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-slate-400">Brands Served</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">150%</div>
                <div className="text-xs text-slate-400">Avg Growth</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8">
              <h4 className="font-bold text-lg mb-3 text-white">Ready to Transform Your Business?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get expert consultation and start your retail transformation journey today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/turningpoint-retail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BD1c5XAna/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-200 group"
                >
                  <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/turningpoint_retail?igsh=MXUzYzEzZXcwdzlxaQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-200 group"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors font-medium hover:translate-x-1 transform inline-block duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors font-medium hover:translate-x-1 transform inline-block duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-lg mb-4 text-white">Industries We Serve</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry} className="text-slate-400 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold mb-2 text-white">Head Office</div>
                  <div className="text-slate-400 text-sm leading-relaxed">
                    Office no: 2602, 26th floor
                    <br />
                    Diamond twin towers, Koh Pich
                    <br />
                    Phnom Penh, Cambodia
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/fhauFtEvrKS6hN5E7?g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 text-sm mt-2 transition-colors"
                  >
                    View on Map
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Phone</div>
                  <div className="text-slate-400 text-sm">+855 86 844 464</div>
                  <div className="text-slate-500 text-xs mt-1">Mon-Fri: 9AM-6PM</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Email</div>
                  <div className="text-slate-400 text-sm">info@turningpointretail.com</div>
                  <div className="text-slate-500 text-xs mt-1">We reply within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 p-4 bg-slate-800 rounded-xl border border-slate-700">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400 text-xs mb-3">Get retail insights and industry updates</p>
              <Link
                href="/contact"
                className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
              >
                Subscribe to Newsletter →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <p className="text-slate-400 text-sm">
                © {currentYear} Turning Point Retail Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <span>Powered by</span>
              <span className="text-green-400 font-medium">Innovation & Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
