"use client";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import SectionTitle from "@/components/ui/SectionTitle";
import EducationTimeline from "./EducationTimeline";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#050816] py-8">
      <GlowBackground />
      <FloatingParticles />

      <Container>
        <SectionTitle
          subtitle="Academics"
          title="Education"
          description="My academic background in Commerce and Financial Management background strengthened my analytical thinking, problem-solving, and data analysis skills."
        />

        <EducationTimeline />
      </Container>
    </section>
  );
}
