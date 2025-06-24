"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  const languages = ["EN", "KH", "VN", "TH"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <div>
              <div className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                Turning Point
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">Retail Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold text-base transition-all duration-300 relative group ${
                  pathname === item.href ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                <Globe className="w-5 h-5" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200 glass-effect rounded-b-2xl mt-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 font-semibold text-lg rounded-xl transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <div className="flex items-center space-x-2 text-slate-600 mb-3">
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">Language</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        lang === "EN" ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              <div className="px-4">
                <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
