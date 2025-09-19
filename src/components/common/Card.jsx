import { motion } from "framer-motion";

const shineVariants = {
  initial: { x: "-200%" },
  hover: { x: "200%" },
};

export default function Card({ tag, id, color, title, desc, status }) {
  return (
    <motion.div
    initial="initial"
    whileHover="hover"   // lift up by 10px
    variants={{
      initial: { y: 0 },
      hover: { y: -10 }, // lift up 10px
    }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="relative group bg-gradient-to-b from-gray-900 to-black 
               p-6 rounded-xl border border-gray-700 
               overflow-hidden cursor-pointer"
  >
    {/* Animated border sweep (optional) */}
    <span className="absolute top-0 left-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-500"></span>
  
    {/* Shiny Swipe Effect */}
    <motion.div
      variants={shineVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="
        absolute inset-0
        w-[150%] h-full
        pointer-events-none z-0
        bg-gradient-to-r from-transparent via-green-400/40 to-transparent
      "
      aria-hidden="true"
    />
  
    {/* Card Content */}
    <div className="relative z-10">
      {id && color && (
        <div
          className={`${color} text-black font-bold w-12 h-12 flex items-center justify-center rounded-md mb-4`}
        >
          {id}
        </div>
      )}
  
      {tag && <p className="text-green-400 font-jetbrains mb-3">{tag}</p>}
  
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
  
      {status && (
        <p className="text-green-400 font-jetbrains text-sm">{status}</p>
      )}
    </div>
  
    {/* Glow outline */}
    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400 transition duration-500"></div>
  </motion.div>
  
  );
}
