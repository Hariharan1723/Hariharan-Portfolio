"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 text-center"
    >
      <p className="text-cyan-400 uppercase tracking-[0.4em]">
        Career
      </p>

      <h2 className="mt-3 text-5xl font-black text-white">
        Experience
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
        My professional journey in freight operations,
        data analytics and business process improvement.
      </p>
    </motion.div>
  );
}