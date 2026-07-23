export const siteConfig = {
  name: "Nisrina Kamiliya Riswanto",
  title: "Information Systems Student",
  description: "Portfolio website of Nisrina Kamiliya Riswanto",
  accentColor: "#bf3853",
  social: {
    email: "nisrin4kr@gmail.com",
    linkedin: "https://linkedin.com/in/nisrinakamiliya/",
    github: "https://github.com/nisrinakyr",
  },
  aboutMe:
    "I am an Information Systems undergraduate with interests in data analytics, business analysis, and digital product development. I enjoy combining data, technology, and business understanding to solve problems and improve decision-making. Through academic and personal projects, I have gained experience in business intelligence, data visualization, and business process improvement.",
  skills: ["Python", "Excel", "Power BI", "SQL"],
  projects: [
    {
      name: "HR Employee Analytics Dashboard",
      description: "Built an HR Analytics Dashboard in Microsoft Excel using the IBM HR Employee Attrition dataset. The project covers data cleaning, validation, Pivot Table analysis, KPI reporting, and dashboard development to provide actionable HR insights.",
      link: "https://drive.google.com/file/d/18sVP6-01yq1EgZ3tflor4qFUUnE5_Gy0/view?usp=drive_link",
      skills: ["Microsoft Excel", "Data Cleaning", "Data Validation","Pivot Tables","Dashboard Development"],
      category: "Data", 
      image: "/IBM HR Analytics Employee Attrition.jpeg" 
    },
    {
      name: "Digital Sales & CRM Transformation for Frozen Food SME",
      description: "Analyzed existing sales and customer management processes of an SME, identified CRM pain points, and designed a digital CRM solution integrating WhatsApp Business, Loyverse POS, and Make.com to centralize customer data, automate sales recording, and improve operational visibility.",
      link: "https://drive.google.com/file/d/1DbH0If8XMfCiaoRAJBS6NnFoyhCOFVZb/view?usp=drive_link",
      skills: ["CRM Analysis", "BPMN", "Requirements Gathering", "Stakeholder Interview", "Process Improvement"],
      category: "Business",
      image: "/CRM for SME Frozen Food.png"
    },
    {
      name: "Business Performance Analytics Dashboard",
      description: "Developed an interactive Business Performance Dashboard using Power BI to monitor organizational KPIs based on the Balanced Scorecard framework. Performed data preparation, KPI development, and dashboard visualization to support performance evaluation and data-driven decision-making.",
      link: "https://drive.google.com/file/d/1GmtiavFU1gcbwBv0XNpMkSjGXTWZ9ajC/view?usp=drive_link",
      skills: ["Power BI", "DAX", "KPI Development", "Data Visualization", "Data Modeling"],
      category: "Data",
      image: "/Business Performance Analytics Dashboard.png"
    },
    {
      name: "Resource Scheduling Optimization",
      description: "Developed a resource scheduling optimization model using Python and Google OR-Tools to automate laboratory class scheduling under multiple operational constraints. Applied optimization algorithms to generate feasible schedules and improve resource allocation efficiency.",
      link: "https://drive.google.com/file/d/1gqtvXcdAauPUgkCrkC8eHtXDbYHBxosD/view?usp=drive_link",
      skills: ["Python", "Google OR-Tools", "Optimization Modeling", "Decision Analytics"],
      category: "Data",
      image: "/Resource Scheduling Optimization.png"
    },
    {
      name: "Medical Logistics Route Optimization System",
      description: "Developed a medical logistics route optimization system using Python to optimize healthcare distribution under real-world operational constraints. Implemented optimization algorithms and interactive geospatial visualization to improve routing efficiency and support data-driven logistics planning.",
      link: "https://drive.google.com/file/d/1nIYFKZzhig_4j7i_wBr5HrVvABDRg2vb/view?usp=drive_link",
      skills: ["Python", "Pandas","Route Optimization"],
      category: "Data",
      image: "/Medical Logistics Route Optimization System.png"
    }
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Institut Teknologi Sepuluh Nopember",
      degree: "Bachelor’s Degree in Information Systems",
      dateRange: "2023 - 2027 (Expected)",
     achievements: [
     //   "Graduated Magna Cum Laude with 3.8 GPA",
     //   "Dean's List all semesters",
     //   "President of Computer Science Club",
     ],
    },
  ],

  certificates: [
    {
      title: "Introduction to SAP S/4HANA with GBI 4.2",
      image: "/sertif SAP.png",
      description: "Completed SAP S/4HANA foundational training with hands-on exposure to integrated business processes, including Sales & Distribution, Materials Management, and Production Planning within the GBI 4.2 simulation environment.",
      link: "https://drive.google.com/file/d/1pi96i_RJXlOZcIdIVrupCJ8qPaBdAQnT/view?usp=sharing"
    },
  ],
}
