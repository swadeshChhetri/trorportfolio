import { motion } from "framer-motion";
import React from "react";
import Motion from "./common/Motion";

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
  <section className="w-full bg-black text-white">
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
            <Motion
              key={idx}
              height="h-auto"
            >
              <p className="text-3xl font-bold text-green-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </Motion>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <Motion height="h-auto">
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
      </Motion>
    </div>
  </section>
);

export default Capabilities;
