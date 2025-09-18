import React from 'react'

const ProjectCard = ({
  title,
  heading,
  description,
  stats,
  classification,
}) => {
  return (
    <div
      id="cases"
      className="bg-[#0c0f16] text-white rounded-xl p-6 shadow-lg w-full border border-gray-700"
    >
      {/* Title */}
      <p className="text-xs text-green-400 tracking-wider mb-2">{title}</p>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-3">{heading}</h2>

      {/* Paragraph */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-green-400 text-xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Classification */}
      <p className="text-green-400 text-sm font-jetbrains">
        CLASSIFICATION: {classification}
      </p>
    </div>
  );
};

export default ProjectCard