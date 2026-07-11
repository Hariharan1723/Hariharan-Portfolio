"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Workflow,
  Code2,
} from "lucide-react";

const cards = [
  {
    icon: <Code2 className="h-8 w-8 text-cyan-400" />,
    title: "Data Analysis",
    description:
      "Cleaning, validating, and analyzing large datasets using Python and SQL.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-cyan-400" />,
    title: "Automation",
    description:
      "Automating repetitive Excel and reporting workflows with Python.",
  },
  {
    icon: <Workflow className="h-8 w-8 text-cyan-400" />,
    title: "Business Intelligence",
    description:
      "Building interactive dashboards and KPI reports using Power BI.",
  },
  {
    icon: <Database className="h-8 w-8 text-cyan-400" />,
    title: "Databases",
    description:
      "Working with MySQL and Google BigQuery for data storage and querying.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition"
        >
          <div className="mb-5">{card.icon}</div>

          <h3 className="mb-3 text-2xl font-semibold text-white">
            {card.title}
          </h3>

          <p className="leading-7 text-gray-400">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}