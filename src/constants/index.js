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
      title: "Agile",
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
      points: [
        "Built gRPC services in an investment management system using Java and Spring Boot, enhancing service communication speed by 40&#37; and improving performance reliability",
        "Elevated code reliability by increasing unit test coverage by 10&#37; using JUnit and Mockito, collaborating closely with the team to enhance maintainability through rigorous testing practices and effective mocking strategies",
        "Managed on back-patching of the application with the latest code using Perforce, coordinating with teams to ensure smooth integration of updates while maintaining clear communication to address challenges and ensure timely deployment",
      ],
    },{
      title: "Senior Software Developer",
      company_name: "Quanitphi",
      icon: quantiphi,
      iconBg: "#383E56",
      date: "October 2020 - September 2022",
      points: [
        "Architected cloud-native web app using Spring Boot, React, Redis Cache, and AWS services, transforming vendor management processes and reducing task completion time by 30&#37; through strategic automation",
        "Engineered a seamless CI/CD pipeline using Elastic Beanstalk, CloudFormation, and GitLab, which resulted in flawless application deployment on AWS and achieved an 80&#37; reduction in deployment time",
        "Streamlined ADFS (Active Directory Federation Services) login integration with AWS Cognito, Lambda functions, and AWS SNS, which ensured seamless and secure access for 45k users and led to a 10&#37; reduction in login time",
        "Mentored new team members by conducting detailed code walkthroughs, knowledge transfer sessions, and workshops, enhancing team collaboration and effectively communicating complex concepts for smoother onboarding and skill development",
      ],
    },
    {
      title: "Analyst, Software Developer",
      company_name: "Travelex",
      icon: travelex,
      iconBg: "#E6DEDD",
      date: "June 2020 - October 2020",
      points: [
        "Orchestrated the AWS migration from monolithic to microservices architecture by leveraging Docker containerization for scalability and achieving 25&#37; reduction in response latency",
        "Engaged in Agile Scrum environment, optimized business workflow resulting in a 20&#37; increase in efficiency, and built more than 10 REST APIs using Node Js, TypeScript, and AWS DynamoDb",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "TIAA GBS",
      icon: tiaa,
      iconBg: "#383E56",
      date: "July 2018 - June 2020",
      points: [
        "Crafted a <strong>Java-Spring MVC </strong> web app enabling TIAA advisors to create customized investment plans, leading to 10&#37; efficiency gain and heightened customer satisfaction",
        "Programmed the implementation of a Kafka-driven payment processing system for real-time transactions, fraud detection, and notifications, resulting in a notable 25&#37; reduction in payment processing time",
        "Resolved multiple high-priority Production issues, provided support in Production releases and delivered root causes through level 3 Incident Management, Service Requests, Change Management, and Jira stories",
        "Designed and executed automated testing processes, achieving a robust code coverage of 85&#37; and consistently reducing regression defects by 30&#37; in each release cycle",
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