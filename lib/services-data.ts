import {
  Store,
  GraduationCap,
  Star,
  BarChart3,
  Building2,
  FileText,
  Laptop,
  Brain,
  Palette,
  ShoppingCart,
  Target,
  Zap,
  Shield,
  Globe,
  TrendingUp,
} from "lucide-react"

export interface ServiceData {
  id: string
  icon: any
  title: string
  description: string
  overview: string
  features: string[]
  benefits: string[]
  image: string
  testimonial?: {
    quote: string
    author: string
    company: string
  }
  caseStudy?: {
    title: string
    description: string
    results: string[]
  }
}

export const servicesData: ServiceData[] = [
  {
    id: "store-operations",
    icon: Store,
    title: "Store Operations",
    description:
      "Optimize your retail operations with proven systems and processes that drive efficiency and profitability.",
    overview:
      "Transform your retail operations with our comprehensive store management solutions. We help you streamline processes, optimize inventory, and create efficient workflows that maximize profitability while enhancing customer experience.",
    image: "/images/services/store-operations.jpg", // Updated path
    features: [
      "Inventory Management Systems",
      "Staff Scheduling & Training",
      "Performance Analytics & KPIs",
      "Cost Optimization Strategies",
      "Quality Control Processes",
      "Customer Flow Management",
    ],
    benefits: [
      "Reduce operational costs by 15-25%",
      "Improve inventory turnover",
      "Enhance staff productivity",
      "Increase customer satisfaction",
    ],
    testimonial: {
      quote:
        "Their store operations consulting transformed our efficiency. We saw a 20% reduction in costs within 3 months.",
      author: "Sarah Chen",
      company: "Fashion Forward Retail",
    },
  },
  {
    id: "skill-academy",
    icon: GraduationCap,
    title: "Skill Academy",
    description: "Comprehensive training programs for retail excellence and leadership development.",
    overview:
      "Empower your team with cutting-edge retail skills through our comprehensive Skill Academy. From frontline staff to senior management, we provide tailored training programs that drive performance and career growth.",
    image: "/images/services/skill-academy.jpg", // Updated path
    features: [
      "Leadership Development Programs",
      "Customer Service Excellence",
      "Sales Techniques & Upselling",
      "Digital Skills Training",
      "Product Knowledge Workshops",
      "Communication & Teamwork",
    ],
    benefits: [
      "Improve sales performance by 30%",
      "Reduce staff turnover",
      "Enhance customer satisfaction scores",
      "Build stronger leadership pipeline",
    ],
    testimonial: {
      quote:
        "The Skill Academy program elevated our team's capabilities beyond expectations. Sales increased by 35% post-training.",
      author: "Michael Rodriguez",
      company: "Premium Electronics Chain",
    },
  },
  {
    id: "customer-experience",
    icon: Star,
    title: "Customer Experience",
    description: "Create memorable experiences that drive customer loyalty and repeat business.",
    overview:
      "Design and implement customer experience strategies that differentiate your brand and build lasting relationships. We help you understand your customers' journey and create touchpoints that exceed expectations.",
    image: "/images/services/customer-experience.jpg", // Updated path
    features: [
      "Customer Journey Mapping",
      "Service Design & Standards",
      "Feedback Collection Systems",
      "Loyalty Program Development",
      "Omnichannel Experience",
      "Customer Satisfaction Metrics",
    ],
    benefits: [
      "Increase customer retention by 40%",
      "Boost average transaction value",
      "Improve Net Promoter Score",
      "Reduce customer complaints",
    ],
  },
  {
    id: "branding-identity",
    icon: Palette,
    title: "Branding & Identity",
    description: "Build strong brand presence that resonates with your target market.",
    overview:
      "Develop a compelling brand identity that stands out in the competitive retail landscape. From visual identity to brand messaging, we help you create a cohesive brand experience across all touchpoints.",
    image: "/images/services/branding-identity.jpg", // Updated path
    features: [
      "Brand Strategy Development",
      "Visual Identity Design",
      "Brand Guidelines Creation",
      "Market Positioning",
      "Brand Voice & Messaging",
      "Brand Experience Design",
    ],
    benefits: [
      "Increase brand recognition by 50%",
      "Command premium pricing",
      "Improve customer loyalty",
      "Differentiate from competitors",
    ],
  },
  {
    id: "retail-business-intelligence",
    icon: BarChart3,
    title: "Retail Business Intelligence",
    description: "Data-driven insights for informed decision making and strategic planning.",
    overview:
      "Harness the power of data to make informed business decisions. Our BI solutions provide real-time insights into sales performance, customer behavior, and market trends to drive strategic growth.",
    image: "/images/services/retail-business-intelligence.jpg", // Updated path
    features: [
      "Sales Analytics & Reporting",
      "Market Research & Analysis",
      "Performance Dashboards",
      "Trend Analysis & Forecasting",
      "Customer Behavior Analytics",
      "Competitive Intelligence",
    ],
    benefits: [
      "Improve decision-making accuracy",
      "Identify growth opportunities",
      "Optimize inventory levels",
      "Increase profit margins",
    ],
  },
  {
    id: "franchise-development",
    icon: Building2,
    title: "Franchise Development",
    description: "Scale your business through strategic franchise expansion and comprehensive support systems.",
    overview:
      "Expand your retail concept through proven franchise development strategies. We guide you through every step of the franchising process, from model development to ongoing support systems.",
    image: "/images/services/franchise-development.jpg", // Updated path
    features: [
      "Franchise Model Development",
      "Partner Selection & Screening",
      "Training System Creation",
      "Operations Manual Development",
      "Marketing Support Programs",
      "Ongoing Franchise Support",
    ],
    benefits: [
      "Accelerate business expansion",
      "Reduce capital requirements",
      "Maintain brand consistency",
      "Generate recurring revenue",
    ],
  },
  {
    id: "standard-operating-procedures",
    icon: FileText,
    title: "Standard Operating Procedures",
    description: "Streamline operations with comprehensive SOPs and quality standards.",
    overview:
      "Create standardized processes that ensure consistency, quality, and efficiency across all your retail operations. Our SOPs provide clear guidelines for every aspect of your business.",
    image: "/images/services/standard-operating-procedures.jpg", // Updated path
    features: [
      "Process Documentation",
      "Quality Standards Development",
      "Compliance Procedures",
      "Training Manual Creation",
      "Performance Metrics",
      "Continuous Improvement",
    ],
    benefits: [
      "Ensure operational consistency",
      "Reduce training time",
      "Improve quality control",
      "Facilitate business scaling",
    ],
  },
  {
    id: "retail-software-solutions",
    icon: Laptop,
    title: "Retail Software Solutions",
    description: "Technology solutions to modernize your operations and enhance efficiency.",
    overview:
      "Implement cutting-edge retail technology solutions that streamline operations, improve customer experience, and provide valuable business insights for data-driven decision making.",
    image: "/images/services/retail-software-solutions.jpg", // Updated path
    features: [
      "Point of Sale (POS) Systems",
      "Inventory Management Software",
      "Customer Relationship Management",
      "E-commerce Platform Integration",
      "Mobile App Development",
      "Cloud-based Solutions",
    ],
    benefits: [
      "Automate manual processes",
      "Improve operational efficiency",
      "Enhance customer experience",
      "Access real-time data insights",
    ],
  },
  {
    id: "ai-retail-analytics",
    icon: Brain,
    title: "AI Retail Analytics",
    description: "Leverage artificial intelligence for competitive advantage and predictive insights.",
    overview:
      "Harness the power of artificial intelligence to gain deeper insights into customer behavior, optimize pricing strategies, and predict market trends for strategic advantage.",
    image: "/images/services/ai-retail-analytics.jpg", // Updated path
    features: [
      "Predictive Analytics",
      "Customer Behavior Analysis",
      "Demand Forecasting",
      "Price Optimization",
      "Personalization Engines",
      "Automated Reporting",
    ],
    benefits: [
      "Increase sales by 25%",
      "Optimize inventory levels",
      "Improve customer targeting",
      "Reduce operational costs",
    ],
  },
  {
    id: "visual-merchandising",
    icon: Palette,
    title: "Visual Merchandising",
    description: "Create compelling product displays that drive sales and enhance brand experience.",
    overview:
      "Transform your retail space into a compelling brand experience through strategic visual merchandising. We help you create displays that attract customers and drive purchasing decisions.",
    image: "/images/services/visual-merchandising.jpg", // Updated path
    features: [
      "Store Layout Design",
      "Product Placement Strategy",
      "Seasonal Display Planning",
      "Brand Consistency Standards",
      "Window Display Concepts",
      "In-store Navigation",
    ],
    benefits: [
      "Increase sales per square foot",
      "Improve customer dwell time",
      "Enhance brand perception",
      "Boost impulse purchases",
    ],
  },
  {
    id: "ecommerce-integration",
    icon: ShoppingCart,
    title: "E-commerce Integration",
    description: "Seamlessly blend online and offline retail experiences for omnichannel success.",
    overview:
      "Create a unified retail experience across all channels. Our e-commerce integration solutions help you connect online and offline operations for seamless customer journeys.",
    image: "/images/services/ecommerce-integration.jpg", // Updated path
    features: [
      "Omnichannel Strategy Development",
      "Online Store Setup & Design",
      "Digital Marketing Integration",
      "Fulfillment Solutions",
      "Inventory Synchronization",
      "Customer Data Integration",
    ],
    benefits: [
      "Expand market reach",
      "Increase revenue streams",
      "Improve customer convenience",
      "Gain competitive advantage",
    ],
  },
  {
    id: "market-entry-strategy",
    icon: Target,
    title: "Market Entry Strategy",
    description: "Successfully launch in new markets across Southeast Asia with strategic planning.",
    overview:
      "Navigate new market entry with confidence through our comprehensive market entry strategies. We provide deep market insights and strategic planning for successful expansion.",
    image: "/images/services/market-entry-strategy.jpg", // Updated path
    features: [
      "Market Analysis & Research",
      "Competitive Landscape Assessment",
      "Entry Strategy Planning",
      "Risk Assessment & Mitigation",
      "Local Partnership Development",
      "Regulatory Compliance",
    ],
    benefits: [
      "Reduce market entry risks",
      "Accelerate time to market",
      "Optimize resource allocation",
      "Increase success probability",
    ],
  },
  {
    id: "digital-transformation",
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your retail operations with comprehensive digital solutions.",
    overview:
      "Transform your retail business for the digital age. Our digital transformation services help you leverage technology to improve operations, enhance customer experience, and drive growth.",
    image: "/images/services/digital-transformation.jpg", // Updated path
    features: [
      "Technology Roadmap Development",
      "System Integration & Migration",
      "Staff Training & Change Management",
      "Digital Process Optimization",
      "Cloud Infrastructure Setup",
      "Cybersecurity Implementation",
    ],
    benefits: [
      "Improve operational efficiency",
      "Enhance customer experience",
      "Reduce operational costs",
      "Future-proof your business",
    ],
  },
  {
    id: "risk-management",
    icon: Shield,
    title: "Risk Management",
    description: "Protect your business with comprehensive risk assessment and mitigation strategies.",
    overview:
      "Safeguard your retail business against potential risks through comprehensive risk management strategies. We help you identify, assess, and mitigate risks across all business operations.",
    image: "/images/services/risk-management.jpg", // Updated path
    features: [
      "Risk Assessment & Analysis",
      "Mitigation Strategy Development",
      "Insurance & Coverage Guidance",
      "Crisis Management Planning",
      "Business Continuity Planning",
      "Compliance Management",
    ],
    benefits: [
      "Protect business assets",
      "Ensure operational continuity",
      "Reduce insurance costs",
      "Maintain customer trust",
    ],
  },
  {
    id: "international-expansion",
    icon: Globe,
    title: "International Expansion",
    description: "Expand your retail presence across international markets with strategic guidance.",
    overview:
      "Successfully expand your retail business internationally with our comprehensive expansion strategies. We provide market insights, cultural adaptation guidance, and operational support.",
    image: "/images/services/international-expansion.jpg", // Updated path
    features: [
      "International Market Research",
      "Regulatory Compliance Support",
      "Cultural Adaptation Strategies",
      "Partnership Development",
      "Supply Chain Optimization",
      "Local Team Development",
    ],
    benefits: [
      "Access new revenue streams",
      "Diversify market presence",
      "Leverage economies of scale",
      "Build global brand recognition",
    ],
  },
  {
    id: "performance-optimization",
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Maximize efficiency and profitability across all retail operations.",
    overview:
      "Optimize every aspect of your retail performance through data-driven strategies and proven methodologies. We help you identify improvement opportunities and implement solutions that drive results.",
    image: "/images/services/performance-optimization.jpg", // Updated path
    features: [
      "KPI Development & Tracking",
      "Process Improvement Analysis",
      "Cost Reduction Strategies",
      "Revenue Growth Optimization",
      "Productivity Enhancement",
      "Continuous Improvement Programs",
    ],
    benefits: [
      "Increase profit margins",
      "Improve operational efficiency",
      "Enhance team productivity",
      "Achieve sustainable growth",
    ],
  },
]

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((service) => service.id === id)
}
