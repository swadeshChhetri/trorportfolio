import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ className }) => {
  const [particleCount, setParticleCount] = useState(150);
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  
  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => prev + 50);
    };

    window.addEventListener("click", handlePageClick);
    return () => window.removeEventListener("click", handlePageClick);
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className={className}
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          number: { value: particleCount, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

