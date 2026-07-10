"use client";

import { motion } from "framer-motion";

interface Props {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <p className="uppercase tracking-[0.35em] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-4 bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-5xl font-black text-transparent">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}