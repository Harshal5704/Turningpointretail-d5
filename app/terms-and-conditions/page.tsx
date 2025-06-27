"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using our services, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services constitutes acceptance of modified terms",
      ],
    },
    {
      title: "Services Description",
      content: [
        "We provide retail consulting and business advisory services",
        "Services include but are not limited to strategic planning, operations optimization, and training",
        "Service delivery may vary based on client requirements and agreements",
        "We reserve the right to modify or discontinue services with notice",
      ],
    },
    {
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information for service delivery",
        "Cooperate with our team and follow recommended implementations",
        "Maintain confidentiality of proprietary methodologies and materials",
        "Make timely payments as agreed in service contracts",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All methodologies, frameworks, and materials remain our intellectual property",
        "Clients receive limited license to use materials for their business operations",
        "Reproduction or distribution of materials requires written permission",
        "Client data and business information remain the property of the client",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services",
        "We are not liable for indirect, consequential, or punitive damages",
        "Business results may vary and are not guaranteed",
        "Clients are responsible for implementation decisions and outcomes",
      ],
    },
    {
      title: "Confidentiality",
      content: [
        "We maintain strict confidentiality of all client information",
        "Non-disclosure agreements may be required for sensitive projects",
        "Client information is not shared with third parties without consent",
        "Confidentiality obligations survive termination of services",
      ],
    },
  ]

  return (
    <div className="animate-fade-in pt-32">
      {" "}
      {/* Increased padding to fix navbar overlap */}
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
                Legal
              </Badge>
              <h1 className="heading-primary mb-6">Terms & Conditions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Please read these terms and conditions carefully before using our services.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <ScrollReveal>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      These Terms and Conditions ("Terms") govern your use of Turning Point Retail's services and
                      website. These Terms apply to all visitors, users, and others who access or use our services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      By accessing or using our services, you agree to be bound by these Terms. If you disagree with any
                      part of these terms, then you may not access our services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}

            {/* Governing Law */}
            <ScrollReveal>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Governing Law</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      These Terms shall be interpreted and governed by the laws of Cambodia. Any disputes arising from
                      these Terms or our services shall be subject to the exclusive jurisdiction of the courts of
                      Cambodia.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-yellow-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Email:</strong> info@turningpointretail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +855 86 844 464
                      </p>
                      <p>
                        <strong>Address:</strong> Office no: 2602, 26th floor, Diamond twin towers, Koh Pich, Phnom
                        Penh, Cambodia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
