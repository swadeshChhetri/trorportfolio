import { motion } from 'framer-motion'
import React from 'react'


const shineVariants = {
  initial: { x: "-200%" },
  hover: { x: "200%" },
};

const Motion = ({children}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{ initial: { y: 0 }, hover: { y: -10 } }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group bg-gradient-to-b from-gray-900 to-black 
                 p-6 rounded-xl border border-gray-700 
                 overflow-hidden cursor-pointer"
    >
      {/* Shiny Swipe Effect */}
      <motion.div
        variants={shineVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-[150%] h-full pointer-events-none z-0 
                   bg-gradient-to-r from-transparent via-green-400/40 to-transparent"
        aria-hidden="true"
      />
       <div className="relative z-10">{children}</div>
      </motion.div>
  )
}

export default Motion;