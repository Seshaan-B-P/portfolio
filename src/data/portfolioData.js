export const portfolioData = {
  personal: {
    name: "Seshaan B P",
    eyebrow: "MCA CANDIDATE • FULL-STACK DEVELOPER • SOFTWARE & IT ROLES",
    headline: "Building Scalable Web Systems & Solving Real-World Engineering Problems.",
    tagline: "MCA student at M. Kumarasamy College of Engineering (79%). Passionate about full-stack web applications, database architectures, and software engineering. Open for Software Engineer, Full-Stack Developer, and MCA Graduate / IT roles.",
    availability: "Open for Software & IT Roles | Campus Placements & Internships",
    location: "Karur, Tamil Nadu, India (IST • UTC+5:30)",
    phone: "+91 8124931018",
    whatsapp: "https://wa.me/918124931018?text=Hi%20Seshaan!%20I%20viewed%20your%20student%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
    email: "seshaanbp2709@gmail.com",
    linkedin: "https://linkedin.com/in/seshaanbp",
    github: "https://github.com/Seshaan-B-P",
    resumeUrl: "/Seshaan_B_P_Resume.pdf",
    heroImage: "/hero-image.jpg",
    avatarImage: "/profile.jpg",
    roleTarget: "Software Engineer / Full-Stack Developer / IT Associate",
    summary:
      "MCA candidate and Full-Stack Developer specializing in modern software technologies (MongoDB, Express.js, React.js, Node.js, SQL, Java, Python). Experienced in leading development teams, building production web platforms like custom CRMs and clinic EHR platforms, with hands-on internship experience in web development and IT technical support. Eager to contribute across Software Engineering, Web Development, and IT technology domains."
  },

  studentTrustMetrics: [
    { value: "79%", label: "MCA Academic Score", description: "Consistent academic excellence in computer applications" },
    { value: "03+", label: "Deployed Full-Stack Apps", description: "Live production web apps with full source code" },
    { value: "1st", label: "Genesis'26 Champion", description: "Syntax2Code 1st Place Hackathon Winner" },
    { value: "15.5k", label: "TCS CodeVita Rank", description: "Top percentile in global algorithmic coding" }
  ],

  services: [
    {
      id: "saas-apps",
      title: "Full-Stack Web Development",
      subtitle: "MERN Architecture & Microservices",
      description: "Designing and developing scalable web applications with React frontend, Node/Express backend, and high-performance MongoDB data models.",
      deliverables: [
        "Production MERN Stack architecture",
        "Role-based access control (RBAC & JWT)",
        "Responsive, mobile-optimized layouts",
        "Continuous Deployment setup on Vercel"
      ],
      popular: true,
      tag: "Core Focus"
    },
    {
      id: "crm-portals",
      title: "Custom Portals & Data Automation",
      subtitle: "Operations & Analytics Systems",
      description: "Engineering dashboards and data management tools with live analytics, dynamic charting, and automated Excel/PDF document exports.",
      deliverables: [
        "Automated PDF & Excel report generators",
        "Interactive KPI charts and analytics",
        "Donor, patient, or record registries",
        "Audit logging and multi-tier user roles"
      ],
      popular: false,
      tag: "Team Lead Project"
    },
    {
      id: "healthcare-ehr",
      title: "Healthcare Informatics & EHR",
      subtitle: "Clinical Records & Workflow Systems",
      description: "Specialized Electronic Health Record platforms with patient histories, prescription tracking, and appointment scheduling engineered with clinic privacy in mind.",
      deliverables: [
        "Patient records & clinical history tracking",
        "Doctor scheduling and calendar workflows",
        "Accessible, high-contrast healthcare UI",
        "Zero-downtime cloud hosting configuration"
      ],
      popular: false,
      tag: "Applied Engineering"
    },
    {
      id: "landing-websites",
      title: "Frontend Systems & UI/UX",
      subtitle: "React 18, Vite & Tailwind CSS",
      description: "Crafting fast, accessible, and responsive user interfaces with component-driven architecture, smooth micro-animations, and interactive 3D elements.",
      deliverables: [
        "Sub-second load times & Core Web Vitals optimization",
        "Modern dark mode & glassmorphism aesthetic",
        "Component-driven modular React architecture",
        "Full SEO tags, Open Graph, and mobile responsiveness"
      ],
      popular: false,
      tag: "Modern Frontend"
    },
    {
      id: "api-backend",
      title: "REST APIs & Database Design",
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

  engineeringProcess: [
    {
      step: "01",
      title: "Requirement Modeling",
      description: "Deconstructing complex real-world workflows into clear system specifications, entity diagrams, and functional requirements."
    },
    {
      step: "02",
      title: "Architecture & Schema",
      description: "Selecting optimal database schemas, structuring modular RESTful endpoints, and establishing authentication & security boundaries."
    },
    {
      step: "03",
      title: "Agile Implementation",
      description: "Writing modular, clean code following OOP & SOLID principles, reusable component patterns, and disciplined Git version control."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous functional testing, responsive cross-device verification, and continuous deployment to cloud environments like Vercel."
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
      "Strong computer science fundamentals & database design skills",
      "Fast self-learner able to master new frameworks and toolchains quickly",
      "Hands-on experience leading 3-member engineering teams in college",
      "Proven competitive programming & hackathon problem-solving skills",
      "Clean, modular, well-documented code with disciplined Git practices"
    ]
  },

  testimonials: [
    {
      quote:
        "Seshaan demonstrated outstanding leadership and technical prowess when building our EEGA Trust CRM. The automated PDF report generation and role management saved our team dozens of hours every month.",
      author: "Trust Operations Lead",
      role: "EEGA Trust CRM Stakeholder",
      tag: "Project Feedback"
    },
    {
      quote:
        "Working with Seshaan on SmileCare was effortless. He has a rare ability to understand complex healthcare workflows and turn them into an intuitive, clean interface that doctors can use without training.",
      author: "Co-Developer & Peer",
      role: "SmileCare EHR Engineering Team",
      tag: "Peer Review"
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
      question: "What types of roles and opportunities are you currently seeking?",
      answer: "I am actively open for full-time Software Engineer, Full-Stack Developer, Web Developer, Frontend/Backend Engineer, IT Associate, and Graduate Trainee roles, as well as technical internships starting immediately or upon graduation."
    },
    {
      question: "What is your academic status and graduation timeline?",
      answer: "I am pursuing my Master of Computer Applications (MCA) at M. Kumarasamy College of Engineering, Karur (currently in Semester III with a 79% score). I hold a B.Com degree graduated in 2025."
    },
    {
      question: "Are you open to relocation or remote opportunities?",
      answer: "Yes, absolutely! I am willing to relocate to major tech hubs across India (Bangalore, Chennai, Hyderabad, Pune, Mumbai, Delhi-NCR) as well as work in remote or hybrid setups."
    },
    {
      question: "Do you have experience working in or leading technical teams?",
      answer: "Yes. I served as the Team Lead for both the EEGA Trust CRM and SmileCare Dental EHR projects, directing 3-member developer teams through architecture, implementation, and deployment. I also led my team to win 1st Place at the Genesis'26 Syntax2Code Hackathon."
    },
    {
      question: "What are your core technical strengths and programming languages?",
      answer: "My strongest stack is Full-Stack MERN (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS. I also have solid problem-solving foundation in Java, Python, and SQL, and competed in TCS CodeVita Season 13 achieving an international rank of 15,511."
    }
  ]
};
