import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    quantiphi,
    travelex,
    tiaa,
    carrent,
    jobit,
    tripguide,
    threejs,
    state
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Project",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id:"testimonial",
      title:"Testimonial"
    },
    {
      id: "contact",
      title: "Contact",
    },  
  ];
  
  const services = [
    {
      title: "4+ Years of SDE Industry Experience",
      icon: web,
    },
    {
      title: "Certifed AWS Developer Associate",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Co-op",
      company_name: "State Street",
      icon: state,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - June 2024",
      points:[
        "Architected and deployed scalable microservices using Spring Boot and gRPC, delivering seamless cross-service communication amplifying performance for high-demand financial applications",
        "Optimized transactional integrity and database performance with Spring Hibernate and JPA, eliminating data inconsistencies and reducing query times in high-traffic financial systems",
        "Elevated code reliability and raised test coverage by 10% through TDD methodologies (JUnit, Mockito), ensuring predictable behavior and swift defect resolution",
        "Developed multi-threaded backend systems employing the Executor Framework to minimize latency for concurrent financial data requests, enhancing real-time insights",
        "Revamped deployment pipelines with Docker containerization, Kubernetes orchestration, and GitHub Actions-based CI/CD, accelerating release cycles and boosting system reliability",
        "Built low-latency data pipelines with Apache Kafka, improving data flow reliability, throughput, and overall system performance"
    ],
    },{
      title: "Senior Software Developer",
      company_name: "Quanitphi",
      icon: quantiphi,
      iconBg: "#383E56",
      date: "October 2020 - September 2022",
      points: [
        "Architected a scalable vendor onboarding portal using Spring Boot, Spring JPA, Spring Security, React.js, TypeScript, and Redux, enabling secure and efficient vendor workflows",
        "Applied robust threading techniques to manage asynchronous tasks, including document verification, validations, and notifications, without impacting main throughput, ensuring high system performance and responsiveness.",
        "Expanded real-time ingestion for 1.8 million vehicles, delivering rapid event detection and actionable insights via Python microservices on Kinesis",
        "Integrated Redis Cache to minimize response times, enabling rapid lookups and smoothing peak-load performance",
        "Configured Aurora DB for high availability, low latency, ACID compliance, and real-time distributed updates",
        "Created an event-driven pipeline for IoT vehicle data, detecting speeding, seatbelt violations, and harsh braking via AWS Lambda, SQS, and Kinesis",
        "Accelerated geospatial data handling by partitioning 5,000+ OpenStreetMaps chunks in S3 and leveraging Athena queries, cutting processing times by 40%",
        "Devised comprehensive safety analytics to identify risky driving behaviors, utilizing telematics and fuel data correlation to reduce fleet incidents by 30%"
    ],
    },
    {
      title: "Analyst, Software Developer",
      company_name: "Travelex",
      icon: travelex,
      iconBg: "#E6DEDD",
      date: "June 2020 - October 2020",
      points: [
        "Engineered a unified middleware platform utilizing Node.js, TypeScript, Express, and gRPC, facilitating seamless real-time communication between 8+ backend systems and reducing integration time by 40%",
        "Implemented an event-driven architecture with AWS Kinesis and Amazon SNS, enabling the processing of over 10,000 transactions per minute and decreasing data latency by 30%",
        "Established comprehensive unit testing frameworks with Mocha, Jasmine, Chai, and Sinon, increasing code reliability and reducing bugs in production by 20%",
        "Automated CI/CD pipelines using CircleCI and AWS SAM (Serverless Application Model), accelerating deployment cycles by 50% and ensuring consistent, error-free releases",
        "Strengthened data persistence by integrating Amazon DynamoDB, achieving 99.99% uptime and enabling low-latency access for high-demand applications, ensuring system reliability and performance"
    ],
    },
    {
      title: "Software Engineer",
      company_name: "TIAA GBS",
      icon: tiaa,
      iconBg: "#383E56",
      date: "July 2018 - June 2020",
      points: [
        "Developed a robust wealth management portal using Spring Boot, Spring MVC, Spring JPA, Spring Security, and Angular, enabling financial advisors to efficiently manage customer financial data and create customized investment plans",
        "Utilized Java multithreading with the Executor Framework to fetch and aggregate information from multiple SQL procedures and third-party APIs, enhancing data processing efficiency by 35%",
        "Designed and implemented Splunk dashboards to monitor and analyze API performance in production, identifying high-latency and error-prone APIs, which led to targeted optimizations and a 20% reduction in error rates",
        "Containerized microservices and web applications using Docker as part of the cloud transformation initiative, ensuring consistent deployment across environments and facilitating scalable application growth.",
        "Built and maintained CI/CD pipelines with Jenkins and SonarQube, automating the build, test, and deployment processes, resulting in a 40% acceleration of deployment cycles and enhanced release reliability",
        "Created a Proof of Concept (POC) for Blue-Green deployment strategies using Kubernetes, enabling seamless, zero-downtime deployments and improving system availability by 25%",
        "Provided comprehensive production support and assisted in quarterly application releases, ensuring smooth deployments and minimizing downtime during release cycles",
        "Worked with Agile teams using JIRA to streamline sprint planning and improve project delivery",
        "Mentored four interns, offering guidance on backend development and DevOps practices, fostering their professional growth and integrating them effectively into the team"
    ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:`I was particularly impressed by Thompson's ability to handle even the toughest clients—effortlessly. His communication and software development skills are above par. He is a cloud tech enthusiastic individual and also the best solution provider for all the major technologies. His Full-stack development and business understanding skillsets are awesome which always helps the team to achieve the difficult task with ease. He is a quick learner which makes him an appreciated member of any team.As a team member or a leader, Thompson earns my highest recommendation.`,
      name: "Kush Hingol",
      designation: "Senior Software",
      company: "Weave HQ",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      url:"https://www.linkedin.com/in/kush-h-028103173"
    },
    {
      testimonial:`It was fantastic to work with Thompson, who is an exceptional blend of a Manager and Software Developer. He is not only a reliable and visionary leader, but also an inspiring team player.From scrum meetings to brainstorming on potential ideas, he got everything covered to ensure a clarity on the feature. Apart from that, his inputs on certain features have also proved to be valuable on the project.I rarely come across real talents who stand out like Thompson`,
      name: "Caje Rodrigues",
      designation: "Software Engineer",
      company: "Apple",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      url:"https://www.linkedin.com/in/rodriguescajetan"
    },
    {
      testimonial:
        "Thompson is one of the smartest, hardworking and sincere people I have had the pleasure of working with. He will go to great lengths to get the job done. Thompson is a worthy addition to any team.",
      name: "Ashish D'sa",
      designation: "CTO",
      company: "Arbor",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      url:"https://www.linkedin.com/in/ashish-dsa"
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  const skillsets=[
    {
      title: "Programming Languages",
      names: ["Java", "JavaScript", "Typescript", "Python"],
    },
    {
      title: "Backend Frameworks",
      names: [
        "Spring Boot",
        "Spring JPA",
        "Spring Hibernate",
        "Spring MVC",
        "Node Js",
        "Express JS",
        "GrpahQL",
        "HandleBars",
        "RESTful APIs",
        "Microservices",
        "Serverless Architecture",
        "Grpc"
      ],
    },
    {
      title: "Frontend Frameworks",
      names: [
        "React JS",
        "Redux",
        "React saga",
        "Next JS",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      title: "Databases",
      names: ["MySql", "Aurora DB", "Postgres", "MongoDB", "DynamoDB"],
    },
    {
      title: "Devops Tools",
      names: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git",
        "Github",
        "Gitlab",
        "NPM",
      ],
    },
    {
      title: "Cloud Platforms",
      names: ["AWS", "Google Cloud"],
    },
  ]
  export { services, technologies,skillsets, experiences, testimonials, projects };