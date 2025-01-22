import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 bg-background text-text">
      {/* Logo */}
      <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center mb-8 shadow-xl">
        <span className="text-5xl font-bold text-white">👨‍💻</span>
      </div>

      {/* Position Heading */}
      <h2 className="text-2xl font-semibold mb-4 tracking-wide uppercase text-primary">
        Full Stack Web Developer
      </h2>

      {/* Main Title */}
      <h1 className="text-6xl font-extrabold text-primary animate-blurUp mb-4">
        I'm <span className="name">Saurav Pandey</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl font-light text-black">
        {`Turning ideas into reality as a Full-Stack Developer passionate about creating interactive and efficient web solutions`
          .split(" ")
          .map((word, index) => (
            <span
              key={index}
              className="inline-block animate-waveUp"
              style={{ animationDelay: `${index * 0.03}s` }} // Corrected template string usage
            >
              {word}&nbsp;
            </span>
          ))}
      </p>

      {/* Buttons - "Contact Me" and "Resume" */}
      <div className="mt-12 flex space-x-6">
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-text transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-primary"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Contact Me</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-text rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>

        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-text transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-300"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Resume</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-text rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
