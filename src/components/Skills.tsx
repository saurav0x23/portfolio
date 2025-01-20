import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Python", level: "Beginner" },
    { name: "Express", level: "Intermediate" },
    { name: "Next.js", level: "Advanced" },
    { name: "Docker", level: "Beginner" },
  ];

  return (
    <section id="skills" className="bg-secondary py-12">
      <div className="max-w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-text">
          My Skills
        </h2>

        {/* Infinite Sliding Row with Masking */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Original List */}
          <ul className="flex items-center justify-start animate-slideLeft space-x-28">
            {skills.map((skill, index) => (
              <li key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-text">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.level}</p>
              </li>
            ))}
          </ul>

          {/* Cloned List (same items) */}
          <ul
            className="flex items-center justify-start animate-slideLeft"
            aria-hidden="true"
          >
            {skills.map((skill, index) => (
              <li
                key={`clone-${index}`}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-text">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
