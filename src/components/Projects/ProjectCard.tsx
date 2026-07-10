"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Project } from "@/data/projects";

const AutoScrollPdf = dynamic(() => import("./AutoScrollPdf"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1020]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
    </div>
  ),
});

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const isFeatured = project.featured;
  const hasPresentation = Boolean(project.presentationPdf);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={isFeatured ? "md:col-span-2" : ""}
    >
      <GlassCard
        className={`group h-full overflow-hidden ${
          isFeatured ? "lg:flex lg:flex-row" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
            isFeatured
              ? "h-64 lg:h-auto lg:w-1/2 lg:min-h-[320px]"
              : "h-52"
          }`}
        >
          {!hasPresentation && (
            <div className="absolute inset-0 bg-[#050816]/40" />
          )}

          {hasPresentation ? (
            <AutoScrollPdf
              key={project.presentationPdf}
              src={project.presentationPdf!}
            />
          ) : (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <Sparkles className="h-10 w-10 text-cyan-400" />
              </div>
            </motion.div>
          )}

          {isFeatured && (
            <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
              Featured
            </div>
          )}

          {!hasPresentation && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
          )}

          {hasPresentation && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#050816] to-transparent" />
          )}
        </div>

        <div
          className={`relative z-10 p-8 ${isFeatured ? "lg:w-1/2 lg:p-10" : ""}`}
        >
          <h3 className="text-2xl font-bold text-white lg:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

          <ul className="mt-6 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} text={tech} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <Button variant="secondary" href={project.github}>
                <FaGithub size={18} />
                GitHub
              </Button>
            )}

            {project.live && (
              <Button variant="primary" href={project.live}>
                <ExternalLink size={18} />
                Live Demo
              </Button>
            )}

            {hasPresentation && (
              <Button variant="secondary" href={project.presentationPdf!}>
                <ExternalLink size={18} />
                View PDF
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}