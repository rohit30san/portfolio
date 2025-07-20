import { motion } from "framer-motion";
import ScrollFadeSection from "./ScrollFadeSection"; // adjust path as needed

const skills = [
  "React", "JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Express",
  "C/C++", "Python", "Data Structures", "Algorithms", "AI/ML", "Data Science"
];

const About = () => {
  return (
    <ScrollFadeSection
      id="about"
      className="min-h-screen py-28 px-6 bg-transparent text-white scroll-mt-24"
    >
      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">Work Experience</h2>

        {/* Uploom Co-Founder */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-md hover:shadow-lg transition mb-6">
          <h3 className="text-xl text-accent font-semibold">Co-Founder @ Uploom</h3>
          <p className="text-gray-300 mt-2">June 2024 – Present</p>
          <ul className="list-disc pl-6 mt-3 text-sm text-gray-400 space-y-2">
            <li>Co-founded Uploom to assist startups in automating workflows, improving productivity, and scaling efficiently.</li>
            <li>Built tailored web tools and internal dashboards using React, Node.js, PostgreSQL, and third-party APIs.</li>
            <li>Worked directly with clients to identify bottlenecks, automate repetitive tasks, and streamline business processes.</li>
          </ul>
        </div>

        {/* CODSOFT Internship */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl text-accent font-semibold">Frontend Developer Intern @ CODSOFT</h3>
          <p className="text-gray-300 mt-2">May 2025 – June 2025</p>
          <ul className="list-disc pl-6 mt-3 text-sm text-gray-400 space-y-2">
            <li>Built a Portfolio page and other UI projects.</li>
            <li>Improved fundamentals in layout, spacing, and mobile responsiveness.</li>
            <li>Collaborated through GitHub and improved component-based development skills.</li>
          </ul>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm shadow-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </ScrollFadeSection>
  );
};

export default About;
