import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ label, percentage, color }) => (
  <div className="flex items-center justify-between w-full mb-6">
    {/* Label */}
    <span className="text-gray-300 text-sm w-40">{label}</span>

    {/* Bar */}
    <div className="relative flex-1 h-2 bg-gray-800 rounded-full mx-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full ${color} bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400`}
      />
    </div>

    {/* Percentage */}
    <span
      className="text-sm font-bold"
      style={{
        color:
          color.includes("green")
            ? "#22c55e"
            : color.includes("yellow")
            ? "#facc15"
            : color.includes("purple")
            ? "#a855f7"
            : "#38bdf8",
      }}
    >
      {percentage}%
    </span>
  </div>
);

export function ProjectTimeline() {
  const timeline = [
    { label: "Neural Assessment", percentage: 100, color: "text-green-400" },
    { label: "Consciousness Design", percentage: 85, color: "text-blue-400" },
    { label: "Neural Training", percentage: 60, color: "text-purple-400" },
    { label: "System Integration", percentage: 25, color: "text-yellow-400" },
  ];

  return (
    <div className="bg-[#0c0f16] text-white rounded-xl p-6 shadow-lg w-full border border-gray-700 mx-auto">
      <p className="text-xs text-green-400 tracking-wider mb-6">
        [TYPICAL_PROJECT_TIMELINE]
      </p>

      {timeline.map((item, idx) => (
        <ProgressBar
          key={idx}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default ProjectTimeline;
