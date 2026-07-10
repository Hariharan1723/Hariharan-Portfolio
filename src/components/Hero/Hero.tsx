"use client";

import HeroImage from "./HeroImage";
import Background from "./Background";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#050816]"
>
      {/* Left Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-8xl flex-col items-center gap-12 px-6 py-32 lg:flex-row lg:gap-16 lg:px-10 lg:py-0">

        <HeroImage />

        <HeroContent />

        <ScrollIndicator />

      </div>

    </section>
  );
}