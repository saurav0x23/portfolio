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
      className="group border-2 border-white rounded-xl overflow-hidden shadow-[8px_8px_0_#fff] hover:shadow-[4px_4px_0_#fff] transition-all duration-200 bg-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Image */}
      <div className="relative h-96">
        <img
          src={image || "https://source.unsplash.com/random/800x400/?tech,code"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* View Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 px-4 py-2 bg-white text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
        >
          VIEW LIVE
        </a>
      </div>

      {/* Content */}
      <div className="p-8 bg-black">
        <div className="flex flex-col lg:flex-row gap-8 bg-black">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-6 bg-black">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              {name}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {techUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-bold bg-black border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 space-y-6">
            {/* Stats Card */}
            <div className="p-6 bg-black border-2 border-white rounded-lg shadow-[4px_4px_0_#fff]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-white rounded-full" />
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  Project Stats
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {pages}+ <span className="text-lg text-gray-300">Pages</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {techUsed.length}{" "}
                  <span className="text-sm text-gray-300">Technologies</span>
                </div>
              </div>
            </div>

            {/* External Link */}
            <div className="p-4 bg-black border-2 border-white rounded-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                Live Preview
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 font-bold underline underline-offset-4 transition-colors duration-150 break-all"
              >
                {new URL(link).hostname.replace("www.", "")}
              </a>
            </div>
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
    <section className="py-20 lg:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-block px-6 py-2 bg-black border-2 border-white rounded-lg mb-6 shadow-[4px_4px_0_#fff]">
            <span className="text-sm font-bold text-white uppercase tracking-widest">
              Featured Work
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white">
            MY PROJECTS
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing modern web development and
            design
          </p>
        </div>

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
