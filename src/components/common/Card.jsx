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
  </motion.div>
  
  );
}
