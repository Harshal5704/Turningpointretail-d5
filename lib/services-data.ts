export interface Service {
  id: string
  title: string
  slug: string
  description: string
  image: string
  features: string[]
  benefits: string[]
  process: string[]
  caseStudy?: {
    title: string
    challenge: string
    solution: string
    results: string[]
  }
}

export const services: Service[] = [
  {
    id: "1",
    title: "Standard Operating Procedures",
    slug: "standard-operating-procedures",
    description:
      "Streamline your operations with comprehensive SOPs that ensure consistency, quality, and efficiency across all business processes.",
    image: "/images/services/standard-operating-procedures.jpg",
    features: [
      "Process Documentation",
      "Quality Standards",
      "Training Materials",
      "Performance Metrics",
      "Compliance Guidelines",
    ],
    benefits: [
      "Improved operational consistency",
      "Reduced training time",
      "Enhanced quality control",
      "Better compliance management",
      "Increased efficiency",
    ],
    process: [
      "Current process analysis",
      "Gap identification",
      "SOP development",
      "Staff training",
      "Implementation monitoring",
    ],
  },
  {
    id: "2",
    title: "Store Operations",
    slug: "store-operations",
    description:
      "Optimize your store operations with strategic planning and efficient management systems designed for maximum performance.",
    image: "/images/services/store-operations.jpg",
    features: [
      "Store Display Layout Plan",
      "Visual Merchandising",
      "Staff Scheduling",
      "Performance Monitoring",
      "Customer Flow Analysis",
    ],
    benefits: [
      "Enhanced customer experience",
      "Improved sales performance",
      "Better space utilization",
      "Increased operational efficiency",
      "Higher customer satisfaction",
    ],
    process: [
      "Store assessment",
      "Layout optimization",
      "Visual merchandising setup",
      "Staff training",
      "Performance tracking",
    ],
  },
  {
    id: "3",
    title: "Risk Management",
    slug: "risk-management",
    description:
      "Protect your business with comprehensive risk assessment and mitigation strategies tailored to the retail environment.",
    image: "/images/services/risk-management.jpg",
    features: [
      "Risk Assessment",
      "Security Protocols",
      "Insurance Planning",
      "Crisis Management",
      "Compliance Monitoring",
    ],
    benefits: [
      "Reduced business risks",
      "Enhanced security",
      "Better crisis preparedness",
      "Improved compliance",
      "Protected assets",
    ],
    process: [
      "Risk identification",
      "Impact assessment",
      "Mitigation planning",
      "Implementation",
      "Ongoing monitoring",
    ],
  },
  {
    id: "4",
    title: "Performance Optimization",
    slug: "performance-optimization",
    description:
      "Maximize your retail performance through data-driven insights and strategic improvements across all business areas.",
    image: "/images/services/performance-optimization.jpg",
    features: [
      "Performance Analytics",
      "KPI Development",
      "Process Improvement",
      "Resource Optimization",
      "ROI Enhancement",
    ],
    benefits: [
      "Increased profitability",
      "Better resource utilization",
      "Improved decision making",
      "Enhanced competitiveness",
      "Sustainable growth",
    ],
    process: [
      "Performance audit",
      "Benchmark analysis",
      "Improvement planning",
      "Implementation",
      "Results monitoring",
    ],
  },
  {
    id: "5",
    title: "Skill Academy",
    slug: "skill-academy",
    description:
      "Empower your team with comprehensive training programs designed to enhance skills and drive performance excellence.",
    image: "/images/services/skill-academy.jpg",
    features: [
      "Custom Training Programs",
      "Skills Assessment",
      "Leadership Development",
      "Customer Service Training",
      "Performance Coaching",
    ],
    benefits: [
      "Enhanced team capabilities",
      "Improved customer service",
      "Better leadership skills",
      "Increased employee satisfaction",
      "Higher retention rates",
    ],
    process: [
      "Skills assessment",
      "Training design",
      "Program delivery",
      "Progress monitoring",
      "Continuous improvement",
    ],
  },
  {
    id: "6",
    title: "Digital Transformation",
    slug: "digital-transformation",
    description:
      "Transform your retail business with cutting-edge digital solutions and technology integration strategies.",
    image: "/images/services/digital-transformation.jpg",
    features: [
      "Technology Assessment",
      "Digital Strategy",
      "System Integration",
      "Process Automation",
      "Change Management",
    ],
    benefits: [
      "Improved efficiency",
      "Enhanced customer experience",
      "Better data insights",
      "Competitive advantage",
      "Future-ready operations",
    ],
    process: [
      "Digital audit",
      "Strategy development",
      "Technology selection",
      "Implementation",
      "Training and support",
    ],
  },
  {
    id: "7",
    title: "Branding & Identity",
    slug: "branding-identity",
    description:
      "Build a strong brand identity that resonates with your target audience and differentiates you in the marketplace.",
    image: "/images/services/branding-identity.jpg",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Implementation"],
    benefits: [
      "Stronger brand recognition",
      "Improved customer loyalty",
      "Better market positioning",
      "Increased brand value",
      "Consistent brand experience",
    ],
    process: ["Brand audit", "Strategy development", "Design creation", "Implementation", "Brand monitoring"],
  },
  {
    id: "8",
    title: "Retail Business Intelligence",
    slug: "retail-business-intelligence",
    description:
      "Leverage data analytics and business intelligence to make informed decisions and drive strategic growth.",
    image: "/images/services/retail-business-intelligence.jpg",
    features: [
      "Data Analytics",
      "Reporting Dashboards",
      "Predictive Analytics",
      "Market Intelligence",
      "Performance Insights",
    ],
    benefits: [
      "Data-driven decisions",
      "Improved forecasting",
      "Better market understanding",
      "Enhanced performance",
      "Competitive insights",
    ],
    process: ["Data assessment", "Analytics setup", "Dashboard creation", "Training delivery", "Ongoing support"],
  },
  {
    id: "9",
    title: "Franchise Development",
    slug: "franchise-development",
    description:
      "Expand your business through strategic franchise development with comprehensive support and proven methodologies.",
    image: "/images/services/franchise-development.jpg",
    features: [
      "Franchise Strategy",
      "Brand Negotiations",
      "Legal Documentation",
      "Operational Support",
      "Marketing Assistance",
    ],
    benefits: [
      "Accelerated expansion",
      "Reduced investment risk",
      "Proven business model",
      "Ongoing support",
      "Brand consistency",
    ],
    process: [
      "Franchise planning",
      "Documentation preparation",
      "Partner recruitment",
      "Training delivery",
      "Ongoing support",
    ],
  },
  {
    id: "10",
    title: "Customer Experience",
    slug: "customer-experience",
    description:
      "Create exceptional customer experiences that drive loyalty, satisfaction, and long-term business success.",
    image: "/images/services/customer-experience.jpg",
    features: [
      "Customer Journey Mapping",
      "Experience Design",
      "Service Standards",
      "Feedback Systems",
      "Loyalty Programs",
    ],
    benefits: [
      "Higher customer satisfaction",
      "Increased loyalty",
      "Better retention rates",
      "Positive word-of-mouth",
      "Improved revenue",
    ],
    process: ["Experience audit", "Journey mapping", "Design improvements", "Implementation", "Continuous monitoring"],
  },
  {
    id: "11",
    title: "Market Entry Strategy",
    slug: "market-entry-strategy",
    description:
      "Successfully enter new markets with strategic planning, market analysis, and risk mitigation strategies.",
    image: "/images/services/market-entry-strategy.jpg",
    features: [
      "Market Research",
      "Competitive Analysis",
      "Entry Strategy",
      "Risk Assessment",
      "Implementation Planning",
    ],
    benefits: [
      "Successful market entry",
      "Reduced entry risks",
      "Competitive advantage",
      "Faster market penetration",
      "Sustainable growth",
    ],
    process: [
      "Market analysis",
      "Strategy development",
      "Risk assessment",
      "Implementation planning",
      "Launch support",
    ],
  },
  {
    id: "12",
    title: "International Expansion",
    slug: "international-expansion",
    description:
      "Expand your retail business globally with expert guidance on international markets and cross-border operations.",
    image: "/images/services/international-expansion.jpg",
    features: [
      "Global Market Analysis",
      "Cultural Adaptation",
      "Regulatory Compliance",
      "Supply Chain Setup",
      "Local Partnerships",
    ],
    benefits: [
      "Global market access",
      "Diversified revenue streams",
      "Reduced market dependency",
      "Enhanced brand presence",
      "Sustainable growth",
    ],
    process: ["Market selection", "Entry planning", "Regulatory compliance", "Local setup", "Launch execution"],
  },
  {
    id: "13",
    title: "Visual Merchandising",
    slug: "visual-merchandising",
    description:
      "Enhance your store's visual appeal and drive sales through strategic merchandising and display optimization.",
    image: "/images/services/visual-merchandising.jpg",
    features: ["Display Design", "Product Placement", "Store Layout", "Seasonal Campaigns", "Brand Consistency"],
    benefits: [
      "Increased sales",
      "Better product visibility",
      "Enhanced brand image",
      "Improved customer flow",
      "Higher conversion rates",
    ],
    process: ["Store assessment", "Design planning", "Implementation", "Staff training", "Performance monitoring"],
  },
  {
    id: "14",
    title: "AI Retail Analytics",
    slug: "ai-retail-analytics",
    description:
      "Harness the power of artificial intelligence to gain deeper insights into customer behavior and optimize operations.",
    image: "/images/services/ai-retail-analytics.jpg",
    features: [
      "AI-Powered Analytics",
      "Customer Behavior Analysis",
      "Predictive Modeling",
      "Automated Insights",
      "Real-time Monitoring",
    ],
    benefits: [
      "Advanced insights",
      "Predictive capabilities",
      "Automated decision making",
      "Improved accuracy",
      "Competitive advantage",
    ],
    process: [
      "Data preparation",
      "AI model development",
      "System integration",
      "Training delivery",
      "Ongoing optimization",
    ],
  },
  {
    id: "15",
    title: "Retail Software Solutions",
    slug: "retail-software-solutions",
    description:
      "Implement and optimize retail software solutions to streamline operations and enhance business performance.",
    image: "/images/services/retail-software-solutions.jpg",
    features: [
      "Software Selection",
      "System Integration",
      "Custom Development",
      "Training & Support",
      "Ongoing Maintenance",
    ],
    benefits: [
      "Streamlined operations",
      "Better data management",
      "Improved efficiency",
      "Enhanced reporting",
      "Scalable solutions",
    ],
    process: [
      "Requirements analysis",
      "Solution design",
      "Development/Implementation",
      "Testing & training",
      "Go-live support",
    ],
  },
  {
    id: "16",
    title: "E-commerce Integration",
    slug: "ecommerce-integration",
    description: "Seamlessly integrate e-commerce capabilities with your retail operations for omnichannel success.",
    image: "/images/services/ecommerce-integration.jpg",
    features: [
      "Platform Integration",
      "Omnichannel Strategy",
      "Inventory Synchronization",
      "Payment Processing",
      "Order Management",
    ],
    benefits: [
      "Expanded market reach",
      "Unified customer experience",
      "Increased sales channels",
      "Better inventory management",
      "Enhanced customer convenience",
    ],
    process: [
      "Platform assessment",
      "Integration planning",
      "Development & testing",
      "Launch preparation",
      "Ongoing optimization",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
