"use client";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import SectionTitle from "@/components/ui/SectionTitle";
import GradientDivider from "@/components/ui/GradientDivider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050816] pt-24 pb-5">
      <GlowBackground />
      <FloatingParticles />

      <Container>
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact"
          description="Have a project in mind or want to discuss anything related analytics? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
        
      </Container>
    </section>
  );
}
