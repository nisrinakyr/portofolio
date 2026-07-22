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
      category: "Data & BI", 
      image: "/IBM HR Analytics Employee Attrition.jpeg" 
    },
    {
      name: "Digital Sales & CRM Transformation for Frozen Food SME",
      description: "Analyzed existing sales and customer management processes of an SME, identified CRM pain points, and designed a digital CRM solution integrating WhatsApp Business, Loyverse POS, and Make.com to centralize customer data, automate sales recording, and improve operational visibility.",
      link: "https://drive.google.com/file/d/1DbH0If8XMfCiaoRAJBS6NnFoyhCOFVZb/view?usp=drive_link",
      skills: ["CRM Analysis", "BPMN", "Requirements Gathering", "Stakeholder Interview", "Process Improvement"],
      category: "Business Analysis",
      image: "/CRM for SME Frozen Food.png"
    },
    {
      name: "Agile Scrum Management App",
      description: "Aplikasi internal untuk melacak sprint dan mengelola backlog tim developer.",
      link: "https://github.com/nisrinakyr/project3",
      skills: ["Jira", "Excel", "Product Management"],
      category: "Product & Project Management",
      image: "/preview-3.jpg"
    },
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
      title: "Data Analytics Professional Certificate",
      image: "/dummy-cert-1.jpg",
      description: "Sertifikasi komprehensif mengenai pemrosesan data, visualisasi, dan analisis menggunakan tools industri terkini.",
    },
    {
      title: "Business Intelligence Fundamental",
      image: "/dummy-cert-2.jpg",
      description: "Pemahaman mendalam tentang pemodelan data bisnis dan pembuatan dashboard interaktif untuk pengambilan keputusan.",
    },
    {
      title: "Agile Project Management",
      image: "/dummy-cert-3.jpg",
      description: "Sertifikasi metodologi Agile dan framework Scrum untuk mengelola pengembangan produk digital secara efisien.",
    },
  ],
}
