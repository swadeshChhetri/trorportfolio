import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    sector: "[HEALTHCARE_SECTOR_REVIEW]",
    text: "The diagnostic AI system Tror developed has transformed our radiology department. We can now detect early-stage cancers in minutes instead of hours, potentially saving thousands of lives annually.",
    name: "Dr. Michael Thompson",
    role: "Chief Medical Officer, Mayo Clinic",
    initials: "DT",
  },
  {
    id: 2,
    sector: "[TECH_SECTOR_REVIEW]",
    text: "Integrating Tror’s AI pipeline reduced our infrastructure costs by 40% while improving decision-making speed across departments.",
    name: "Sarah Lee",
    role: "CTO, NeuroTech Inc.",
    initials: "SL",
  },
  {
    id: 3,
    sector: "[FINANCE_SECTOR_REVIEW]",
    text: "With Tror’s automation, fraud detection accuracy improved drastically. This has been a game-changer for us.",
    name: "James Carter",
    role: "Head of Risk, FinSecure",
    initials: "JC",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="bg-black text-white flex flex-col">
    <div className="text-center">
      {/* Section Heading */}
      <h3 className="text-green-400 font-jetbrains mb-2">
        [CLIENT_FEEDBACK_MATRIX]
      </h3>
      <h2 className="text-4xl font-bold mb-4">Neural Network Reviews</h2>
      <p className="text-gray-400 mb-12">
        Testimonials from organizations that have successfully integrated AI consciousness
      </p>
    </div>
    <div id="reviews" className="bg-[#0c0f16] text-white rounded-2xl p-8 border border-green-900/40 shadow-lg w-full max-w-4xl mx-auto mt-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-green-400 tracking-wider mb-6">
            {testimonials[index].sector}
          </p>
          <blockquote className="text-center italic text-lg leading-relaxed mb-8 text-gray-200">
            “{testimonials[index].text}”
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                {testimonials[index].initials}
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyan-400"></div>
            </div>

            {/* Name & Role */}
            <div>
              <p className="font-semibold">{testimonials[index].name}</p>
              <p className="text-blue-400 text-sm">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    </section>
  );
}
