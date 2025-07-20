import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  description: string;
  link: string;
  name: string;
  techUsed: string[];
  pages: number;
  image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  description,
  link,
  name,
  techUsed,
  pages,
  image,
}) => {
  return (
    <motion.div
      id="#projects"
      className="group relative border-2 border-white rounded-xl overflow-hidden shadow-[8px_8px_0_#fff] hover:shadow-[4px_4px_0_#fff] transition-all duration-300 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={image || "https://source.unsplash.com/random/800x400/?tech,code"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* View Button */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 px-4 py-2 bg-white text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] transition-all"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -2, x: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.3 }}
        >
          VIEW LIVE
        </motion.a>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-4">
            <motion.h3
              className="text-3xl sm:text-4xl font-bold text-white"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techUsed.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-sm font-bold bg-black border-2 border-white rounded-lg text-white"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#111",
                    borderColor: "#60a5fa",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 space-y-6">
            {/* Stats Card */}
            <motion.div
              className="p-4 bg-black border-2 border-white rounded-lg shadow-[4px_4px_0_#fff]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-white uppercase">
                  PROJECT STATS
                </span>
              </div>
              <div className="text-3xl font-bold text-white">
                {pages}+ <span className="text-lg text-gray-300">PAGES</span>
              </div>
            </motion.div>

            {/* Link */}
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4"
              whileHover={{ x: 5 }}
            >
              {new URL(link).hostname.replace("www.", "")}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      image: "/madrasa.png",
      description:
        "Online E-learing platform for students around the world. It provides a dashboard for teachers and students to manage their learning experience. Its aim is to create a learning environment that is accessible to everyone, regardless of their location or background.",
      link: "https://madrasaplatform.com/",
      name: "Madrasa Platform",
      techUsed: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
      pages: 12,
    },
    {
      image: "/leading.png",
      description:
        "Landing Page for Leading Edge Drone Services. It provides a clean and modern design that is easy to navigate and understand. The website is built with Next.js and Tailwind CSS.",
      link: "https://myflightteam.com/",
      name: "Leading Edge Drone Services",
      techUsed: [
        "NEXT.JS",
        "TAILWIND",
        "VERCEL",
        "TYPESCRIPT",
        "NEXT API ROUTERS",
        "SHADCN UI",
      ],
      pages: 2,
    },
    // {
    //   image: "nftix.png",
    //   description:
    //     "Next-generation e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    //   link: "https://nftix-sigma.vercel.app/",
    //   name: "NFTix",
    //   techUsed: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
    //   pages: 6,
    // },
    {
      image: "nftix.png",
      description:
        "Next-generation e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      link: "https://nftix-sigma.vercel.app/",
      name: "NFTix",
      techUsed: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
      pages: 6,
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-black border-2 border-white rounded-lg mb-6 shadow-[4px_4px_0_#fff]"
            whileHover={{ y: -3, x: -3, shadow: "2px 2px 0 #fff" }}
          >
            <span className="text-sm font-bold text-white uppercase tracking-widest">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white">MY </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cutting-edge solutions built with modern technologies
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16 lg:space-y-20">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
