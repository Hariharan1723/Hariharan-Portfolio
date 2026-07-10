"use client";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#050816] py-36">
      <GlowBackground />
      <FloatingParticles />

      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Projects"
          description="Featured data analytics, machine learning, business intelligence, and automation projects demonstrating my expertise in Python, SQL, Power BI, and logistics analytics"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
