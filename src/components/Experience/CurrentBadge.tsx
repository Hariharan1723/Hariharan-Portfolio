"use client";

import { motion } from "framer-motion";

export default function CurrentBadge() {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 8px rgba(34,197,94,.2)",
          "0 0 18px rgba(34,197,94,.6)",
          "0 0 8px rgba(34,197,94,.2)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2"
    >
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

      <span className="text-sm font-semibold uppercase tracking-wider text-green-300">
        Current
      </span>
    </motion.div>
  );
}