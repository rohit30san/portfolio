import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-transparent text-white scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">Contact Me</h2>
        <p className="text-gray-300 mb-10">
          Have a project, collaboration idea, or just want to connect? Drop me a message!
        </p>

        <form
          action="mailto:rohit30san@gmail.com"
          method="POST"
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/5 border border-white/5 placeholder-gray-400 text-white focus:outline-none transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/5 border border-white/5 placeholder-gray-400 text-white focus:outline-none transition-colors duration-300"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full max-w-md px-4 py-2 rounded-lg bg-white/5 border border-white/5 placeholder-gray-400 text-white focus:outline-none transition-colors duration-300"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-accent text-black font-medium rounded-xl hover:scale-105 hover:shadow-lg transition"
          >
            Send
          </button>
        </form>

        <div className="flex justify-center gap-6 text-accent text-2xl mt-10">
          <a href="https://github.com/rohit30san" target="_blank" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/rohitsan" target="_blank" className="hover:text-white transition">
            <SiLeetcode />
          </a>
          <a href="https://www.linkedin.com/in/rohit-sangwan-587654357/" target="_blank" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:rohit30san@gmail.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
