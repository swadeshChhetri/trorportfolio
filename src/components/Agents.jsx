import React from 'react'
import Card from './common/Card';

const agents = [
  {
    id: "SA",
    color: "bg-green-500",
    title: "Sales Agent",
    desc: "Autonomous lead qualification, personalized outreach, and deal closure with 340% higher conversion rates.",
    status: "DEPLOYMENT: READY",
  },
  {
    id: "CA",
    color: "bg-blue-500",
    title: "Customer Agent",
    desc: "24/7 intelligent support with emotional intelligence, resolving 89% of queries without human intervention.",
    status: "DEPLOYMENT: READY",
  },
  {
    id: "DA",
    color: "bg-purple-500",
    title: "Data Agent",
    desc: "Real-time analytics, predictive insights, and automated reporting across all business metrics.",
    status: "DEPLOYMENT: READY",
  },
  {
    id: "SA",
    color: "bg-green-500",
    title: "Sales Agent",
    desc: "Autonomous lead qualification, personalized outreach, and deal closure with 340% higher conversion rates.",
    status: "DEPLOYMENT: READY",
  },
  {
    id: "CA",
    color: "bg-blue-500",
    title: "Customer Agent",
    desc: "24/7 intelligent support with emotional intelligence, resolving 89% of queries without human intervention.",
    status: "DEPLOYMENT: READY",
  },
  {
    id: "DA",
    color: "bg-purple-500",
    title: "Data Agent",
    desc: "Real-time analytics, predictive insights, and automated reporting across all business metrics.",
    status: "DEPLOYMENT: READY",
  },
];

const Agents = () => {
  return (
    <section className="bg-black py-20">
    <div className="mx-auto grid md:grid-cols-3 gap-8">
      {agents.map((agent, index) => (
        <Card
          key={index}
          id={agent.id}
          color={agent.color}
          title={agent.title}
          desc={agent.desc}
          status={agent.status}
        />
      ))}
    </div>
  </section>
  )
}

export default Agents