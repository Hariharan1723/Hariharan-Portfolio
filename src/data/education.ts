export interface Education {
  degree: string;
  college: string;
  university: string;
  duration: string;
  location: string;
  grade?: string;
  //coursework: string[];
  //achievements: string[];
}

export const education: Education[] = [
  {
    degree: "Postgraduate Program in Data Science and Analytics",
    college: "Imarticus Learning ",
    university: "",
    duration: "2025 - 2026",
    location: "Chennai,India",
    grade: "80.4%",
    // coursework: [
    //   "Financial Management",
    //   "Investment Analysis & Portfolio Management",
    //   "Business Statistics",
    //   "Management Information Systems (MIS)",
    //   "Wealth Management",
    // ],
    // achievements: [
    //   "Completed specialization in Financial Management.",
    //   "Gained expertise in investment and portfolio analysis.",
    //   "Strengthened financial planning and analytical skills.",
    // ],
  },
  {
    degree: "MBA - Financial Management (Correspondence)",
    college: "Annamalai University",
    university: "Annamalai University",
    duration: "2020 - 2022",
    location: "Chidambaram,India",
    grade: "6.2 CGPA",
    // coursework: [
    //   "Financial Management",
    //   "Investment Analysis & Portfolio Management",
    //   "Business Statistics",
    //   "Management Information Systems (MIS)",
    //   "Wealth Management",
    // ],
    // achievements: [
    //   "Completed specialization in Financial Management.",
    //   "Gained expertise in investment and portfolio analysis.",
    //   "Strengthened financial planning and analytical skills.",
    // ],
  },
  {
    degree: "Bachelors of Commerce - General",
    college: "Agurchand Manmull Jain College",
    university: "Madras University",
    duration: "2016 - 2019",
    location: "Chennai , India",
    grade: "6.3 CGPA",
    // coursework: [
    //   "Corporate Accounting",
    //   "Human Resource Management",
    //   "Banking & Financial Services",
    //   "Indian Economy",
    //   "Digital Marketing",
    //   "Environmental Studies",
    // ],
    // achievements: [
    //   "Built a strong foundation in accounting and finance.",
    //   "Developed business and economic knowledge",
    //   "Enhanced analytical and problem-solving skills.",
    // ],
  }
];
