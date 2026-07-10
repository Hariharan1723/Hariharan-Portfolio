"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  BookOpen,
  Trophy,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GradientDivider from "@/components/ui/GradientDivider";
import type { Education } from "@/data/education";

interface Props {
  item: Education;
  index: number;
}

export default function EducationCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <GlassCard className="p-6 sm:p-8 lg:p-10">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px]" />

        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Education
                </span>
                {item.grade && (
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    {item.grade}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                {item.degree}
              </h3>

              <p className="mt-3 text-base font-medium text-cyan-400 sm:text-lg">
                {item.college}
              </p>

              <p className="mt-1 text-sm text-gray-400 sm:text-base">
                {item.university}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:max-w-xs lg:flex-col">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300">
                <CalendarDays size={16} className="shrink-0 text-cyan-400" />
                {item.duration}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300">
                <MapPin size={16} className="shrink-0 text-cyan-400" />
                {item.location}
              </div>
            </div>
          </div>

          {/* <GradientDivider /> */}

          {/* <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-cyan-400" />
                <h4 className="font-semibold text-white">Relevant Coursework</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-400 transition-colors hover:border-cyan-400/20 hover:text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-cyan-400" />
                <h4 className="font-semibold text-white">Achievements</h4>
              </div>

              <ul className="space-y-3">
                {item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </GlassCard>
    </motion.div>
  );
}
