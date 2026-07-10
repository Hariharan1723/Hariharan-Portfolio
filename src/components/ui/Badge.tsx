"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  text: string;
  icon?: ReactNode;
}

export default function Badge({
  text,
  icon,
}: BadgeProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-500/20
        bg-cyan-500/5
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:shadow-[0_0_20px_rgba(34,211,238,.3)]
      "
    >
      {icon}

      <span>{text}</span>
    </motion.div>
  );
}