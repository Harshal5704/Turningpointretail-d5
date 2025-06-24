"use client"

import { TrendingUp, Users, Globe, Award, BarChart3, Target } from "lucide-react"
import { Counter } from "@/components/animations/counter"

export function RetailInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: 150,
      suffix: "%",
      description: "Average revenue increase for our clients within 12 months",
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Users,
      title: "Trained Staff",
      value: 5000,
      suffix: "+",
      description: "Retail professionals trained across Southeast Asia",
      color: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: Globe,
      title: "Countries Served",
      value: 8,
      suffix: "",
      description: "Active operations across Southeast Asian markets",
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Award,
      title: "Success Rate",
      value: 98,
      suffix: "%",
      description: "Client satisfaction and project success rate",
      color: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ]

  const achievements = [
    {
      icon: BarChart3,
      title: "Operational Excellence",
      description: "Streamlined operations for 200+ retail outlets across the region",
    },
    {
      icon: Target,
      title: "Strategic Growth",
      description: "Facilitated market expansion for 50+ franchise brands",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container-max">
        {/* Section Header - More Visible */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-white border-2 border-green-200 text-green-800 rounded-full text-lg font-bold mb-8 shadow-lg">
            <BarChart3 className="w-6 h-6 mr-3 text-green-600" />
            Retail Insights
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Proven Retail Insights Across
            <span className="block text-green-700 mt-2">Southeast Asia</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Our data-driven approach delivers measurable outcomes for retail businesses of all sizes.
          </p>
        </div>

        {/* Stats Grid - Enhanced Visibility */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {insights.map((insight, index) => (
            <div key={index} className="group">
              <div
                className={`bg-white rounded-3xl p-8 text-center shadow-xl border-2 ${insight.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`w-20 h-20 ${insight.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 ${insight.borderColor}`}
                >
                  <insight.icon className={`w-10 h-10 ${insight.color}`} />
                </div>

                <div className="mb-6">
                  <div className={`text-5xl font-black ${insight.color} mb-3`}>
                    <Counter end={insight.value} suffix={insight.suffix} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                </div>

                <p className="text-gray-600 text-base leading-relaxed font-medium">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements - Enhanced Visibility */}
        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6 p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
