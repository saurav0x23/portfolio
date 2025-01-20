import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(50); // Scroll progress state

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Sync dark mode with localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode
    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Scroll progress listener
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 50;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center mx-auto">
      {/* Left Curve-Masked Div */}
      <div
        className="w-[24px] h-[24px] shadow-lg transition-transform duration-300 bg-secondary"
        style={{
          maskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M0 0 C100 30, 100 100, 100 100 L100 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
          WebkitMaskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M0 0 C100 50, 80 50, 100 100 L100 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
        }}
      ></div>

      {/* Navbar */}
      <nav className="w-[80%] p-1 flex items-center shadow-xl rounded-b-3xl border-b border-gray-300 transition-transform duration-300 bg-secondary text-text">
        {/* Icon */}
        <div className="h-12 w-12 rounded-full shadow-md bg-text"></div>

        {/* Scroll Progress Bar */}
        <div
          className="h-1 bg-gray-300 rounded-md"
          style={{
            width: `${scrollProgress}px`, // Dynamic scroll progress width
            transition: "width 0.1s ease-out",
            backgroundColor: "var(--text)", // Adjust this to match your desired color
            maxWidth: "400px", // Maximum width for the progress bar (you can adjust this value)
            margin: "0 25px", // Add space around the progress bar
          }}
        ></div>

        {/* Navbar Links */}
        <ul className="flex items-center justify-center ml-auto gap-12 px-8">
          <li>
            <a
              href="#skills"
              className="text-lg font-medium transition-colors duration-300 hover:text-accent-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg font-medium transition-colors duration-300 hover:text-accent-700"
            >
              Skills
            </a>
          </li>

          {/* Theme Toggle */}
          <li className="cursor-pointer">
            <div
              onClick={toggleTheme}
              className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center p-1 transition-all duration-300"
            >
              {/* Circle slider */}
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                  darkMode
                    ? "transform translate-x-8"
                    : "transform translate-x-0"
                }`}
              ></div>
              {/* Icons */}
              <span
                className={`absolute pt-0.5 left-1 font-medium text-gray-700 transition-all duration-300 ${
                  darkMode ? "text-gray-400 text-sm" : "text-yellow-500 text-lg"
                }`}
              >
                ☀️
              </span>
              <span
                className={`absolute right-1 font-medium text-gray-700 transition-all duration-300 ${
                  darkMode ? "text-blue-400 text-lg" : "text-gray-400 text-sm"
                }`}
              >
                🌙
              </span>
            </div>
          </li>
        </ul>
      </nav>

      {/* Right Curve-Masked Div */}
      <div
        className="w-[24px] h-[24px] shadow-lg transition-transform duration-300 bg-secondary"
        style={{
          maskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M100 0 C0 30, 0 100, 0 100 L0 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
          WebkitMaskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M100 0 C0 50, 20 50, 0 100 L0 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
        }}
      ></div>
    </div>
  );
};

export default Navbar;
