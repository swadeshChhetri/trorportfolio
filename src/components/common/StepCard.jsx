import React from "react";

const StepCard = ({ number, color, title, description, duration }) => {
  // Determine duration color based on text color
  const durationColor = color.includes("green")
    ? "#22c55e"
    : color.includes("yellow")
    ? "#facc15"
    : color.includes("purple")
    ? "#a855f7"
    : "#22c55e";

  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      {/* Number Circle */}
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full border-2 ${color} text-2xl font-bold mb-4`}
      >
        {number}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-3">{description}</p>

      {/* Duration */}
      <p className="text-sm font-jetbrains" style={{ color: durationColor }}>
        DURATION: {duration}
      </p>
    </div>
  );
};

export default StepCard;
