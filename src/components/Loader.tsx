import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const name = "Saurav Pandey".split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); 
          setTimeout(onComplete, 500); // Delay before unmounting
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      {/* Stellar background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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

      {/* Content */}
      <div className="relative w-full max-w-2xl px-8 flex flex-col items-center">
        {/* Name Animation */}
        <div className="flex justify-center mb-8 overflow-hidden">
          {name.map((char, i) => (
            <motion.span
              key={i}
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Circular Progress Bar */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Background Circle */}
          <div className="absolute w-full h-full rounded-full border-2 border-white/10" />

          {/* Progress Ring */}
          <motion.div
            className="absolute w-full h-full rounded-full border-4 border-transparent"
            style={{
              borderImage: "linear-gradient(to right, #7dd3fc, #a855f7)",
              borderImageSlice: 1,
              clipPath: `polygon(50% 50%, 50% 0%, ${
                50 + 50 * Math.cos((progress / 100) * 2 * Math.PI)
              }% ${50 + 50 * Math.sin((progress / 100) * 2 * Math.PI)}%)`,
            }}
            animate={{
              rotate: 360,
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
          />

          {/* Glow Effect */}
          <div className="absolute w-full h-full rounded-full bg-purple-500/10 blur-md" />

          {/* Percentage Text */}
          <motion.div
            className="absolute text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
