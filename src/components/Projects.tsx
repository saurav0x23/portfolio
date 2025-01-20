import React from "react";

interface ProjectProps {
  image: string; // Project image URL
  description: string; // Short description of the project
  link: string; // Link to the project
  name: string; // Name of the project
  techUsed: string[]; // Technologies used
  pages: number; // Number of pages
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  description,
  link,
  name,
  techUsed,
  pages,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-6 w-full max-w-5xl bg-gray-light rounded-lg">
      {/* Project Photo */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-full max-w-3xl object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full sticky">
        {/* Left: Description */}
        <div className="text-left md:sticky md:top-16 self-start">
          {/* `top-16` ensures a gap before it becomes sticky */}
          <h2 className="text-2xl font-bold text-text mb-4">{name}</h2>
          <p className="text-gray-dark text-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right: Details */}
        <div className="space-y-4">
          {/* Project Link */}
          <div>
            <h3 className="text-sm font-semibold text-text">
              Project Link:
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline hover:text-primary"
            >
              {link}
            </a>
          </div>

          {/* Project Name */}
          <div>
            <h3 className="text-sm font-semibold text-gray-dark">
              Project Name:
            </h3>
            <p className="text-text">{name}</p>
          </div>

          {/* Tech Used */}
          <div>
            <h3 className="text-sm font-semibold text-secondary">
              Technologies Used:
            </h3>
            <ul className="list-disc ml-6 text-text">
              {techUsed.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Number of Pages */}
          <div>
            <h3 className="text-sm font-semibold text-secondary">
              Number of Pages:
            </h3>
            <p className="text-text">{pages}</p>
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
    <div className="p-8">
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
