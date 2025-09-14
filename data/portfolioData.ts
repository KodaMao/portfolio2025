export const portfolioData = {
  personal: {
    name: "Leonel Felezario",
    title: "Full Stack Developer",
    email: "alex@example.com",
    location: "Manila, Philippines",
    about: "Full-Stack Developer proficient in Angular, TypeScript, .NET, and MSQL. Former Electronics Engineer with hands-on experience designing and installing physical systems, providing a strong foundation for understanding real-world software needs. Passionate about building efficient applications and exploring AI tools to enhance development workflows.",
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/leonel-f-6a6253187/",
    }
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Stripe, and MongoDB.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/images/project3.jpg"
    }
  ],
  skills: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Python", level: 70 },
    { name: "AWS", level: 65 }
  ],
  experience: [
    {
      company: "TechCorp Inc.",
      position: "Senior Developer",
      period: "2021 - Present",
      description: "Led frontend development for multiple client projects using React and Next.js."
    },
    {
      company: "StartUp XYZ",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Developed and maintained web applications using MERN stack."
    }
  ]
};