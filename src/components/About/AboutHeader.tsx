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
        Building Modern Backend Solutions
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I enjoy building scalable backend systems, enterprise
        integrations, and cloud-native applications that solve
        real-world logistics challenges.
      </p>
    </motion.div>
  );
}