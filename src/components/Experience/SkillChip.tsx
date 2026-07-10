"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

interface SkillChipProps {
  skill: string;
}

export default function SkillChip({ skill }: SkillChipProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.25)]"
    >
      <Code2
        size={16}
        className="text-cyan-400 transition group-hover:rotate-12"
      />

      <span className="text-sm text-cyan-200">
        {skill}
      </span>
    </motion.div>
  );
}