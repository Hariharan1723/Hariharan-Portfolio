"use client";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-4"
    >
      <GlowBackground />
      <FloatingParticles />

      <Container>

        <SectionTitle
          subtitle="Career"
          title="Experience"
          description="My professional journey in freight rate management, data analytics, and business process improvement in logistics."
        />

        <ExperienceTimeline />

      </Container>
    </section>
  );
}