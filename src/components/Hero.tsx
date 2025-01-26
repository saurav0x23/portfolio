import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 backdrop-blur-lg bg-sky-900/20 rounded-xl p-6 border border-sky-400/20 shadow-xl">
      {/* Logo */}
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex justify-center items-center mb-8 shadow-2xl shadow-purple-500/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="text-4xl">👨‍💻</span>
      </motion.div>

      {/* Position Heading */}
      <motion.h2
        className="text-2xl font-semibold mb-4 tracking-wide uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Full Stack Web Developer
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I'm <span className="name text-nebula-secondary">Saurav Pandey</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-xl font-light text-gray-300 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {`Turning ideas into reality as a Full-Stack Developer passionate about creating interactive and efficient web solutions`
          .split(" ")
          .map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-waveUp"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
      </motion.p>

      {/* Tech Stack */}
      <motion.div
        className="mt-4 flex gap-3 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-gray-800/50 border border-gray-700 text-white"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-12 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#contact" className="relative group">
          <div className="px-6 py-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 backdrop-blur-sm transition-all hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
            <span className="text-gray-100 font-medium">Contact Me</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </a>

        <a href="#resume" className="relative group">
          <div className="px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 backdrop-blur-sm transition-all hover:border-purple-400 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
            <span className="text-gray-100 font-medium">Resume</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
