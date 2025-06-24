"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            Stay Updated
          </div>

          <h2 className="heading-secondary mb-6">
            Get the Latest <span className="text-accent">Retail Insights</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Subscribe to our newsletter for industry trends, expert tips, and exclusive content delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  required
                />
              </div>
              <button type="submit" className="btn-primary flex items-center" disabled={isSubmitted}>
                {isSubmitted ? (
                  "Subscribed!"
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-slate-500 mt-6">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
