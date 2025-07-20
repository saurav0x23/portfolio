import { useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md -z-10" />

        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="relative border-2 border-white bg-black/80 p-8 rounded-xl shadow-xl mb-16"
            variants={{
              hidden: { scale: 0.95, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
          >
            <motion.div
              className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-5 py-1 rounded-full border-2 border-white text-sm uppercase font-semibold tracking-widest bg-black/60 backdrop-blur-sm"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              className="text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              I'm{" "}
              <span className="name bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saurav Pandey
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              I craft immersive{" "}
              <span className="text-white font-bold">digital experiences</span>{" "}
              with modern{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                technologies
              </span>
              .
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-5"
            variants={{ hidden: {}, visible: {} }}
          >
            {/* Open Modal */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg border-2 border-black shadow-lg hover:shadow-md transition-all"
              whileHover={{ y: -2 }}
            >
              Let's Connect
            </motion.button>

            {/* Resume Link */}
            <motion.a
              href="/Saurav_Pandey_Resume.pdf" // 🔁 Replace with actual path if needed
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg border-2 border-white shadow-lg hover:shadow-md transition-all"
              whileHover={{ y: -2 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#0d0d0d] text-white border border-white/20 rounded-xl shadow-2xl p-6 w-full max-w-lg relative">
            <h2 className="text-3xl font-extrabold mb-4 text-center">
              Let's Connect
            </h2>
            <p className="mb-6 text-center text-lg text-gray-300">
              I'm always open to exciting projects and collaborations.
            </p>

            {/* Contact Section */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">saurav0x27@gmail.com</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("saurav0x27@gmail.com");
                      alert("Email copied to clipboard!");
                    }}
                    className="text-sm px-3 py-1 rounded bg-white text-black font-semibold hover:bg-gray-200"
                  >
                    Copy
                  </button>
                  <a
                    href="mailto:saurav0x27@gmail.com"
                    className="text-sm px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+91 9354024075</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("+919354024075");
                      alert("Phone number copied!");
                    }}
                    className="text-sm px-3 py-1 rounded bg-white text-black font-semibold hover:bg-gray-200"
                  >
                    Copy
                  </button>
                  <a
                    href="tel:+919354024075"
                    className="text-sm px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-medium">github.com/saurav0x23</p>
                </div>
                <a
                  href="https://github.com/saurav0x23"
                  target="_blank"
                  className="text-sm px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-red-400 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
