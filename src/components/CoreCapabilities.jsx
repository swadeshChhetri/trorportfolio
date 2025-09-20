import React from "react";
import CapabilityCard from "./common/CapabilityCard";

const capabilities = [
  {
    id: "infinite",
    color: "text-green-400",
    icon: "∞",
    title: "Infinite Scalability",
    desc: "Deploy unlimited agents across all business functions",
  },
  {
    id: "continuous",
    color: "text-blue-400",
    icon: "24/7",
    title: "Continuous Operation",
    desc: "Never-sleeping workforce that learns and improves",
  },
  {
    id: "reliability",
    color: "text-purple-400",
    icon: "99.9%",
    title: "Reliability",
    desc: "Enterprise-grade uptime and performance",
  },
  {
    id: "instant",
    color: "text-yellow-400",
    icon: "0ms",
    title: "Instant Response",
    desc: "Real-time decision making and execution",
  },
];

const CoreCapabilities = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <p className="text-green-400 font-jetbrains mb-10 text-center">
          [CORE_CAPABILITIES]
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {capabilities.map((cap) => (
            <CapabilityCard
              key={cap.id}
              icon={cap.icon}
              color={cap.color}
              title={cap.title}
              desc={cap.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
