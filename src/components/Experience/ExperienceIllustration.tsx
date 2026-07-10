"use client";

import { motion } from "framer-motion";

export default function ExperienceIllustration() {
  return (
    <motion.div
      animate={{
        rotate: 360,
        y: [0, -10, 0],
      }}
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative h-36 w-36"
    >
      {/* Orbit Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/20" />

      {/* Cube */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,.35)]"
      />

      {/* Orbit Dots */}
      <div className="absolute left-0 top-1/2 h-3 w-3 rounded-full bg-cyan-400" />

      <div className="absolute right-0 top-1/2 h-3 w-3 rounded-full bg-purple-400" />

      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400" />

      <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400" />
    </motion.div>
  );
}