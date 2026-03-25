import { Project, Experience, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Yaswanth Paruchuri",
  title: "Full-Stack Developer",
  email: "paruchuriyaswanth2002@gmail.com",
  phone: "+91 9949493894",
  linkedin: "https://www.linkedin.com/in/yaswanth-paruchuri-2b3472256",
  github: "https://github.com", // Placeholder as not explicitly in resume text but icon is there
  summary: "Detail-oriented Full-Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications. Successfully delivered 12+ live projects, specializing in React, Node.js, Express, and payment gateway integrations. Seeking opportunities to contribute to innovative teams while delivering high-quality solutions."
};

export const SKILLS = {
  languages: ["JavaScript", "HTML", "CSS", "TypeScript"],
  frameworks: ["React.js", "Node.js", "Express.js", "Vite", "Tailwind CSS"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Git/GitHub", "Postman", "VS Code", "Google Colab"],
  competencies: ["RESTful API Development", "Payment Integration", "Cloud Deployment", "UI/UX Design"]
};

export const PROJECTS: Project[] = [
  {
    title: "AriseForYou",
    role: "Full Stack Developer",
    url: "https://ariseforyou.com",
    description: [
      "Independently developed a startup-pitching platform for HCLTech and Pearson’s initiative for Gen Z entrepreneurs.",
      "Scaled the platform to handle thousands of student registrations and project submissions.",
      "Integrated PayU for secure fee collection and built an automated admin dashboard for application tracking."
    ]
  },
  {
    title: "ClashUps",
    role: "Full Stack Developer",
    url: "https://clashups.com",
    description: [
      "Built a comprehensive dance competition ecosystem with distinct portals for Participants, Judges, and Admins.",
      "Developed a complex round-based scoring algorithm and a real-time audience voting system.",
      "Implemented Razorpay-locked registration flows, ensuring revenue integrity for event organizers."
    ]
  },
  {
    title: "Utharamenon",
    role: "Full Stack Developer",
    url: "https://utharamenon.com",
    description: [
      "Developed a full-scale fashion e-commerce platform with dynamic inventory and order management.",
      "Integrated advanced filtering, search optimization, and a responsive checkout experience for mobile/desktop.",
      "Built an e-commerce platform with product listing, cart, checkout, and payments."
    ]
  },
  {
    title: "RCM Hire",
    role: "Admin — Full Stack Developer",
    url: "https://admin.rcmhire.com",
    description: [
      "Engineered 8 enterprise-grade admin modules including real-time analytics dashboards and master data management.",
      "Integrated APIs for real-time data handling and system reliability."
    ]
  },
  {
    title: "DigiDoc",
    role: "Frontend Developer",
    url: "#",
    description: [
      "Contributed to the development of a doctor-centric application for managing appointments, patient data, and analytics.",
      "Worked on dashboard modules featuring appointment statistics, doctor performance metrics, and analytic reports.",
      "Implemented appointment management workflows including booking, rescheduling, and status tracking."
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Junior Software Engineer",
    company: "Kartoffel Technologies",
    location: "Chennai, India",
    period: "Jan 2024 - Present",
    description: [
      "Architecting and maintaining scalable web applications using the MERN stack for diverse industry clients.",
      "Built and integrated RESTful APIs for seamless data flow and high performance.",
      "Spearheaded the integration of Razorpay and PayU gateways, facilitating seamless financial transactions.",
      "Optimized application performance, UI/UX responsiveness, and contributed to production deployments.",
      "Leading live production deployments and troubleshooting critical bugs to ensure zero-downtime releases."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Kongu Engineering College",
    period: "2022 - 2024",
    cgpa: "8.75"
  },
  {
    degree: "Bachelor of Computer Science (BSc)",
    college: "Emerald’s Degree College",
    period: "2019 - 2022",
    cgpa: "9.20"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Research Publication",
    description: "Prediction and Processing of Environment Geography Images Using Deep Learning - IEEE Xplore (ICSCNA 2023)."
  },
  {
    title: "First Prize",
    description: "National Level Paper Presentation on 'UPI123PAY' technology."
  },
  {
    title: "Leadership",
    description: "Additional Secretary of the Coding Club at Kongu Engineering College; organized 5+ hackathons."
  },
  {
    title: "Innovation",
    description: "Selected participant in RBI Harbinger 2021 Global Hackathon."
  }
];
