"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-24 max-w-[1240px]">

      {/* Vertical Line */}

      <div
        className="
        absolute
        left-10
        top-0
        h-full
        w-[3px]
        rounded-full
        bg-gradient-to-b
        from-cyan-400
        via-purple-500
        to-cyan-400
        "
      />

      <div className="space-y-28">

        {experiences.map((experience, index) => (

          <div
            key={index}
            className="relative flex items-start gap-12"
          >

            {/* Timeline Node */}

            <div className="relative z-20 flex h-20 w-20 items-center justify-center">

              {/* Glow */}

              <div className="absolute h-14 w-14 rounded-full bg-cyan-400/20 animate-pulse" />

              {/* Ring */}

              <div className="absolute h-8 w-8 rounded-full border-4 border-cyan-400 bg-[#050816]" />

              {/* Dot */}

              <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.8)]" />

            </div>

            {/* Card */}

            <div className="flex-1">

              <ExperienceCard
                experience={experience}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}