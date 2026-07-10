"use client";

import { motion } from "framer-motion";

export default function AnimatedRing() {
  return (
    <>
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-30 blur-3xl" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-10px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[3px]"
      >
        <div className="h-full w-full rounded-full bg-[#050816]" />
      </motion.div>
    </>
  );
}