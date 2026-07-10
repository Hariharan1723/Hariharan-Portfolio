"use client";

import { GraduationCap } from "lucide-react";

import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationTimeline() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 sm:left-10" />

      <div className="space-y-10 sm:space-y-12">
        {education.map((item, index) => (
          <div
            key={item.degree}
            className="relative flex items-start gap-6 sm:gap-12"
          >
            <div className="relative z-20 flex w-12 shrink-0 flex-col items-center sm:w-20">
              <div className="relative flex h-12 w-12 items-center justify-center sm:h-20 sm:w-20">
                <div className="absolute h-10 w-10 animate-pulse rounded-full bg-cyan-400/20 sm:h-14 sm:w-14" />
                <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border-4 border-cyan-400 bg-[#050816] sm:h-10 sm:w-10">
                  <GraduationCap className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>
              </div>

              <span className="mt-2 hidden rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300 sm:block">
                {item.duration.split("—")[0]?.trim() || item.duration}
              </span>
            </div>

            <div className="min-w-0 flex-1 pt-1 sm:pt-2">
              <EducationCard item={item} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
