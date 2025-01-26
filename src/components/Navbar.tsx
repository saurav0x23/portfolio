import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(5);
  const name = "Saurav Pandey".split("");

  // Dark mode toggle
  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  // Scroll progress handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress + 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 sm:px-8">
      <nav className="flex justify-between items-center px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-xl bg-sky-900/20 border border-sky-400/20 rounded-2xl m-2 sm:m-3 transition-all duration-300 hover:shadow-cosmic-glow max-w-7xl w-2/3">
        {/* Stellar particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Left Section */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full relative overflow-hidden group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-600 opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </motion.div>

          <div className="flex overflow-hidden">
            {name.map((char, i) => (
              <motion.span
                key={i}
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Centered Progress Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-9 h-1 w-2/3 sm:w-1/2">
          <div className="h-full bg-sky-900/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-300 to-purple-400"
              style={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex gap-4 sm:gap-6">
            <motion.a
              href="#projects"
              className="text-sm sm:text-base text-gray-300 hover:text-sky-300 transition-all relative"
              whileHover={{ y: -2 }}
            >
              Projects
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-sky-400 to-transparent"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
            <motion.a
              href="#skills"
              className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-all relative"
              whileHover={{ y: -2 }}
            >
              Skills
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-transparent"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
