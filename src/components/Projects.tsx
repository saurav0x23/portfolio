import React from "react";
import image from "../assets/projects/project.png";
interface ProjectProps {
  description: string; // Short description of the project
  link: string; // Link to the project
  name: string; // Name of the project
  techUsed: string[]; // Technologies used
  pages: number; // Number of pages
}

const ProjectCard: React.FC<ProjectProps> = ({
  description,
  link,
  name,
  techUsed,
  pages,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full bg-gray-light rounded-lg mb-24">
      {/* Project Photo */}
      <div className="w-full flex justify-center mb-6 relative group cursor-pointer">
        <div className="relative inline-block w-full">
          <div className="relative z-10 overflow-hidden border-2 border-text rounded-2xl">
            <div className="absolute inset-0 rounded-lg border-4"></div>
            <img
              src={image}
              alt={name}
              className="relative w-full object-cover rounded-lg"
            />
          </div>
          <div
            className="absolute bottom-0 right-0 w-full h-full -mb-2 -mr-2 bg-secondary rounded-2xl transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0 cursor-pointer"
            data-rounded="rounded-2xl"
          ></div>
        </div>
      </div>
      {/* Project Info */}
      <div className="flex justify-between gap-12 w-full mb-16 p-2">
        {/* Left: Description */}
        <div className="text-left md:sticky md:top-40 self-start md:w-1/2">
          <div className="flex flex-wrap items-baseline">
            <h2 className="text-4xl font-bold text-text inline-flex items-baseline">
              {name}
              <span className="text-4xl font-bold mx-4">—</span>
            </h2>
            <p className="text-gray-dark text-4xl font-normal">{description}</p>
          </div>
        </div>
        {/* Right: Details */}
        <div className="space-y-6 w-[40%]">
          {/* Project Link */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Project Link
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors underline"
            >
              {link}
            </a>
          </div>

          {/* Project Name */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Project Name
            </h3>
            <p className="text-text text-base">{name}</p>
          </div>

          {/* Tech Used */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {techUsed.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Number of Pages */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Number of Pages
            </h3>
            <p className="text-text text-base">{pages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      image: "https://via.placeholder.com/800x400", // Replace with your project image
      description:
        "This is a short description of the project showcasing its purpose and functionality.",
      link: "https://example.com", // Replace with your project link
      name: "Project 1",
      techUsed: ["React", "Tailwind CSS", "Node.js"],
      pages: 5,
    },
    {
      image: "https://via.placeholder.com/800x400",
      description: "Another great project that solves a unique problem.",
      link: "https://example2.com",
      name: "Project 2",
      techUsed: ["Next.js", "Chakra UI", "Express"],
      pages: 3,
    },
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Projects
      </h1>
      <div className="space-y-12">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
