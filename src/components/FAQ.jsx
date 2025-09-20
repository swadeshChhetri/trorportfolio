import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does AI implementation typically take?",
    answer:
      "Neural network deployment varies by complexity, typically ranging from 8-16 weeks. Simple implementations may be faster.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We architect AI solutions across multiple sectors: Financial Services, Healthcare, Manufacturing, Retail, and more.",
  },
  {
    question: "How do you ensure AI system security?",
    answer:
      "Our AI defense matrix includes quantum-resistant encryption, multi-layer authentication, and continuous system audits.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-black text-white flex flex-col">
    <div className="text-center">
      {/* Section Heading */}
      <h3 className="text-green-400 font-jetbrains mb-2">
        [KNOWLEDGE_BASE]
      </h3>
      <h2 className="text-4xl font-bold mb-4">Frequently Asked Queries</h2>
      <p className="text-gray-400 mb-12">
        Common questions about AI consciousness implementation and neural network deployment
      </p>
    </div>
    <div id="faq" className="w-full max-w-3xl mx-auto mt-12 space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#0c0f16] border border-green-900/40 rounded-xl shadow-md"
        >
          {/* Question row */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-5 text-left"
          >
            <span className="text-white font-semibold text-lg">
              {faq.question}
            </span>
            {openIndex === index ? (
              <Minus className="text-green-400 w-5 h-5" />
            ) : (
              <Plus className="text-green-400 w-5 h-5" />
            )}
          </button>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-4"
              >
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
    </section>
  );
}
