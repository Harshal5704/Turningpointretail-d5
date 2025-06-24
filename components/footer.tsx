import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-green-100 font-bold text-xl">TP</span>
              </div>
              <div>
                <div className="font-bold text-2xl text-green-100">Turning Point</div>
                <div className="text-sm text-green-300 font-medium tracking-wider uppercase">Retail Solutions</div>
              </div>
            </div>

            <p className="text-green-200 mb-8 max-w-md leading-relaxed text-lg">
              Transforming retail businesses across Southeast Asia through innovative strategies, operational
              excellence, and people-first training.
            </p>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-lg mb-4 text-green-100">Ready to Transform Your Business?</h4>
              <Link
                href="/contact"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-green-100">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/news", label: "News & Events" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-green-100 transition-colors font-medium hover:translate-x-1 transform inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-green-100">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-green-100">Address</div>
                  <div className="text-green-200 text-sm leading-relaxed">
                    No 101, Building 61, Street 57
                    <br />
                    BKK 1, Phnom Penh, Cambodia
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-green-100">Phone</div>
                  <div className="text-green-200">+855 86 844 464</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-green-100">Email</div>
                  <div className="text-green-200">info@turningpointretail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300">© 2024 Turning Point Retail Solutions. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-green-300 hover:text-green-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-green-300 hover:text-green-200 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
