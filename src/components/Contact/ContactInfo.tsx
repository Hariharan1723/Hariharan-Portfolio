"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "View my repositories",
    href: profile.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <GlassCard className="h-full p-8 lg:p-10">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white">
            Contact Information
          </h3>

          <p className="mt-3 text-gray-400">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat about backend engineering.
          </p>

          <div className="mt-8 space-y-5">
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                >
                  {content}
                </motion.a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button variant="secondary" href={profile.resume} download>
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
