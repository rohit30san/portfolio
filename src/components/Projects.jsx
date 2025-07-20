import { motion } from "framer-motion";
import ScrollFadeSection from "./ScrollFadeSection"; // adjust path if needed

const projects = [
  {
    title: "TutorAI",
    description: "AI-powered learning platform with real-time tutoring.",
    tech: ["React", "Node.js", "PostgreSQL", "Express.js", "OpenRouter"],
    link: "https://ai-tutor-project.netlify.app/",
  },
  {
    title: "My Portfolio",
    description: "Awwwards-style animated developer portfolio.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://rohit30san-portfolio.netlify.app",
  },
  {
    title: "AI Chat VS Code Extension",
    description: "VS Code extension with React chat UI, AI codegen, @filename support.",
    tech: ["React", "WebView API", "OpenRouter", "VS Code API"],
    link: "https://github.com/rohit30san/vscode-extension",
  },
];

const Projects = () => {
  return (
    <ScrollFadeSection
      id="projects"
      className="min-h-screen py-28 px-6 bg-transparent text-white scroll-mt-24"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-lg hover:shadow-2xl hover:scale-[1.015] transition-all"
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-sm hover:text-white transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </ScrollFadeSection>
  );
};

export default Projects;
