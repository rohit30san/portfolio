import { motion } from "framer-motion";
import { forwardRef } from "react";

const ScrollFadeSection = forwardRef(({ id, children, className = "" }, ref) => {
  return (
    <motion.section
      id={id}
      ref={ref}
      className={`min-h-screen py-20 px-6 scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
});

export default ScrollFadeSection;
