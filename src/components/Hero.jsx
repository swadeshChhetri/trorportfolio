// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Cpu, LineChart, Network, Database, Brain } from "lucide-react";
import Button from "./common/Button";

export default function Hero() {
  const [blink, setBlink] = useState(true);
  const [blinkUnderscore, setBlinkUnderscore] = useState(true);

  // blinking animations
  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 600);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(
      () => setBlinkUnderscore((prev) => !prev),
      800
    );
    return () => clearInterval(interval);
  }, []);

  // floating icons motion
  const float = {
    initial: { y: 0 },
    animate: {
      y: [0, -12, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden"
    >
      {/* Glow pulse behind TROR */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl"
      />

      {/* Title 1 */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-green-400 text-lg mb-4 font-jetbrains"
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

      {/* Title 2 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-7xl font-extrabold tracking-wider relative z-10"
      >
        TROR
      </motion.h1>

      {/* Title 3 */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-2xl mt-4 text-gray-300"
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

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
      >
        We don’t just implement AI—we architect digital consciousness. Transform
        your business with neural networks that think, learn, and evolve.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="font-jetbrains mt-10 flex space-x-6"
      >
        <Button variant="animated">[INITIATE_CONTACT]</Button>
        <Button>[EXPLORE_SYSTEMS]</Button>
      </motion.div>

      {/* Floating Infographic Icons */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute top-28 left-20 bg-green-400/5 p-10 rounded-3xl shadow-lg"
        >
          <Cpu className="w-24 h-24 text-green-400/20" />
        </motion.div>

        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-32 right-20 bg-green-400/5 p-10 rounded-3xl shadow-lg"
        >
          <Network className="w-24 h-24 text-green-400/20" />
        </motion.div>

        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-[144px] right-1/4 bg-green-400/5 p-10 rounded-3xl shadow-lg"
        >
          <LineChart className="w-24 h-24 text-green-400/20" />
        </motion.div>

        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          transition={{ delay: 2.5 }}
          className="absolute top-1/2 left-1/5 bg-green-400/5 p-10 rounded-3xl shadow-lg"
        >
          <Brain className="w-24 h-24 text-green-400/20" />
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 flex space-x-12 text-gray-400 font-jetbrains text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-center"
        >
          <p className="text-green-400 text-xl font-bold">92%</p>
          <p>Process Efficiency</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="text-center"
        >
          <p className="text-green-400 text-xl font-bold">10x</p>
          <p>Faster Decisions</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="text-center"
        >
          <p className="text-green-400 text-xl font-bold">∞</p>
          <p>Scalable Systems</p>
        </motion.div>
      </div>
    </section>
  );
}
