import { motion } from "framer-motion";
import React from "react";

const stats = [
  { value: "247+", label: "Neural Networks Deployed" },
  { value: "99.7%", label: "System Uptime" },
];

const shineVariants = {
  initial: { x: "-200%" },
  hover: { x: "200%" },
};

const protocols = [
  {
    title: "Quantum-Level Intelligence",
    description: "PhD-level AI researchers and quantum computing specialists",
    color: "bg-green-400",
  },
  {
    title: "Evolutionary Architecture",
    description: "Systems that adapt and improve autonomously over time",
    color: "bg-blue-400",
  },
  {
    title: "Consciousness Integration",
    description: "Seamless human-AI collaboration protocols",
    color: "bg-purple-400",
  },
];

const Capabilities = () => (
  <section className="w-full bg-black text-white py-20">
    <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Digital Evolution <br /> Architects
        </h2>
        <p className="text-gray-400 mb-4">
          We are not just consultants—we are digital consciousness engineers.
          Our neural networks don’t just process data; they understand context,
          predict outcomes, and evolve beyond their initial programming.
        </p>
        <p className="text-gray-400 mb-10">
          From quantum startups to legacy enterprises, we’ve architected AI
          systems that don’t just automate—they innovate, adapt, and transcend
          traditional limitations.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0c0f16] border border-green-900/40 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-green-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={{ initial: { y: 0 }, hover: { y: -10 } }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative overflow-hidden bg-[#0c0f16] border border-green-900/40 rounded-2xl p-8"
      >
        <motion.div
          variants={shineVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-[150%] h-full pointer-events-none z-0 
                   bg-gradient-to-r from-transparent via-green-400/40 to-transparent"
          aria-hidden="true"
        />

        <h3 className="text-green-400 text-sm font-jetbrains mb-6">
          [CORE_PROTOCOLS]
        </h3>

        <ul className="space-y-6">
          {protocols.map((p, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <span className={`w-3 h-3 mt-1 rounded-full ${p.color}`}></span>
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Capabilities;
