import React from "react";
import Motion from "./common/Motion";

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
  {
    title: "[MANUFACTURING_OPTIMIZATION]",
    heading: "Predictive Maintenance System",
    description:
      "Deployed IoT-AI hybrid system for automotive manufacturer, predicting equipment failures 72 hours in advance with 91% precision.",
    stats: [
      { label: "Downtime Reduction", value: "67%" },
      { label: "Annual Savings", value: "$2.4M" },
      { label: "Prediction Window", value: "72hrs" },
    ],
    classification: "SUCCESS",
  },
  {
    title: "[RETAIL_INTELLIGENCE]",
    heading: "Customer Behavior Prediction",
    description:
      "Built recommendation engine for e-commerce giant, analyzing 50M+ customer interactions to predict purchasing behavior with 89% accuracy.",
    stats: [
      { label: "Sales Increase", value: "156%" },
      { label: "Data Points", value: "50M+" },
      { label: "Prediction Accuracy", value: "89%" },
    ],
    classification: "SUCCESS",
  },
];

export function CardsSection() {
  return (
    <section id="services" className="bg-black text-white flex flex-col">
      <div className="text-center">
        {/* Section Heading */}
        <h3 className="text-green-400 font-jetbrains mb-2">
          [DEPLOYMENT_RECORDS]
        </h3>
        <h2 className="text-4xl font-bold mb-4">Neural Success Stories</h2>
        <p className="text-gray-400 mb-12">
         Real-world implementations that transformed businesses across industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">
        {projectCardsData.map((card, index) => (
          <Motion key={index} height="h-auto">
          
              {/* Title / Heading */}
              {card.title && (
                <h3 className="text-xl font-bold mb-3 text-white">
                  {card.title}
                </h3>
              )}
              {card.heading && (
                <h2 className="text-2xl font-bold mb-3 text-white">
                  {card.heading}
                </h2>
              )}

              {/* Description */}
              {card.description && (
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              )}

              {/* Stats */}
              {card.stats && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {card.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-green-400 text-xl font-bold">
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Classification */}
              {card.classification && (
                <p className="text-green-400 text-sm font-jetbrains">
                  CLASSIFICATION: {card.classification}
                </p>
              )}
         
          </Motion>
        ))}
      </div>
    </section>
  );
}
