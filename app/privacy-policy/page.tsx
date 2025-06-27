"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us or using our services",
        "Business information related to your retail operations",
        "Communication records and correspondence",
        "Website usage data and analytics",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our consulting services",
        "To communicate with you about our services",
        "To analyze and enhance our website performance",
        "To comply with legal obligations",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell or rent your personal information to third parties",
        "We may share information with trusted service providers",
        "We may disclose information when required by law",
        "Business transfers may include customer information",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your information",
        "Regular security assessments and updates",
        "Encrypted data transmission and storage",
        "Limited access to personal information",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access to your personal information",
        "Correction of inaccurate information",
        "Deletion of your personal information",
        "Opt-out of marketing communications",
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
              <h1 className="heading-primary mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Privacy Policy Content */}
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
                      At Turning Point Retail, we are committed to protecting your privacy and ensuring the security of
                      your personal information. This Privacy Policy explains how we collect, use, disclose, and
                      safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      By using our services, you consent to the collection and use of information in accordance with
                      this policy. If you do not agree with our policies and practices, please do not use our services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Policy Sections */}
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

            {/* Contact Information */}
            <ScrollReveal>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-yellow-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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
