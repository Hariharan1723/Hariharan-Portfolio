"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:shadow-[0_0_70px_rgba(34,211,238,.15)]
        ${className}
      `}
    >
      {/* Shine Animation */}
      <div
        className="
          absolute
          left-[-120%]
          top-0
          h-full
          w-1/2
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-all
          duration-1000
          group-hover:left-[150%]
        "
      />

      {children}
    </motion.div>
  );
}