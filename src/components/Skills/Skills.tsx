"use client";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";
import SkillCategoryCard from "./SkillCategoryCard";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#050816] py-36">
      <GlowBackground />
      <FloatingParticles />

      <Container>
        <SectionTitle
          subtitle="Expertise"
          title="Skills"
          description="Technologies and tools I use for data analysis, automation, and business intelligence reporting."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
