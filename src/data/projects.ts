export interface Project {
  title: string;
  description: string;
  gradient: string;
  technologies: string[];
  github?: string;
  live?: string;
  highlights: string[];
  featured?: boolean;
  presentationPdf?: string;
}

export const projects: Project[] = [
  {
    title: "Freight Shipment Delay Prediction System",
    description:
      "Machine learning project that predicts freight shipment delays using historical logistics data. Built an end-to-end analytics pipeline covering data preprocessing, feature engineering, model training, and performance evaluation to support proactive supply chain decisions.",
    gradient: "from-cyan-500/30 via-blue-600/20 to-purple-600/30",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn","Matplotlib", "Machine Learning","MySQL"],
    github: "https://github.com/Hariharan1723/Freight-Shipment-Delay-Prediction-System",
    highlights: [
      "Predicts shipment delays using Machine Learning",
      "Performs data preprocessing and feature engineering",
      "Evaluates model performance with business-focused metrics",
    ],
    featured: true,
    presentationPdf: "/presentation/Freight Shipment Delay Prediction System.pdf",
  },
  {
    title: "Social Media Engagement SQL Analytics",
    description:
      "SQL analytics project focused on extracting actionable insights from social media engagement data. Developed optimized SQL queries to analyze user behavior, engagement trends, and content performance.",
    gradient: "from-purple-500/30 via-violet-600/20 to-cyan-500/30",
    technologies: ["MySQL", "SQL", "ETL","Data Analysis", "Business Analytics"],
    github: "https://github.com/Hariharan1723/social-media-engagement-sql",
    highlights: [
      "Advanced SQL queries for business insights",
      "User engagement and content analysis",
      "Optimized reporting using relational databases",
    ],
  },
  {
    title: "Logistics Operations Analytics - Power BI",
    description:
      "Business analytics project that transforms logistics operational data into meaningful insights using dashboards and KPI analysis. Focused on improving operational visibility and supporting data-driven decision making",
    gradient: "from-emerald-500/20 via-cyan-500/20 to-blue-600/30",
    technologies: ["Power BI","Python", "Excel", "Data Analytics", "Logistics"],
    github: "https://github.com/Hariharan1723/Logistics-Operations-Analytics",
    highlights: [
      "Logistics KPI analysis",
      "Operational performance dashboards",
      "Business insights for supply chain optimization",
    ],
    presentationPdf: "/presentation/Logistics_Operations_PPT.pdf",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive business intelligence dashboard that visualizes sales performance, revenue trends, and key business metrics to support strategic decision-making.",
    gradient: "from-orange-500/20 via-pink-500/20 to-purple-600/30",
    technologies: ["Power BI", "Excel", "SQL", "MySQL","Data Visualization"],
    github: "https://github.com/Hariharan1723/Sales-Performance-Dashboard",
    live: "#",
    highlights: [
      "Interactive KPI dashboard",
      "Sales trend and revenue analysis",
      "Business performance visualization",
    ],
  },
];
