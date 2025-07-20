// Enhanced Navbar.tsx
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const name = "SAURAV PANDEY".split("");

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center px-4">
      <motion.nav
        className="flex justify-between items-center px-6 py-3 backdrop-blur-xl bg-black/80 border-2 border-white rounded-xl my-4 max-w-4xl w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Left Section - Logo */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="h-10 w-10 rounded-full bg-black border-2 border-white flex items-center justify-center cursor-pointer"
            whileHover={{ rotate: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-white font-bold">SP</span>
          </motion.div>

          <div className="hidden md:flex overflow-hidden">
            {name.map((char, i) => (
              <motion.span
                key={i}
                className="text-lg font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Navigation */}
        <div className="flex items-center gap-6">
          <motion.a
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="text-sm font-bold text-white hover:text-purple-400 transition-all relative group cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">SKILLS</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </motion.a>
          <motion.a
            onClick={() => window.scrollTo({ top: 1700, behavior: "smooth" })}
            className="text-sm font-bold text-white hover:text-blue-400 transition-all relative group cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">PROJECTS</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </motion.a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
