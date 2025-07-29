import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md -z-10" />

        <motion.div
          className="text-center max-w-4xl mx-auto w-full"
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
            className="relative border-2 border-white bg-black/80 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl mb-12 sm:mb-16 lg:mb-20"
            variants={{
              hidden: { scale: 0.95, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
          >
            <motion.div
              className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 px-3 sm:px-5 py-1 sm:py-2 rounded-full border-2 border-white text-xs sm:text-sm uppercase font-bold tracking-widest bg-black/80 backdrop-blur-sm shadow-lg"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4 sm:mb-6 lg:mb-8"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              I'm{" "}
              <span className="name block sm:inline text-4xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-black">
                Saurav Pandey
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4"
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
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8"
            variants={{ hidden: {}, visible: {} }}
          >
            {/* Let's Connect Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-black font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all duration-150 hover:bg-gray-100 active:translate-x-1 active:translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/Saurav-Pandey.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-black text-white font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] lg:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none transition-all duration-150 hover:bg-gray-900 active:translate-x-1 active:translate-y-1 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black text-white border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-6 sm:p-8 lg:p-10 w-full max-w-sm sm:max-w-lg lg:max-w-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 text-center">
              Let's Connect
            </h2>
            <p className="mb-6 sm:mb-8 text-center text-sm sm:text-lg text-gray-300">
              I'm always open to exciting projects and collaborations.
            </p>

            {/* Contact Section */}
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 border-2 border-gray-600 rounded-lg bg-gray-900/50">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm sm:text-base break-all">
                    saurav0x27@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("saurav0x27@gmail.com");
                      alert("Email copied to clipboard!");
                    }}
                    className="text-xs sm:text-sm px-3 py-2 rounded bg-white text-black font-bold hover:bg-gray-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    Copy
                  </button>
                  <a
                    href="mailto:saurav0x27@gmail.com"
                    className="text-xs sm:text-sm px-3 py-2 rounded border-2 border-white hover:bg-white hover:text-black transition font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 border-2 border-gray-600 rounded-lg bg-gray-900/50">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base">
                    +91 9354024075
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("+919354024075");
                      alert("Phone number copied!");
                    }}
                    className="text-xs sm:text-sm px-3 py-2 rounded bg-white text-black font-bold hover:bg-gray-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    Copy
                  </button>
                  <a
                    href="tel:+919354024075"
                    target="_blank"
                    className="text-xs sm:text-sm px-3 py-2 rounded border-2 border-white hover:bg-white hover:text-black transition font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 border-2 border-gray-600 rounded-lg bg-gray-900/50">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wide">
                    GitHub
                  </p>
                  <p className="text-sm sm:text-base break-all">
                    github.com/saurav0x23
                  </p>
                </div>
                <a
                  href="https://github.com/saurav0x23"
                  target="_blank"
                  className="text-xs sm:text-sm px-3 py-2 rounded border-2 border-white hover:bg-white hover:text-black transition font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 w-fit"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-red-400 text-xl sm:text-2xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-white hover:border-red-400 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
