"use client";

import { ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-6">
      <Button variant="primary" href="#projects">
        View Projects
        <ArrowRight size={20} />
      </Button>

      <Button variant="secondary" href={profile.resume} download>
        Download Resume
        <Download size={20} />
      </Button>
    </div>
  );
}