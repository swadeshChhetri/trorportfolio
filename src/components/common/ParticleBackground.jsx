import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [particleCount, setParticleCount] = useState(100);
  const [init, setInit] = useState(false);
  const particlesRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => Math.min(prev + 20, 200));
    };

    window.addEventListener("click", handlePageClick);
    return () => window.removeEventListener("click", handlePageClick);
  }, []);

  useEffect(() => {
    if (init && particlesRef.current) {
      const canvas = particlesRef.current.querySelector("canvas");
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.pointerEvents = "none";
      }
    }
  }, [init]);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  if (!init) return null;

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.5,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            number: {
              value: particleCount,
              density: { enable: true, area: 800 },
            },
            color: {
              value: [
                "#22c55e",
                "#16a34a",
                "#15803d",
                "#166534",
                "#14532d",
                "#059669",
                "#047857",
                "#065f46",
              ],
            },
            shape: {
              type: ["circle", "edge", "triangle"],
              character: {
                value: ["AI", "ML", "01", "λ", "{}", "[]"],
                font: "Courier New",
                weight: "400",
              },
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1.5,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 6 },
              animation: {
                enable: true,
                speed: 3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#22c55e",
              opacity: 0.5,
              width: 1.2,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
