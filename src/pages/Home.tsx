import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }} // Only animate once
      >
        <Hero />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
    </div>
  );
};

export default Home;
