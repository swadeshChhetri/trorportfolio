import React from "react";
import Motion from "./Motion";

const StepCard = ({ number, color, title, description, duration }) => {
  const durationColor = color.includes("green")
    ? "#22c55e"
    : color.includes("yellow")
    ? "#facc15"
    : color.includes("purple")
    ? "#a855f7"
    : "#22c55e";

  return (
    <div
      whileHover="hover"
      className="flex flex-col items-center text-center max-w-xs cursor-pointer"
    >
      <Motion height="h-auto">
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full border-2 ${color} text-2xl font-bold mb-4 leading-none mx-auto`}
        >
          {number}
        </div>

        <h3 className="text-lg font-bold mb-2">{title}</h3>

        <p className="text-gray-300 text-sm mb-3">{description}</p>

        <p className="text-sm font-jetbrains" style={{ color: durationColor }}>
          DURATION: {duration}
        </p>
      </Motion>
    </div>
  );
};

export default StepCard;
