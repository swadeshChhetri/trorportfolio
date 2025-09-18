import React from "react";
import ProjectCard from "./common/ProjectCard";


const projectCardsData = [
  {
    title: "[FINTECH_NEURAL_NET]",
    heading: "Quantum Trading Algorithm",
    description:
      "Deployed autonomous trading system for Fortune 500 financial institution, processing 2.3M transactions daily with 94.7% accuracy rate.",
    stats: [
      { label: "ROI Increase", value: "340%" },
      { label: "Response Time", value: "0.003s" },
      { label: "Uptime", value: "99.9%" },
    ],
    classification: "SUCCESS",
  },
  {
    title: "[HEALTHCARE_AI]",
    heading: "Diagnostic Neural Network",
    description:
      "Implemented medical imaging AI for early cancer detection, reducing diagnosis time from 48 hours to 3 minutes with 97.2% accuracy.",
    stats: [
      { label: "Accuracy Rate", value: "97.2%" },
      { label: "Diagnosis Time", value: "3min" },
      { label: "Lives Impacted", value: "15K+" },
    ],
    classification: "SUCCESS",
  },
  // Add more cards here if needed
];

export function CardsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-6">
      {projectCardsData.map((card, index) => (
        <ProjectCard
          key={index}
          title={card.title}
          heading={card.heading}
          description={card.description}
          stats={card.stats}
          classification={card.classification}
        />
      ))}
    </div>
  );
}
