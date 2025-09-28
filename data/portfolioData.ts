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
      title: "IListaMo",
      description: "IListaMo is a modern, client-focused business management app that streamlines the creation of estimates and quotes, tracks client interactions, and generates professional PDF documents. Built with Next.js and Tailwind CSS, it features category-based item grouping, customizable currency, and a polished, user-friendly interface—empowering freelancers and small businesses to stay organized and look professional.",
      technologies: ["Next.js", "Tailwind"],
      liveUrl: "https://ilistamo.vercel.app",
      image: "/images/projects/ilistamo_app.png"
    },
    // {
    //   id: 2,
    //   title: "AI Notes Summarizer",
    //   description: "Upload or paste long notes and get concise summaries with topic extraction and highlights.",
    //   technologies: ["Next.js", "Node.js", "OpenAI API", "Redis"],
    //   githubUrl: "https://github.com/yourname/ai-notes-summarizer",
    //   liveUrl: "https://notes-summarizer.example.com",
    //   image: "/images/projects/ai-notes.jpg"
    // },
    // {
    //   id: 3,
    //   title: "Real-time Kanban Board",
    //   description: "Trello-like board with drag-and-drop, comments, and live presence using WebSockets.",
    //   technologies: ["React", "Socket.IO", "Express", "MongoDB"],
    //   githubUrl: "https://github.com/yourname/realtime-kanban",
    //   liveUrl: "https://kanban-live.example.com",
    //   image: "/images/projects/kanban.jpg"
    // },
    // {
    //   id: 4,
    //   title: "E-commerce Starter Kit",
    //   description: "Headless storefront with product search, cart, checkout, and admin CMS integration.",
    //   technologies: ["Next.js", "Stripe", "Sanity", "Vercel"],
    //   githubUrl: "https://github.com/yourname/ecommerce-starter",
    //   liveUrl: "https://shop-starter.example.com",
    //   image: "/images/projects/ecommerce.jpg"
    // },
    // {
    //   id: 5,
    //   title: "Weather Insights Dashboard",
    //   description: "Interactive weather visuals with historical trends, alerts, and location bookmarks.",
    //   technologies: ["Vue", "Vite", "OpenWeather", "Chart.js"],
    //   githubUrl: "https://github.com/yourname/weather-insights",
    //   liveUrl: "https://weather-insights.example.com",
    //   image: "/images/projects/weather.jpg"
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Generator CLI",
    //   description: "CLI tool that scaffolds a developer portfolio with sections, themes, and deploy scripts.",
    //   technologies: ["Node.js", "TypeScript", "Commander.js"],
    //   githubUrl: "https://github.com/yourname/portfolio-cli",
    //   liveUrl: "https://npmjs.com/package/@yourname/portfolio-cli",
    //   image: "/images/projects/cli.jpg"
    // }
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
  ],
  blog: {
    posts: [
      {
        title: "From Engineer to Developer: Lessons from the Lab",
        slug: "from-engineer-to-developer",
        date: "2025-08-10",
        tags: ["career", "engineering", "software"],
        excerpt:
          "How my background in electronics shaped the way I design and build software—focusing on systems thinking, testing, and real-world constraints.",
        content: [
          "Transitioning from electronics to software wasn’t a straight line. The biggest advantage I carried over was systems thinking: understanding inputs, outputs, failure modes, and how constraints drive design.",
          "In hardware, you learn to validate assumptions early because mistakes are expensive. I apply the same principle to code with small iterations, rapid feedback, and meaningful tests.",
          "I also lean heavily on observability—logs, metrics, and structured error handling—to treat software like a living system that needs monitoring and maintenance.",
          "If you’re pivoting careers, don’t discard your previous experience. Translate it. The mindset travels better than any specific tool or framework."
        ]
      },
      {
        title: "Building a Professional Portfolio with Next.js 15 and Tailwind v4",
        slug: "nextjs15-tailwindv4-portfolio",
        date: "2025-09-05",
        tags: ["nextjs", "tailwind", "portfolio"],
        excerpt:
          "A quick walkthrough of the tech choices and patterns behind this portfolio—App Router, server components, subtle animations, and clean data flow.",
        content: [
          "This site uses the Next.js App Router with server-first components for fast loads and simple data flow.",
          "Tailwind v4 keeps the UI consistent and maintainable. I favor small, composable utility classes plus a few custom helpers in globals.css.",
          "Framer Motion powers subtle, enter-only route transitions to keep navigation feeling smooth without being distracting.",
          "All content comes from a simple data module so it’s easy to iterate without a CMS while the project is evolving.",
          "I also used Copilot AI to accelerate the build—pairing on scaffolding, class name tweaks, and safe refactors—while I focused on structure, styling, and product decisions."
        ]
      },
      {
        title: "How I Built IListaMo in Record Time with Copilot AI",
        slug: "ilistamo-copilot-build",
        date: "2025-09-28",
        tags: ["copilot", "ai", "productivity", "ilistamo"],
        excerpt:
          "A look at how IListaMo was shipped fast using GitHub Copilot, with minimal manual coding and a focus on rapid feature delivery in today's app landscape.",
        content: [
          "IListaMo is a modern business management app for freelancers and small businesses. What makes its build unique is that I relied almost entirely on GitHub Copilot for the core scaffolding, UI, and even much of the business logic.",
          "Manual coding was kept to a minimum—Copilot handled repetitive patterns, React hooks, and even most of the Tailwind class composition. This let me focus on product design, user experience, and real-world features instead of boilerplate.",
          "In today's age, AI-assisted development means you can ship robust, feature-rich applications in a fraction of the time. IListaMo went from idea to production-ready MVP in days, not weeks.",
          "If you're not leveraging tools like Copilot, you're missing out on a massive productivity boost—especially for solo founders and indie hackers who need to move fast."
        ]
      }
    ]
  }
};