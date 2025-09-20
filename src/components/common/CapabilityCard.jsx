import { motion } from "framer-motion";

const CapabilityCard = ({ icon, color, title, desc }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0 15px 35px rgba(0,255,128,0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative group bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-700 cursor-pointer"
    >
      <div className={`${color} text-3xl font-bold mb-4`}>{icon}</div>

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
};

export default CapabilityCard;
