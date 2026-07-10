"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "5%", top: "15%", opacity: 0.4, duration: 6 },
  { left: "12%", top: "70%", opacity: 0.8, duration: 8 },
  { left: "20%", top: "40%", opacity: 0.5, duration: 7 },
  { left: "28%", top: "85%", opacity: 0.7, duration: 9 },
  { left: "35%", top: "20%", opacity: 0.6, duration: 6.5 },
  { left: "45%", top: "60%", opacity: 0.9, duration: 8.5 },
  { left: "52%", top: "30%", opacity: 0.5, duration: 7.5 },
  { left: "60%", top: "75%", opacity: 0.7, duration: 6 },
  { left: "68%", top: "15%", opacity: 0.4, duration: 9 },
  { left: "75%", top: "55%", opacity: 0.8, duration: 7 },
  { left: "82%", top: "80%", opacity: 0.6, duration: 8 },
  { left: "90%", top: "35%", opacity: 0.5, duration: 6.5 },
];

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Left Glow */}
      <div className="absolute left-[-220px] top-1/3 h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute right-[-220px] top-1/2 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Animated Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-cyan-300"
          style={{
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [particle.opacity, 1, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}