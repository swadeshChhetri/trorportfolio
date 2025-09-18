// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import Button from "./common/Button";

export default function Hero() {
  const [blink, setBlink] = useState(true);
  const [blinkUnderscore, setBlinkUnderscore] = useState(true);

  // Blinking cursor for Title 1
  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 600);
    return () => clearInterval(interval);
  }, []);

  // Blinking underscore for Title 3
  useEffect(() => {
    const interval = setInterval(
      () => setBlinkUnderscore((prev) => !prev),
      800
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className=" h-screen flex flex-col justify-center items-center text-center bg-black text-white"
    >
      {/* Title 1 */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-green-400 text-lg mb-4 font-jetbrains"
      >
        INITIALIZING AI CONSCIOUSNESS
        {blink && <span className="text-green-400">|</span>}
      </motion.h3>

      {/* Title 2 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-7xl font-extrabold tracking-wider"
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
        {blinkUnderscore && <span className="text-green-400">_</span>}
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
        {/* INITIATE_CONTACT */}
         <Button variant="animated">[INITIATE_CONTACT]</Button>
         <Button>[EXPLORE_SYSTEMS]</Button>

      </motion.div>
    </section>
  );
}
