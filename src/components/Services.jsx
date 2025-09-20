import Card from "./common/Card";

const services = [
  {
    tag: "[NEURAL_STRATEGY]",
    title: "AI Consciousness Design",
    desc: "Architect intelligent systems that adapt, learn, and evolve with your business needs.",
    status: "ACTIVE",
  },
  {
    tag: "[DEEP_LEARNING]",
    title: "Neural Network Implementation",
    desc: "Deploy advanced machine learning models that process data like human intuition.",
    status: "ACTIVE",
  },
  {
    tag: "[DATA_SYNTHESIS]",
    title: "Quantum Analytics",
    desc: "Transform raw data streams into predictive intelligence and actionable insights.",
    status: "ACTIVE",
  },
  {
    tag: "[AUTONOMOUS_SYSTEMS]",
    title: "Self-Learning Automation",
    desc: "Create intelligent workflows that optimize themselves without human intervention.",
    status: "ACTIVE",
  },
  {
    tag: "[SECURITY_PROTOCOL]",
    title: "AI Defense Matrix",
    desc: "Implement quantum-resistant security systems that evolve against emerging threats.",
    status: "ACTIVE",
  },
  {
    tag: "[KNOWLEDGE_TRANSFER]",
    title: "Consciousness Training",
    desc: "Elevate your team's understanding of AI through immersive learning experiences.",
    status: "ACTIVE",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white flex flex-col items-center"
    >
      {/* Section Heading */}
      <h3 className="text-green-400 font-jetbrains mb-2">
        [SYSTEM_CAPABILITIES]
      </h3>
      <h2 className="text-4xl font-bold mb-4">Neural Architecture</h2>
      <p className="text-gray-400 max-w-2xl text-center mb-12">
        Advanced AI systems designed to revolutionize your digital ecosystem
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            tag={service.tag}
            title={service.title}
            desc={service.desc}
            status={service.status}
          />
        ))}
      </div>
    </section>
  );
}
