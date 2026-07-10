"use client";

import {
  Building2,
  CalendarDays,
  MapPin,
  Sparkles,
  Briefcase,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GradientDivider from "@/components/ui/GradientDivider";
import Badge from "@/components/ui/Badge";

import CurrentBadge from "./CurrentBadge";
import ExperienceIllustration from "./ExperienceIllustration";
import AchievementItem from "./AchievementItem";

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  current: boolean;
}

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <GlassCard className="mx-auto w-full max-w-[1200px] p-5 lg:p-6">
      {/* Background Glow */}

      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row">

          {/* Left */}

          <div className="flex-1">

            <div className="mb-3 flex items-center gap-3">

              <Sparkles
                size={18}
                className="text-cyan-400"
              />

              <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                Career
              </span>

            </div>

            <h2 className="text-3xl font-black leading-tight text-white lg:text-4xl">
              {experience.role}
            </h2>

            <div className="mt-4 flex items-center gap-3 text-cyan-400">

              <Building2 size={20} />

              <span className="text-xl font-medium">
                {experience.company}
              </span>

            </div>

            {/* Pills */}

            <div className="mt-4 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">

                <CalendarDays
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-gray-300">
                  {experience.duration}
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">

                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-gray-300">
                  {experience.location}
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center gap-6">

            {experience.current && (
              <CurrentBadge />
            )}

            <ExperienceIllustration />

          </div>

        </div>

        {/* Description */}

        <p className="mt-5 max-w-4xl text-sm leading-7 text-gray-300">
          {experience.description}
        </p>

        <GradientDivider />

        {/* Bottom */}

        <div className="mt-4 grid gap-7 lg:grid-cols-2">

          {/* Achievements */}

          <div>

            <div className="mb-8 flex items-center gap-3">

              <Briefcase
                className="text-cyan-400"
              />

              <h3 className="text-2xl font-semibold text-white">
                Key Achievements
              </h3>

            </div>

            <div className="space-y-5">

              {experience.achievements.map((item) => (
                <AchievementItem
                  key={item}
                  text={item}
                />
              ))}

            </div>

          </div>

          {/* Technologies */}

          <div>

            <div className="mb-8 flex items-center gap-3">

              <Sparkles
                className="text-cyan-400"
              />

              <h3 className="text-2xl font-semibold text-white">
                Technologies
              </h3>

            </div>

            <div className="flex flex-wrap gap-4">

              {experience.skills.map((skill) => (
                <Badge
                  key={skill}
                  text={skill}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}