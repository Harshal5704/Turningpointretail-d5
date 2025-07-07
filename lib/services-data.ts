export interface Service {
  id: string
  title: string
  slug: string
  description: string
  image: string
  features: string[]
  benefits: string[]
  process: string[]
  cta: string
}

export const services: Service[] = [
  {
    id: "1",
    title: "Standard Operating Procedures",
    slug: "standard-operating-procedures",
    description: "Comprehensive SOPs that streamline operations, ensure consistency, and drive efficiency across all retail touchpoints.",
    image: "/images/services/standard-operating-procedures.jpg",
    features: [
      "Custom SOP Development",
      "Process Documentation",
      "Staff Training Protocols",
      "Quality Assurance Systems",
      "Performance Monitoring"
    ],
    benefits: [
      "Improved operational efficiency",
      "Consistent customer experience",
      "Reduced training time",
      "Better quality control",
      "Scalable business processes"
    ],
    process: [
      "Current Process Analysis",
      "Gap Identification",
      "SOP Design & Documentation",
      "Staff Training & Implementation",
      "Monitoring & Optimization"
    ],
    cta: "Streamline Your Operations"
  },
  {
    id: "2",
    title: "Store Operations",
    slug: "store-operations",
    description: "Optimize your store operations with our comprehensive solutions designed to enhance efficiency and customer satisfaction.",
    image: "/images/services/store-operations.jpg",
    features: [
      "Store Display Layout Plan",
      "Visual Merchandising",
      "Staff Scheduling Systems",
      "Customer Flow Optimization",
      "Loss Prevention Strategies"
    ],
    benefits: [
      "Increased sales conversion",
      "Enhanced customer experience",
      "Optimized staff productivity",
      "Reduced operational costs",
      "Improved store aesthetics"
    ],
    process: [
      "Store Assessment",
      "Layout Planning",
      "Implementation Strategy",
      "Staff Training",
      "Performance Review"
    ],
    cta: "Optimize Your Store"
  },
  {
    id: "3",
    title: "Risk Management",
    slug: "risk-management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your retail business from operational, financial, and market risks.",
    image: "/images/services/risk-management.jpg",
    features: [
      "Risk Assessment & Analysis",
      "Compliance Management",
      "Insurance Optimization",
      "Crisis Management Planning",
      "Financial Risk Mitigation"
    ],
    benefits: [
      "Reduced business vulnerabilities",
      "Regulatory compliance",
      "Lower insurance costs",
      "Prepared crisis response",
      "Protected profit margins"
    ],
    process: [
      "Risk Identification",
      "Impact Assessment",
      "Mitigation Strategy Development",
      "Implementation Planning",
      "Ongoing Monitoring"
    ],
    cta: "Secure Your Business"
  },
  {
    id: "4",
    title: "Performance Optimization",
    slug: "performance-optimization",
    description: "Data-driven performance optimization strategies that maximize efficiency, profitability, and growth potential.",
    image: "/images/services/performance-optimization.jpg",
    features: [
      "KPI Development & Tracking",
      "Performance Analytics",
      "Efficiency Improvement",
      "Profit Margin Enhancement",
      "Growth Strategy Implementation"
    ],
    benefits: [
      "Increased profitability",
      "Better decision making",
      "Improved efficiency",
      "Competitive advantage",
      "Sustainable growth"
    ],
    process: [
      "Performance Baseline Assessment",
      "KPI Definition",
      "Optimization Strategy",
      "Implementation & Training",
      "Continuous Improvement"
    ],
    cta: "Maximize Performance"
  },
  {
    id: "5",
    title: "Skill Academy",
    slug: "skill-academy",
    description: "Comprehensive training programs designed to elevate your team's skills and drive exceptional retail performance.",
    image: "/images/services/skill-academy.jpg",
    features: [
      "Leadership Development",
      "Sales Training Programs",
      "Customer Service Excellence",
      "Product Knowledge Training",
      "Digital Skills Development"
    ],
    benefits: [
      "Enhanced team performance",
      "Improved customer satisfaction",
      "Higher sales conversion",
      "Better employee retention",
      "Stronger leadership pipeline"
    ],
    process: [
      "Skills Assessment",
      "Training Program Design",
      "Interactive Learning Sessions",
      "Practical Application",
      "Performance Evaluation"
    ],
    cta: "Develop Your Team"
  },
  {
    id: "6",
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "Transform your retail business with cutting-edge digital solutions that enhance customer experience and operational efficiency.",
    image: "/images/services/digital-transformation.jpg",
    features: [
      "Digital Strategy Development",
      "Technology Integration",
      "E-commerce Solutions",
      "Mobile App Development",
      "Digital Marketing Automation"
    ],
    benefits: [
      "Enhanced customer reach",
      "Improved operational efficiency",
      "Better data insights",
      "Competitive advantage",
      "Future-ready business model"
    ],
    process: [
      "Digital Readiness Assessment",
      "Strategy Development",
      "Technology Selection",
      "Implementation & Integration",
      "Training & Support"
    ],
    cta: "Go Digital Today"
  },
  {
    id: "7",
    title: "Branding & Identity",
    slug: "branding-identity",
    description: "Create a compelling brand identity that resonates with your target audience and drives customer loyalty.",
    image: "/images/services/branding-identity.jpg",
    features: [
      "Brand Strategy Development",
      "Visual Identity Design",
      "Brand Guidelines Creation",
      "Marketing Collateral Design",
      "Brand Experience Optimization"
    ],
    benefits: [
      "Stronger brand recognition",
      "Increased customer loyalty",
      "Premium pricing capability",
      "Competitive differentiation",
      "Consistent brand experience"
    ],
    process: [
      "Brand Discovery Workshop",
      "Strategy Development",
      "Creative Design Process",
      "Brand Implementation",
      "Brand Management Support"
    ],
    cta: "Build Your Brand"
  },
  {
    id: "8",
    title: "Retail Business Intelligence",
    slug: "retail-business-intelligence",
    description: "Harness the power of data analytics to make informed decisions and drive strategic growth in your retail business.",
    image: "/images/services/retail-business-intelligence.jpg",
    features: [
      "Data Analytics & Reporting",
      "Sales Performance Analysis",
      "Customer Behavior Insights",
      "Inventory Analytics",
      "Predictive Modeling"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved forecasting accuracy",
      "Enhanced customer understanding",
      "Optimized inventory management",
      "Increased profitability"
    ],
    process: [
      "Data Assessment",
      "Analytics Platform Setup",
      "Dashboard Development",
      "Training & Implementation",
      "Ongoing Support & Optimization"
    ],
    cta: "Unlock Your Data"
  },
  {
    id: "9",
    title: "Franchise Development",
    slug: "franchise-development",
    description: "Comprehensive franchise development solutions to scale your retail concept and build a successful franchise network.",
    image: "/images/services/franchise-development.jpg",
    features: [
      "Franchise Model Development",
      "Legal Documentation",
      "Brand Negotiations",
      "Franchisee Recruitment",
      "Ongoing Support Systems"
    ],
    benefits: [
      "Rapid business expansion",
      "Reduced capital requirements",
      "Diversified revenue streams",
      "Brand growth acceleration",
      "Market penetration"
    ],
    process: [
      "Franchise Feasibility Study",
      "Business Model Development",
      "Legal Framework Creation",
      "Marketing & Recruitment",
      "Launch & Support"
    ],
    cta: "Expand Your Franchise"
  },
  {
    id: "10",
    title: "Customer Experience",
    slug: "customer-experience",
    description: "Design and implement customer experience strategies that create memorable interactions and drive loyalty.",
    image: "/images/services/customer-experience.jpg",
    features: [
      "Customer Journey Mapping",
      "Experience Design",
      "Service Excellence Training",
      "Feedback Systems",
      "Loyalty Program Development"
    ],
    benefits: [
      "Increased customer satisfaction",
      "Higher customer retention",
      "Improved word-of-mouth marketing",
      "Enhanced brand reputation",
      "Increased lifetime value"
    ],
    process: [
      "Customer Research",
      "Journey Analysis",
      "Experience Strategy",
      "Implementation & Training",
      "Continuous Improvement"
    ],
    cta: "Enhance Customer Experience"
  },
  {
    id: "11",
    title: "Market Entry Strategy",
    slug: "market-entry-strategy",
    description: "Strategic market entry planning and execution to successfully launch your retail business in new markets.",
    image: "/images/services/market-entry-strategy.jpg",
    features: [
      "Market Research & Analysis",
      "Competitive Intelligence",
      "Entry Strategy Development",
      "Risk Assessment",
      "Launch Planning"
    ],
    benefits: [
      "Reduced market entry risks",
      "Faster market penetration",
      "Competitive positioning",
      "Optimized resource allocation",
      "Higher success probability"
    ],
    process: [
      "Market Analysis",
      "Strategy Development",
      "Risk Assessment",
      "Implementation Planning",
      "Launch Execution"
    ],
    cta: "Enter New Markets"
  },
  {
    id: "12",
    title: "International Expansion",
    slug: "international-expansion",
    description: "Navigate the complexities of international retail expansion with our comprehensive global market entry solutions.",
    image: "/images/services/international-expansion.jpg",
    features: [
      "Global Market Analysis",
      "Cultural Adaptation Strategies",
      "Regulatory Compliance",
      "Local Partnership Development",
      "Cross-border Operations"
    ],
    benefits: [
      "Global market access",
      "Diversified revenue streams",
      "Reduced market dependency",
      "Enhanced brand presence",
      "Economies of scale"
    ],
    process: [
      "Global Market Assessment",
      "Entry Strategy Development",
      "Local Adaptation Planning",
      "Partnership & Compliance",
      "Launch & Scale"
    ],
    cta: "Go Global"
  },
  {
    id: "13",
    title: "Visual Merchandising",
    slug: "visual-merchandising",
    description: "Create compelling visual displays that attract customers, enhance brand image, and drive sales performance.",
    image: "/images/services/visual-merchandising.jpg",
    features: [
      "Store Layout Design",
      "Product Display Strategies",
      "Window Display Creation",
      "Seasonal Merchandising",
      "Brand Consistency"
    ],
    benefits: [
      "Increased foot traffic",
      "Higher conversion rates",
      "Enhanced brand perception",
      "Improved product visibility",
      "Better customer engagement"
    ],
    process: [
      "Store Assessment",
      "Design Concept Development",
      "Implementation Planning",
      "Installation & Setup",
      "Performance Monitoring"
    ],
    cta: "Transform Your Displays"
  },
  {
    id: "14",
    title: "AI Retail Analytics",
    slug: "ai-retail-analytics",
    description: "Leverage artificial intelligence and machine learning to gain deeper insights and optimize your retail operations.",
    image: "/images/services/ai-retail-analytics.jpg",
    features: [
      "AI-Powered Analytics",
      "Predictive Modeling",
      "Customer Behavior Analysis",
      "Demand Forecasting",
      "Automated Insights"
    ],
    benefits: [
      "Advanced predictive capabilities",
      "Automated decision support",
      "Real-time insights",
      "Improved accuracy",
      "Competitive advantage"
    ],
    process: [
      "Data Infrastructure Setup",
      "AI Model Development",
      "Integration & Testing",
      "Training & Deployment",
      "Continuous Optimization"
    ],
    cta: "Embrace AI Analytics"
  },
  {
    id: "15",
    title: "Retail Software Solutions",
    slug: "retail-software-solutions",
    description: "Custom software solutions designed to streamline retail operations and enhance business efficiency.",
    image: "/images/services/retail-software-solutions.jpg",
    features: [
      "POS System Integration",
      "Inventory Management Software",
      "CRM Solutions",
      "Analytics Dashboards",
      "Mobile Applications"
    ],
    benefits: [
      "Streamlined operations",
      "Real-time data access",
      "Improved efficiency",
      "Better customer management",
      "Scalable solutions"
    ],
    process: [
      "Requirements Analysis",
      "Solution Design",
      "Development & Testing",
      "Implementation & Training",
      "Support & Maintenance"
    ],
    cta: "Digitize Your Operations"
  },
  {
    id: "16",
    title: "E-commerce Integration",
    slug: "ecommerce-integration",
    description: "Seamlessly integrate online and offline retail channels to create a unified omnichannel experience.",
    image: "/images/services/ecommerce-integration.jpg",
    features: [
      "Omnichannel Strategy",
      "Platform Integration",
      "Inventory Synchronization",
      "Order Management",
      "Customer Data Unification"
    ],
    benefits: [
      "Unified customer experience",
      "Increased sales channels",
      "Better inventory control",
      "Enhanced customer insights",
      "Competitive advantage"
    ],
    process: [
      "Channel Assessment",
      "Integration Strategy",
      "Technical Implementation",
      "Testing & Optimization",
      "Launch & Support"
    ],
    cta: "Integrate Your Channels"
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
