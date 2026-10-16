export const portfolioData = {
  personal: {
    name: "Seshaan B P",
    eyebrow: "FREELANCE FULL-STACK DEVELOPER • MERN SPECIALIST",
    headline: "Building Scalable Web Apps & Digital Products That Drive Real Business Growth.",
    tagline: "I help founders, businesses, and startups build fast, reliable MERN stack web applications, custom CRM portals, and modern interactive user interfaces.",
    availability: "Available for Freelance Projects & Remote Contracts",
    location: "Karur, Tamil Nadu, India (IST • UTC+5:30)",
    phone: "+91 8124931018",
    whatsapp: "https://wa.me/918124931018?text=Hi%20Seshaan!%20I%20found%20your%20freelance%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    email: "seshaanbp2709@gmail.com",
    linkedin: "https://linkedin.com/in/seshaanbp",
    github: "https://github.com/Seshaan-B-P",
    resumeUrl: "/Seshaan_B_P_Resume.pdf",
    heroImage: "/hero-image.jpg",
    avatarImage: "/profile.jpg",
    turnaround: "Fast 1–3 Weeks Delivery",
    pricingModel: "Fixed Project or Milestone-Based",
    summary:
      "MCA candidate and freelance Full-Stack Engineer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in leading development teams, building production-grade web systems like custom CRMs with automated document generation and dental clinic EHR platforms. I deliver clean, maintainable code with high performance, robust security, and transparent communication."
  },

  freelanceTrustMetrics: [
    { value: "100%", label: "On-Time Delivery", description: "Strict adherence to agreed sprint milestones" },
    { value: "03+", label: "Production Web Apps", description: "Live client & academic deployments on Vercel" },
    { value: "01", label: "Hackathon Winner", description: "Genesis'26 Syntax2Code 1st Place Champion" },
    { value: "15.5k", label: "TCS CodeVita Rank", description: "Top percentile in global algorithmic coding" }
  ],

  services: [
    {
      id: "saas-apps",
      title: "Full-Stack Web & SaaS Apps",
      subtitle: "End-to-End MERN Development",
      description: "Custom, scalable web platforms built from scratch with React frontend, Node/Express backend, and high-performance MongoDB data models.",
      deliverables: [
        "Production-ready MERN Stack architecture",
        "Role-based access control (RBAC & JWT)",
        "Responsive, mobile-optimized layouts",
        "Continuous Deployment setup on Vercel/Cloud"
      ],
      popular: true,
      tag: "Most Requested"
    },
    {
      id: "crm-portals",
      title: "Custom CRM & Internal Portals",
      subtitle: "Operations & Analytics Systems",
      description: "Automate manual business workflows with tailor-made dashboard portals featuring dynamic charting, filtered data tables, and automated Excel/PDF document exports.",
      deliverables: [
        "Automated PDF & Excel report generators",
        "Interactive KPI charts and analytics",
        "Donor, patient, or client registry management",
        "Audit logging and multi-tier user roles"
      ],
      popular: false,
      tag: "Enterprise Value"
    },
    {
      id: "healthcare-ehr",
      title: "Clinic & Healthcare Portals",
      subtitle: "EHR & Appointment Systems",
      description: "Specialized Electronic Health Record platforms with patient histories, prescription tracking, and appointment scheduling engineered with clinic privacy in mind.",
      deliverables: [
        "Patient records & clinical history tracking",
        "Doctor scheduling and calendar workflows",
        "Accessible, high-contrast healthcare UI",
        "Zero-downtime cloud hosting configuration"
      ],
      popular: false,
      tag: "Specialized"
    },
    {
      id: "landing-websites",
      title: "High-Converting Business Websites",
      subtitle: "Fast, Modern & SEO-Ready",
      description: "Sleek, lightning-fast business showcases and portfolio websites built with modern React, Vite, and Tailwind CSS designed to turn visitors into paying clients.",
      deliverables: [
        "Sub-second load times & Core Web Vitals optimization",
        "Micro-animations and modern glassmorphism aesthetic",
        "Lead capture forms with direct WhatsApp/email triggers",
        "Full SEO tags, Open Graph, and mobile responsiveness"
      ],
      popular: false,
      tag: "Quick Turnaround"
    },
    {
      id: "api-backend",
      title: "API Engineering & DB Architecture",
      subtitle: "Robust Backend Infrastructure",
      description: "Clean, documented RESTful APIs with secure JWT authentication, input sanitization, and structured MongoDB schemas ready for web and mobile frontends.",
      deliverables: [
        "Modular RESTful API endpoints & Postman docs",
        "Secure password hashing & token authentication",
        "MongoDB schema design, indexing & aggregation",
        "Third-party webhook & payment integration readiness"
      ],
      popular: false,
      tag: "Backend Core"
    }
  ],

  calculatorPresets: {
    projectTypes: [
      { id: "saas", name: "Full-Stack SaaS / Web App", baseDays: 18, focus: "MERN Architecture & DB" },
      { id: "crm", name: "Custom CRM / Business Portal", baseDays: 14, focus: "Operations & Reporting" },
      { id: "ehr", name: "Clinic / Health EHR System", baseDays: 16, focus: "Clinical Records & Portals" },
      { id: "landing", name: "High-Speed Business Website", baseDays: 7, focus: "React + Tailwind Speed" }
    ],
    timelines: [
      { id: "rush", name: "Rush Delivery (Priority Sprint)", multiplier: 1.15, label: "⚡ Express Track" },
      { id: "standard", name: "Standard Delivery (Recommended)", multiplier: 1.0, label: "✨ Balanced Pace" },
      { id: "flexible", name: "Flexible Milestone Schedule", multiplier: 0.95, label: "🌱 Relaxed Milestones" }
    ],
    addOns: [
      { id: "pdf_export", name: "Automated PDF & Excel Export", extraDays: 2 },
      { id: "auth_rbac", name: "Role-Based Auth (Admin, Manager, User)", extraDays: 3 },
      { id: "whatsapp_notify", name: "Direct WhatsApp / Email Alerts", extraDays: 1 },
      { id: "analytics_dash", name: "Interactive Charts & KPI Dashboard", extraDays: 2 }
    ]
  },

  freelanceProcess: [
    {
      step: "01",
      title: "Discovery & Scope",
      description: "We review your core requirements, target users, deliverables, and timeline. I provide a fixed proposal with clear milestones."
    },
    {
      step: "02",
      title: "Interactive UI & Architecture",
      description: "We align on modern design aesthetics, component flow, and database schemas before writing a single line of backend logic."
    },
    {
      step: "03",
      title: "Agile Sprints & Live Demos",
      description: "I build the features in focused sprints with regular preview links, allowing you to test real functionality as it develops."
    },
    {
      step: "04",
      title: "Production Launch & Support",
      description: "Zero-downtime deployment on Vercel/Cloud, complete source code handover, documentation, and complimentary post-launch support."
    }
  ],

  projects: [
    {
      id: "eega-crm",
      category: "Full-Stack Custom CRM • Team Lead",
      title: "CRM System for EEGA Trust",
      clientType: "Non-Profit & Trust Operations",
      description:
        "Comprehensive custom CRM web application engineered to streamline trust operations with automated PDF/Excel report generation, granular multi-role management, and dynamic analytical dashboards.",
      highlights: [
        "Led a 3-member developer team from architectural scoping to live production deployment.",
        "Engineered secure JWT-based authentication and modular RESTful API endpoints.",
        "Built responsive React dashboards with dynamic charts and 1-click automated Excel/PDF document export.",
        "Designed and normalized scalable MongoDB schemas for donor and trustee data records."
      ],
      tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Vercel"],
      liveUrl: "https://eega-trust-crm.vercel.app/login",
      badge: "Team Lead",
      status: "Production Live"
    },
    {
      id: "smilecare-ehr",
      category: "Healthcare Platform • Team Lead",
      title: "SmileCare — Dental Clinic EHR",
      clientType: "Healthcare & Dental Clinics",
      description:
        "Specialized dental clinic Electronic Health Record (EHR) management platform designed to streamline patient records, clinical scheduling, treatments, and internal practice operations.",
      highlights: [
        "Directed a 3-member engineering team building end-to-end EHR clinical workflows.",
        "Designed clean, accessible, high-contrast clinic UI using React.js and Tailwind CSS.",
        "Integrated patient histories, treatment tracking, and doctor assignment modules.",
        "Optimized client-side rendering with continuous deployment on Vercel."
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
      liveUrl: "https://smile-care-rouge.vercel.app/",
      badge: "Team Lead",
      status: "Production Live"
    },
    {
      id: "bps-event",
      category: "Showcase & Booking Website",
      title: "BPS Event Management",
      clientType: "Events & Corporate Services",
      description:
        "Production-ready responsive web application crafted to showcase corporate & private event services, facilitate client inquiries, and provide dynamic package listings.",
      highlights: [
        "Architected reusable modern UI component system with React.js, Tailwind CSS, and Vite.",
        "Created an intuitive browsing experience with high performance and interactive service showcases.",
        "Deployed production build on Vercel with automated continuous delivery."
      ],
      tags: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "Vercel"],
      liveUrl: "https://event-management-eta-roan.vercel.app/",
      badge: "Full-Stack",
      status: "Production Live"
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind" },
      { name: "HTML5 / CSS3", level: "Advanced", icon: "html" },
      { name: "Responsive UI/UX", level: "Advanced", icon: "layout" },
      { name: "Vite", level: "Proficient", icon: "vite" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "node" },
      { name: "Express.js", level: "Advanced", icon: "express" },
      { name: "RESTful APIs", level: "Advanced", icon: "api" },
      { name: "JWT Authentication", level: "Advanced", icon: "lock" },
      { name: "Postman", level: "Proficient", icon: "postman" }
    ],
    databaseAndTools: [
      { name: "MongoDB", level: "Advanced", icon: "mongo" },
      { name: "SQL", level: "Intermediate", icon: "sql" },
      { name: "Git & GitHub", level: "Advanced", icon: "git" },
      { name: "Vercel Deployment", level: "Advanced", icon: "vercel" },
      { name: "Microsoft Access", level: "Intermediate", icon: "db" }
    ],
    languages: [
      { name: "JavaScript", type: "Core Web Language" },
      { name: "Python", type: "Scripting / Automation" },
      { name: "Java", type: "Object-Oriented Programming" },
      { name: "SQL", type: "Relational Queries" }
    ],
    workEthics: [
      "Daily asynchronous updates & clear progress logs",
      "Clean, modular, and well-commented codebases",
      "Prompt response time across WhatsApp and Email",
      "Flexible revision cycles until client satisfaction",
      "Full IP & source code transfer upon completion"
    ]
  },

  testimonials: [
    {
      quote:
        "Seshaan demonstrated outstanding leadership and technical prowess when building our EEGA Trust CRM. The automated PDF report generation and role management saved our team dozens of hours every month.",
      author: "Trust Operations Lead",
      role: "EEGA Trust CRM Stakeholder",
      tag: "Client Impact"
    },
    {
      quote:
        "Working with Seshaan on SmileCare was effortless. He has a rare ability to understand complex healthcare workflows and turn them into an intuitive, clean interface that doctors can use without training.",
      author: "Co-Developer & Peer",
      role: "SmileCare EHR Engineering Team",
      tag: "Collaboration"
    },
    {
      quote:
        "Recognized as Genesis'26 Hackathon Winner for creating a functional, elegant software prototype with clean architecture under extreme time pressure. A reliable developer who delivers under deadlines.",
      author: "Hackathon Jury",
      role: "Syntax2Code Powered by RMJ Solutions",
      tag: "Recognition"
    }
  ],

  experience: [
    {
      role: "Web Development Intern",
      company: "SkillCraft",
      period: "Aug 2026 – Sep 2026",
      type: "Internship",
      description: [
        "Gained hands-on experience in modern web development practices and contributed to core application development tasks.",
        "Collaborated with cross-functional team members to develop, test, debug, and implement user-friendly web features.",
        "Ensured responsive layouts and code maintainability across devices."
      ]
    },
    {
      role: "IT Support Intern",
      company: "NxtGen Instrument",
      period: "Dec 2024 – Jan 2025",
      type: "Internship",
      description: [
        "Diagnosed and resolved complex network, system, and hardware technical issues to maintain high system operational availability.",
        "Provided fast remote desktop support to resolve critical user queries and optimize internal IT operations."
      ]
    },
    {
      role: "Accounting & IT Operations Intern",
      company: "Kolanchinathan R (GST Practitioner)",
      period: "Dec 2022",
      type: "Internship",
      description: [
        "Assisted with financial audits and resolved ERP and taxation software operational issues efficiently.",
        "Supported computerized bookkeeping and compliance records management."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "M. Kumarasamy College of Engineering, Karur",
      period: "Pursuing (III Semester)",
      score: "79%",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Bishop Heber College, Tiruchirappalli",
      period: "Graduated 2025",
      score: "59.5%",
      status: "Completed"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cheran Matriculation Higher Secondary School",
      period: "Completed 2022",
      score: "75%",
      status: "Completed"
    }
  ],

  achievements: [
    {
      title: "Winner — Genesis’26 Hackathon",
      organization: "Syntax2Code, powered by RMJ Solutions Pvt. Ltd.",
      year: "2026",
      icon: "trophy",
      highlight: "Recognized for innovative software solution, teamwork, speed, and clean code under strict hackathon constraints."
    },
    {
      title: "Global Rank 15,511 — TCS CodeVita Season 13",
      organization: "Tata Consultancy Services (TCS)",
      year: "2026",
      icon: "code",
      highlight: "Competed internationally against tens of thousands of programmers showcasing algorithmic problem solving."
    }
  ],

  certifications: [
    { title: "Certificate of Participation", issuer: "Adobe University Hackathon (Adobe, Unstop)", year: "2026" },
    { title: "SQL (Intermediate)", issuer: "HackerRank", year: "2025" },
    { title: "Coding: Development & Advanced Engineering", issuer: "Accenture / Forage", year: "2025" },
    { title: "Machine Learning Foundations Training Badge", issuer: "AWS Educate", year: "2025" },
    { title: "AI & GenAI @ Work", issuer: "HCLTech", year: "2025" },
    { title: "Career Essentials in Data Analysis", issuer: "Microsoft & LinkedIn Learning", year: "2024" },
    { title: "Advanced Python: Working with Databases", issuer: "LinkedIn Learning", year: "2024" },
    { title: "Research Methodology & Conference Papers", issuer: "International Research Workshop (3-Day)", year: "2024" }
  ],

  faqs: [
    {
      question: "What is your typical turnaround time for a freelance project?",
      answer: "For a focused business website or landing page, typically 5–10 days. For custom web applications, MVPs, or full-stack CRMs with authentication and database architecture, delivery ranges from 2 to 4 weeks depending on the agreed scope."
    },
    {
      question: "How do we structure project milestones and payments?",
      answer: "We typically work on a 50/50 milestone basis (50% upfront upon roadmap sign-off, 50% upon final live deployment and approval) or broken down into sprint milestones for larger projects. I provide detailed invoices."
    },
    {
      question: "Do you provide post-launch support and revisions?",
      answer: "Yes! Every freelance project includes 14 to 30 days of complimentary bug fixes and support after delivery to make sure everything runs smoothly in production."
    },
    {
      question: "Do I get full ownership of the source code?",
      answer: "100% yes. All source code, design assets, and repository ownership are transferred completely to you upon project completion."
    },
    {
      question: "Can we integrate WhatsApp or custom notification systems?",
      answer: "Absolutely. I regularly integrate direct WhatsApp click-to-chat triggers, automated email alerts via Nodemailer/SendGrid, and document export systems (Excel & PDF)."
    }
  ]
};
