import React from "react";
import { motion } from "framer-motion";
import image from "../assets/projects/project.png";

interface ProjectProps {
  description: string;
  link: string;
  name: string;
  techUsed: string[];
  pages: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  description,
  link,
  name,
  techUsed,
  pages,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mx-auto w-full lg:w-3/4 backdrop-blur-lg bg-gradient-to-br from-sky-900/20 to-purple-900/20 rounded-xl p-6 lg:p-8 border border-sky-200/20 shadow-galactic"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {/* Project Image */}
      <motion.div
        className="w-full mb-8 relative group"
        variants={imageHoverVariants}
        whileHover="hover"
      >
        <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-sky-400/30">
          <img
            src={image}
            alt={name}
            className="w-full h-48 lg:h-64 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-purple-900/20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-purple-400/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
      </motion.div>

      {/* Project Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-4">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ x: 5 }}
          >
            {name}
          </motion.h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 space-y-6">
          {/* Project Link */}
          <motion.div
            className="pb-4 border-b border-sky-400/20"
            whileHover={{ x: 5 }}
          >
            <h3 className="text-sm font-semibold text-sky-400 mb-2">
              PROJECT LINK
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-sky-300 transition-colors underline underline-offset-4"
            >
              {new URL(link).hostname}
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="pb-4 border-b border-sky-400/20"
            whileHover={{ x: 5 }}
          >
            <h3 className="text-sm font-semibold text-sky-400 mb-2">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {techUsed.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-sky-900/40 backdrop-blur-sm border border-sky-400/20 text-sky-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div whileHover={{ x: 5 }}>
            <h3 className="text-sm font-semibold text-sky-400 mb-2">PAGES</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-300">{pages}+ Interactive Pages</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      image: "https://via.placeholder.com/800x400",
      description:
        "A cosmic exploration platform built with cutting-edge web technologies.",
      link: "https://stellar-app.com",
      name: "Stellar Explorer",
      techUsed: ["React", "TypeScript", "Three.js", "Node.js"],
      pages: 8,
    },
    {
      image: "https://via.placeholder.com/800x400",
      description: "Intergalactic dashboard for monitoring space analytics.",
      link: "https://galaxy-dash.xyz",
      name: "Galaxy Dashboard",
      techUsed: ["Next.js", "Tailwind CSS", "GraphQL", "AWS"],
      pages: 12,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 backdrop-blur-lg bg-sky-900/20 rounded-xl p-6 border border-sky-400/20 shadow-xl">
      <motion.div
        className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cosmic Creations
        </motion.h2>

        {/* Project Cards */}
        <div className="space-y-20 lg:space-y-28">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
