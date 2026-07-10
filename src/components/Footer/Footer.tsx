"use client";

import { motion } from "framer-motion";
import { Code2, ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import GradientDivider from "@/components/ui/GradientDivider";
import { profile } from "@/data/profile";

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050816] pb-8 pt-16">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-10">
        <GradientDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <a href="#home" className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
              {profile.name}
            </span>
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/10"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </motion.div>

        <p className="mt-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
