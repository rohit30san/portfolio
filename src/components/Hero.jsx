import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import resume from "../assets/resume1.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-4 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg"
      >
        Hi, I’m <span className="text-accent">Rohit</span> 👋
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8"
      >
        I am a passionate FullStack Developer proficient with PERN Stack, Tailwind, C/C++, Data Structures, Algorithms, Python and AI/ML.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex flex-wrap justify-center gap-4 mb-6"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-accent/90 text-black rounded-xl font-medium shadow-md hover:shadow-lg transition backdrop-blur-md"
        >
          View My Work
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-accent text-accent rounded-xl font-medium hover:bg-accent hover:text-black transition backdrop-blur-md"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-black transition backdrop-blur-md"
        >
          Hire Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex justify-center items-center gap-6 text-accent text-2xl"
      >
        <a
          href="https://github.com/rohit30san"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-sangwan-587654357/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/rohitsan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <SiLeetcode />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
