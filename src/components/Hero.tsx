import React from "react";

const Hero: React.FC = () => {
  const title = "Hi, I'm Saurav Pandey";
  const subtitle = "A Full-Stack Developer";
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-center px-6">
      {/* Logo */}
      <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center mb-20 shadow-xl">
        <span className="text-4xl font-bold text-gray-800">👨‍💻</span>
      </div>

      {/* Title - Appears Normally */}
      <h1 className="text-6xl font-extrabold text-black animate-blurUp">{title}</h1>

      {/* Subtitle - Wavy Animation */}
      <p className="mt-4 text-xl font-light overflow-hidden text-black">
        {subtitle.split(" ").map((word, index) => (
          <span
            key={index}
            className={`inline-block animate-waveUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </div>
  );
};

export default Hero;
