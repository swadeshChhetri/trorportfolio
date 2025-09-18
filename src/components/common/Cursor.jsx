import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth follow using spring
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    // Optional: detect hover on interactive elements
    const hoverTargets = document.querySelectorAll("a, button, input, textarea");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <>
      {/* Outer halo */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30"
        style={{
          translateX: springX,
          translateY: springY,
          width: hovered ? 60 : 40,
          height: hovered ? 60 : 40,
        }}
      />
      {/* Inner cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-white shadow-lg"
        style={{
          translateX: springX,
          translateY: springY,
          width: hovered ? 24 : 12,
          height: hovered ? 24 : 12,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
