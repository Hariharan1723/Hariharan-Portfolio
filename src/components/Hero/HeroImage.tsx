"use client";

import { motion } from "framer-motion";
import AnimatedRing from "./AnimatedRing";
import SocialIcons from "./SocialIcons";
import { profile } from "@/data/profile";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="flex w-full flex-col items-center lg:w-2/5"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-40 blur-2xl" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-cyan-400"
        />

        <AnimatedRing />

        <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-white/10 md:h-[320px] md:w-[320px]">
          {/* Native img — serves directly from public/images/profile.png (no Next.js image cache) */}
          <img
            src={profile.profileImage}
            alt={`${profile.name} profile photo`}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      <SocialIcons />
    </motion.div>
  );
}
