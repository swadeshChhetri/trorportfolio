import { motion } from "framer-motion";
import Button from "./common/Button";
import ParticleBackground from "./common/ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between text-white px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Text Section */}
      <motion.div
        className="text-center md:text-left space-y-6 flex-1 z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-green-400 text-xs sm:text-sm mb-4 font-jetbrains"
        >
          INITIALIZING AI CONSCIOUSNESS
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-green-400"
          >
            ...
          </motion.span>
        </motion.h3>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          TROR
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg sm:text-2xl mt-2 sm:mt-4 text-gray-300"
        >
          &gt; Artificial Intelligence Consulting{" "}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400"
          >
            _
          </motion.span>
        </motion.h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
          We don’t just implement AI—we architect digital consciousness.
          Transform your business with neural networks that think, learn, and
          evolve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="animated">[INITIATE_CONTACT]</Button>
          <Button>[EXPLORE_SYSTEMS]</Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative md:flex justify-center md:justify-end items-center w-full md:w-1/2 mt-10 md:mt-0 hidden "
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 overflow-hidden z-2">
          <ParticleBackground />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[220px] sm:w-[320px] md:w-[520px] h-[220px] sm:h-[320px] md:h-[520px] rounded-full bg-green-500/20 blur-[100px]" />
        </div>

        {/* Circle Image */}
        <div className="relative w-[200px] sm:w-[320px] md:w-[450px] h-[200px] sm:h-[320px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_40px_#22c55e]">
          <img
            src="/AI.png"
            alt="AI Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <div className="absolute bottom-6 left-0 w-full flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 font-jetbrains text-xs sm:text-sm px-4 sm:px-6 md:px-8">
        {[
          { value: "92%", label: "Process Efficiency" },
          { value: "10x", label: "Faster Decisions" },
          { value: "∞", label: "Scalable Systems" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + i * 0.2 }}
            className="text-center min-w-[80px] sm:min-w-[100px]"
          >
            <p className="text-green-400 text-lg sm:text-xl font-bold">
              {stat.value}
            </p>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
