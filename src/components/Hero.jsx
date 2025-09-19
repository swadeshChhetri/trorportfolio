// // // src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Cpu, LineChart, Network, Database, Brain } from "lucide-react";
// import Button from "./common/Button";

// export default function Hero() {
//   const [blink, setBlink] = useState(true);
//   const [blinkUnderscore, setBlinkUnderscore] = useState(true);

//   // blinking animations
//   useEffect(() => {
//     const interval = setInterval(() => setBlink((prev) => !prev), 600);
//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     const interval = setInterval(
//       () => setBlinkUnderscore((prev) => !prev),
//       800
//     );
//     return () => clearInterval(interval);
//   }, []);

//   // floating icons motion
//   const float = {
//     initial: { y: 0 },
//     animate: {
//       y: [0, -12, 0],
//       transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden"
//     >
//       {/* Glow pulse behind TROR */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0.3 }}
//         animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl"
//       />

//       {/* Title 1 */}
//

//       {/* Title 2 */}
//       <motion.h1
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="text-7xl font-extrabold tracking-wider relative z-10"
//       >
//         TROR
//       </motion.h1>

//       {/* Title 3 */}
//

//       {/* Paragraph */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
//       >
//         We don’t just implement AI—we architect digital consciousness. Transform
//         your business with neural networks that think, learn, and evolve.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="font-jetbrains mt-10 flex space-x-6"
//       >
//         <Button variant="animated">[INITIATE_CONTACT]</Button>
//         <Button>[EXPLORE_SYSTEMS]</Button>
//       </motion.div>

//       {/* Floating Infographic Icons */}
//

//       {/* Floating Stats */}

//     </section>
//   );
// }

import { motion } from "framer-motion";
import Button from "./common/Button";
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-black to-gray-900 text-white md:px-8 overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="z-10 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
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

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          TROR
        </h1>

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

        <p className="text-lg md:text-xl text-gray-300">
          We don’t just implement AI—we architect digital consciousness.
          Transform your business with neural networks that think, learn, and
          evolve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="animated">[INITIATE_CONTACT]</Button>
          <Button>[EXPLORE_SYSTEMS]</Button>
        </div>
      </motion.div>
      {/* Image Section with Circular Mask */}
      <motion.div
        className="relative flex justify-center md:justify-end items-center w-full md:w-1/2 mt-12 md:mt-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow behind circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[520px] h-[520px] rounded-full bg-green-500/20 blur-[120px]" />
        </div>

        {/* Circular container */}
        <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-[0_0_40px_#22c55e]">
          <img
            src="/AI.png"
            alt="AI Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      

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
