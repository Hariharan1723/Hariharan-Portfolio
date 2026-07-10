"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  text: string;
}

export default function AchievementItem({ text }: Props) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="group flex items-start gap-3"
    >
      <CheckCircle2
        size={18}
        className="mt-1 text-cyan-400 transition group-hover:scale-110"
      />

      <span className="leading-7 text-gray-300">
        {text}
      </span>
    </motion.div>
  );
}