export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics",
    skills: ["Advanced Excel", "Data Cleaning", "Data Validation", "Data Analysis", "Report Automation","Dashboard Reporting"],
  },
  {
    category: "Programming",
    skills: ["Python", "Pandas", "NumPy", "SQL", "HTML", "Automation Scripts"],
  },
  {
    category: "Database",
    skills: ["MySQL", "Google BigQuery", "SQL Querying", "Data Modeling", "Query Optimization"],
  },
  {
    category: "Business Intelligence",
    skills: ["Power BI", "KPI Dashboards", "Data Visualization", "Business Reporting"],
  },
  {
    category: "Logistics & Business Process",
    skills: ["Ocean Freight", "Rate Management", "Freight Surcharges", "RMS Tool", "SOP Documentation"],
  },
  {
    category: "Leadership & Tools",
    skills: ["Team Leadership", "KPI Management", "Customer Communication", "Visual Studio Code", "Jupyter Notebook","Git"],
  },
];
