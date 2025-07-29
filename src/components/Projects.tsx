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
      className="group border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[6px_6px_0_#fff] sm:shadow-[8px_8px_0_#fff] lg:shadow-[12px_12px_0_#fff] hover:shadow-[3px_3px_0_#fff] sm:hover:shadow-[4px_4px_0_#fff] lg:hover:shadow-[6px_6px_0_#fff] transition-all duration-200 bg-black hover:translate-x-[3px] hover:translate-y-[3px] sm:hover:translate-x-[4px] sm:hover:translate-y-[4px] lg:hover:translate-x-[6px] lg:hover:translate-y-[6px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={image || "https://source.unsplash.com/random/800x400/?tech,code"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* View Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-white text-black font-black text-xs sm:text-sm lg:text-base rounded-lg sm:rounded-xl border-2 sm:border-3 lg:border-4 border-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] lg:shadow-[6px_6px_0_#000] hover:shadow-[1px_1px_0_#000] sm:hover:shadow-[2px_2px_0_#000] lg:hover:shadow-[3px_3px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] transition-all duration-150 uppercase tracking-wide"
        >
          View Live
        </a>

        {/* Project Number Badge */}
        {/* <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] lg:shadow-[6px_6px_0_#000]">
          <span className="text-black font-black text-sm sm:text-base lg:text-xl">
            {pages}
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-black">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {name}
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="text-xs sm:text-sm font-black text-gray-400 uppercase tracking-widest">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techUsed.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold bg-black border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-200 shadow-[2px_2px_0_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 space-y-4 sm:space-y-6">
            {/* Stats Card */}
            <motion.div
              className="p-4 sm:p-6 bg-black border-2 sm:border-3 border-white rounded-lg sm:rounded-xl shadow-[4px_4px_0_#fff] sm:shadow-[6px_6px_0_#fff]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">
                  Project Stats
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  {pages}+{" "}
                  <span className="text-sm sm:text-lg text-gray-300 font-bold">
                    Pages
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-black text-white">
                  {techUsed.length}{" "}
                  <span className="text-xs sm:text-sm text-gray-300 font-bold">
                    Technologies
                  </span>
                </div>
              </div>
            </motion.div>

            {/* External Link Card */}
            <motion.div
              className="p-4 sm:p-6 bg-black border-2 sm:border-3 border-white rounded-lg sm:rounded-xl shadow-[4px_4px_0_#fff] sm:shadow-[6px_6px_0_#fff]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-xs sm:text-sm font-black text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">
                Live Preview
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 font-bold text-sm sm:text-base underline underline-offset-4 decoration-2 hover:decoration-gray-300 transition-all duration-200 break-all block"
              >
                {new URL(link).hostname.replace("www.", "")}
              </a>
            </motion.div>

            {/* Additional Action Button */}
            {/* <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block px-4 sm:px-6 py-3 sm:py-4 bg-white text-black font-black text-sm sm:text-base text-center rounded-lg sm:rounded-xl border-2 sm:border-3 border-black shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] hover:shadow-[2px_2px_0_#000] sm:hover:shadow-[3px_3px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] transition-all duration-150 uppercase tracking-wide hover:bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Project
            </motion.a> */}
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
      name: "Madrasa Platform",
      link: "https://madrasaplatform.com/",
      description:
        "A global e-learning platform offering personalized dashboards for both students and teachers. Designed to make quality education accessible to everyone, regardless of location or background.",
      techUsed: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      pages: 12,
    },
    {
      image: "/skillsync.png",
      name: "SkillSync",
      link: "https://skillsync-ten.vercel.app/",
      description:
        "Upload your resume and let AI instantly enhance it. SkillSync matches you with tailored job opportunities from top companies—your career upgrade starts here.",
      techUsed: ["Next.js", "shadcn/ui", "Supabase", "AI Integration"],
      pages: 6,
    },
    {
      image: "/leading.png",
      name: "Leading Edge Drone Services",
      link: "https://myflightteam.com/",
      description:
        "Marketing website for a drone services company, with a sleek and professional design built for clarity and performance. Responsive and fully optimized for modern web.",
      techUsed: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "shadcn/ui",
        "Next API Routes",
        "Vercel",
      ],
      pages: 2,
    },
    {
      image: "/nftix.png",
      name: "NFTix",
      link: "https://nftix-sigma.vercel.app/",
      description:
        "A decentralized platform to mint secure NFT-based event tickets. Focuses on transparency, safety, and simplicity. Built with performance-first principles and modern UI.",
      techUsed: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      pages: 6,
    },
    {
      image: "/plastic.png",
      name: "Plastic Products Company",
      link: "https://plastic-products-company.vercel.app/",
      description:
        "Clean and minimal landing page for a plastic manufacturing business. Built for clarity, responsiveness, and a smooth user experience.",
      techUsed: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      pages: 1,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-28 xl:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-black border-2 sm:border-3 border-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 shadow-[4px_4px_0_#fff] sm:shadow-[6px_6px_0_#fff]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            MY PROJECTS
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A collection of projects showcasing modern web development and
            design
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          className="text-center mt-16 sm:mt-20 lg:mt-28 xl:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-6 sm:p-8 lg:p-10 bg-black border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-[8px_8px_0_#fff] sm:shadow-[12px_12px_0_#fff] lg:shadow-[16px_16px_0_#fff]">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Let's create something amazing together
            </p>
            <motion.button
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-black font-black text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] lg:shadow-[8px_8px_0_#000] hover:shadow-[2px_2px_0_#000] sm:hover:shadow-[3px_3px_0_#000] lg:hover:shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] sm:hover:translate-x-[3px] sm:hover:translate-y-[3px] lg:hover:translate-x-[4px] lg:hover:translate-y-[4px] transition-all duration-150 uppercase tracking-wide hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
