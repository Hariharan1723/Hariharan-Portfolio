"use client";

import { profile } from "@/data/profile";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import Typewriter from "./Typewriter";
import TechBadges from "./TechBadges";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full space-y-8 lg:w-3/5"
    >

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: 1,
    y: 0,
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{
    opacity: { duration: 1 },
    y: { duration: 1 },
    backgroundPosition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  }}
  className="mt-2 bg-[length:300%_300%] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-7xl font-black text-transparent md:text-8xl"
>
  {profile.name}
</motion.h1>
      <div>

        <Typewriter />
        <TechBadges />

      </div>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
  {profile.description}
</p>

      <HeroButtons />
    </motion.div>
  );
}