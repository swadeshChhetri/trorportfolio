import React from "react";

const services = ["AI Strategy", "Neural Networks", "Quantum Analytics", "Consciousness Training"];
const system = ["Entity Profile", "Neural Link", "Career Nodes", "Privacy Protocol"];
const links = ["[NEURAL_NET]", "[QUANTUM_LINK]"];

export default function Footer() {
  const sectionTitleClass = "text-green-400 font-jetbrains mb-3";

  return (
    <footer className="bg-black text-green-400 border-t border-green-600 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 font-jetbrains">TROR.AI</h2>
          <p className="text-gray-400 mt-2 font-jetbrains text-sm leading-relaxed">
            Architecting digital consciousness across the United States. Where AI meets human ambition.
          </p>
          <div className="mt-4 flex space-x-6 font-jetbrains text-gray-300">
            {links.map((link, idx) => (
              <a key={idx} href="#" className="hover:text-green-400">{link}</a>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className={sectionTitleClass}>[SERVICES]</h3>
          <ul className="space-y-2 text-gray-300 font-jetbrains text-sm">
            {services.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* System Section */}
        <div>
          <h3 className={sectionTitleClass}>[SYSTEM]</h3>
          <ul className="space-y-2 text-gray-300 font-jetbrains text-sm">
            {system.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-600 mt-10 pt-4 text-center text-gray-400 font-jetbrains text-xs">
        © 2025 TROR.AI | ALL_NEURAL_RIGHTS_RESERVED
      </div>
    </footer>
  );
}
