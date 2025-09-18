import { motion } from "framer-motion";

export default function Card({
  tag,   
  id,        
  color,     
  title,
  desc,
  status,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group bg-gradient-to-b from-gray-900 to-black 
                 p-6 rounded-xl border border-gray-700 
                 overflow-hidden cursor-pointer"
    >
      {/* Optional Animated border sweep */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-500"></span>

      {/* Agent Icon */}
      {id && color && (
        <div className={`${color} text-black font-bold w-12 h-12 flex items-center justify-center rounded-md mb-4`}>
          {id}
        </div>
      )}

      {/* Optional Service Tag */}
      {tag && <p className="text-green-400 font-jetbrains mb-3">{tag}</p>}

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-4">{desc}</p>

      {/* Status */}
      {status && <p className="text-green-400 font-jetbrains text-sm">{status}</p>}

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400 transition duration-500"></div>
    </motion.div>
  );
}

