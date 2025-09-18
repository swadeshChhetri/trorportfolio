// src/components/Button.jsx
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({ children, variant = "normal", className = "", ...props }) {
  if (variant === "animated") {
    return (
      <motion.button
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={clsx(
          "px-6 py-3 rounded-md font-jetbrains font-bold text-black cursor-pointer",
          "bg-gradient-to-r from-pink-500 via-red-500 via-purple-500 to-green-400",
          "bg-[length:300%_300%] transition-transform hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-md font-jetbrains font-bold",
        "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black",
        "transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
