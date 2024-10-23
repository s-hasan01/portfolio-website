import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "InnScience Labs Inc.",
    description: `Prototyped website using Figma, and implemented responsive front-end using HTML, CSS and JavaScript. Developed and maintained backend services using Django, integrated with an SQLite database to manage application data. Implemented RESTful APIs for seamless communication between the frontend and backend.`,
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Django", "REST", "SQLite"],
  },
  {
    year: "2021 - Present",
    role: "Accounts & Sales Consultant",
    company: "Bell Canada",
    description: `Specialized in Business and IT consultation for wireless services. Utilized tools such as Power BI for data insights, Statflo for enhancing customer engagement, Salesforce for effective customer relationship management, and Oracle Database for robust data management. Identified growth opportunities and delivered customized presentations, therefore ensuring high retention. Focused on proactive account management to foster long-term client relationships and deliver exceptional value.`,
    technologies: ["Power BI", "Salesforce", "Statflo", "Oracle Database"],
  },
  {
    year: "2021 - Present",
    role: "Software Development Tutor",
    company: "Self-Employed",
    description: `Provided tutoring in Software Development for students ranging from Grade 11 to first-year University, focusing on programming concepts and application development. Instructed students in topics such as Object-Oriented Programming, Algorithms and Data Structures, fostering a solid foundation in computational thinking. Guided learners in hands-on application development using frameworks and languages including React, .NET, Python, and Java.`,
    technologies: [".NET", "React", "Java", "Python","PosgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Mario Platformer Game",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://github.com/s-hasan01/Mario",
  },
  {
    title: "7-Day Forecast Weather App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://github.com/s-hasan01/WeatherApp",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://github.com/s-hasan01/personal-website",
  },
];