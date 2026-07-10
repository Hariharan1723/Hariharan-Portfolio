"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "15%", top: "20%", size: 8, delay: 0 },
  { left: "80%", top: "35%", size: 4, delay: 1 },
  { left: "70%", top: "75%", size: 8, delay: 2 },
  { left: "25%", top: "60%", size: 6, delay: 0.5 },
  { left: "90%", top: "15%", size: 4, delay: 1.5 },
];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-400/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
}
