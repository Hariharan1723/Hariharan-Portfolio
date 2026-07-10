"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Database,
  Container,
  Code2,
  Wrench,
  LucideIcon,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import type { SkillCategory } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Backend: Server,
  Cloud: Cloud,
  Database: Database,
  DevOps: Container,
  Languages: Code2,
  Tools: Wrench,
};

interface Props {
  category: SkillCategory;
  index: number;
}

export default function SkillCategoryCard({ category, index }: Props) {
  const Icon = iconMap[category.category] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <GlassCard className="h-full p-8">
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-[60px]" />

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10"
            >
              <Icon className="h-6 w-6 text-cyan-400" />
            </motion.div>

            <h3 className="text-xl font-bold text-white">
              {category.category}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + skillIndex * 0.04 }}
              >
                <Badge text={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
