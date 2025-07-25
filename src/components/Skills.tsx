import { motion } from "framer-motion";

const techConfigs = [
  { name: "JavaScript", color: "#F7DF1E", icon: "JS" },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", color: "#000000", icon: "▲" },
  { name: "Tailwind CSS", color: "#38B2AC", icon: "💨" },
  { name: "shadcn/ui", color: "#1572B6", icon: "🎨" },
  { name: "MUI", color: "#007FFF", icon: "📦" },
  { name: "Node.js", color: "#68A063", icon: "⬢" },
  { name: "Express.js", color: "#000000", icon: "🚀" },
  { name: "MongoDB", color: "#47A248", icon: "🍃" },
  { name: "Firebase", color: "#FFCA28", icon: "🔥" },
  { name: "Supabase", color: "#2496ED", icon: "🌳" },
  { name: "Vite", color: "#646CFF", icon: "⚡" },
  { name: "GitHub", color: "#211F1F", icon: "👾" },
  { name: "Git", color: "#F05032", icon: "🔧" },
  { name: "Vercel", color: "#000000", icon: "🌐" },
  { name: "Netlify", color: "#00C7B7", icon: "🌐" },
  { name: "n8n", color: "#EF476F", icon: "🔁" },
  { name: "AI Integration", color: "#7F00FF", icon: "🧠" },
  { name: "PWA", color: "#FF3E00", icon: "📱" },
];

const Skills: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-8 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -80], opacity: [0.2, 0] }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-2 bg-black border-2 border-white rounded-lg shadow-[4px_4px_0_#fff] mb-6 hover:shadow-[2px_2px_0_#fff] transition-transform duration-200">
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive cards showcasing my core stack and dev toolset.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {techConfigs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 80 }}
              className="bg-black border-2 border-white rounded-lg p-4 shadow-[4px_4px_0_#fff] hover:shadow-[2px_2px_0_#fff] transition-all cursor-default hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold text-white border-2 border-white"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
