import mario from "../assets/projects/mario.png";
import weatherapp from "../assets/projects/weatherapp.png";
import portfolio from "../assets/projects/portfolio.png";

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "InnScience Labs Inc.",
    description: `Prototyped website using Figma, and implemented responsive front-end using HTML, CSS and JavaScript. Developed and maintained backend services using Django, integrated with an SQLite database to manage application data. Implemented RESTful APIs for seamless communication between the frontend and backend.`,
    technologies: ["JavaScript", "Figma", "Django", "REST", "SQLite"],
  },
  {
    year: "2021 - Present",
    role: "Sales Development Representative",
    company: "Bell Canada",
    description: `Specialized in Account Management, Lead Generation and Consultancy for Bell services. Utilized tools such as Power BI for data insights, Statflo for enhancing customer engagement, Salesforce for effective customer relationship management, and Oracle Database for robust data management. Identified growth opportunities and delivered customized presentations, therefore ensuring high retention. Focused on proactive account management to foster long-term client relationships and deliver exceptional value.`,
    technologies: ["Power BI", "Salesforce", "Oracle Database"],
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
    title: "Portfolio Website",
    image: portfolio,
    description:
        "Created a portfolio website utilizing technologies such as React, Node.js, HTML, and Tailwind CSS. Hosted website on cloud-platforms such as Vercel, GitHub Pages to ensure easy access, secure hosting. Automated inquiry submissions through Getform, streamlining form data collection.",
    technologies: ["React", "Node.js","Vercel","Getforms"],
    link: "https://github.com/s-hasan01/portfolio-website",
  },
  {
    title: "7-Day Forecast Weather App",
    image: weatherapp,
    description:
        "Developed a GUI application, integrated with OpenWeatherMap API, retrieving 7-day weather forecast for any city in Ontario. Utilized Pandas and Matplotlib for data visualization.",
    technologies: ["Python", "Tkinter", "API", "Pandas", "Matplotlib"],
    link: "https://github.com/s-hasan01/WeatherApp",
  },
  {
    title: "Mario Platformer Game",
    image: mario,
    description:
      "Developed a multi-level platformer game inspired by Super Mario Bros. Implemented Object-Oriented Design principles to ensure consistent structure and behavior of game components.",
    technologies: ["Python", "Pygame", "Sprites"],
    link: "https://github.com/s-hasan01/Mario",
  },

];