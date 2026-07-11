"use client";

import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em]">
        About Me
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        Turning Data Into Decisions
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I enjoy transforming complex logistics and business data into
        clear, actionable insights through analytics, automation, and
        dashboards that solve real-world operational challenges.
      </p>
    </motion.div>
  );
}