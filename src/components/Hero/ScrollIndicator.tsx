"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#skills"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: 1.5 },
        y: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
    >
      <span className="mb-2 text-sm tracking-[0.3em] uppercase">
        Scroll
      </span>

      <ChevronDown className="h-7 w-7 animate-pulse" />
    </motion.a>
  );
}