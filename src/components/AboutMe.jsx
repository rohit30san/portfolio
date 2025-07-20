import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="min-h-[90vh] py-28 px-6 bg-transparent text-white flex items-center scroll-mt-24"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center backdrop-blur-md bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-10">About Me</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          I’m currently pursuing <span className="text-accent font-semibold">Computer Engineering</span> at <span className="text-accent font-semibold">Thapar Institute of Engineering and Technology (TIET), Patiala</span>. I’m a passionate and driven full stack developer focused on creating elegant and high-performing web applications.
          <br /><br />
          With strong expertise in <span className="text-accent font-semibold">C/C++</span>, <span className="text-accent font-semibold">Python</span>, <span className="text-accent font-semibold">Data Structures</span>, and <span className="text-accent font-semibold">Algorithms</span>, I enjoy solving real-world problems and building intuitive user interfaces using tools like <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Tailwind CSS</span>, <span className="text-accent font-semibold">Node.js</span>, and <span className="text-accent font-semibold">PostgreSQL</span>.
          <br /><br />
          I'm also deeply interested in <span className="text-accent font-semibold">AI/ML</span> and actively expanding my knowledge to apply machine learning in impactful ways.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
