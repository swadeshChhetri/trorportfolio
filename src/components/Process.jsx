import React from "react";
import StepCard from "./common/StepCard";

const steps = [
  {
    number: "01",
    color: "border-green-500 text-green-400",
    title: "Neural Assessment",
    description:
      "Deep analysis of your current systems, data architecture, and business objectives to identify AI integration opportunities.",
    duration: "1-2 WEEKS",
  },
  {
    number: "02",
    color: "border-green-500 text-green-400",
    title: "Consciousness Design",
    description:
      "Custom AI architecture blueprint creation, including neural network topology, data flow design, and integration protocols.",
    duration: "2-3 WEEKS",
  },
  {
    number: "03",
    color: "border-purple-500 text-purple-400",
    title: "Neural Training",
    description:
      "Model development, training, and optimization using your data. Continuous testing and refinement until optimal performance.",
    duration: "4-8 WEEKS",
  },
  {
    number: "04",
    color: "border-yellow-500 text-yellow-400",
    title: "System Integration",
    description:
      "Seamless deployment into your existing infrastructure with comprehensive monitoring, support, and continuous optimization.",
    duration: "2-4 WEEKS",
  },
];

const StepsSection = () => {
  return (
    <section id="process" className="bg-black text-white flex flex-col">
    <div className="text-center">
      {/* Section Heading */}
      <h3 className="text-green-400 font-jetbrains mb-2">
        [DEPLOYMENT_PROTOCOL]
      </h3>
      <h2 className="text-4xl font-bold mb-4">Neural Implementation Process</h2>
      <p className="text-gray-400 mb-12">
      Our systematic approach to architecting and deploying AI intelligence
      </p>
    </div>
    <div className="flex flex-col items-center md:flex-row gap-8 justify-center bg-black text-white">
      {steps.map((step) => (
        <StepCard
          key={step.number}
          number={step.number}
          color={step.color}
          title={step.title}
          description={step.description}
          duration={step.duration}
        />
      ))}
    </div>
    </section>
  );
};

export default StepsSection;
