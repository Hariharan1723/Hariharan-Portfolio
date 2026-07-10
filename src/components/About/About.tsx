"use client";

import AboutHeader from "./AboutHeader";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
  id="about"
  className="relative bg-[#050816] py-28 px-8"
>
      <div className="mx-auto max-w-8xl px-2 sm:px-4">
        <AboutHeader />
        <AboutCards />
      </div>
    </section>
  );
}