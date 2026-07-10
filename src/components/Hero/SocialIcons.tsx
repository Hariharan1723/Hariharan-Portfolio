"use client";

import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { profile } from "@/data/profile";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub", external: true },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn", external: true },
  { icon: FaEnvelope, label: "Email", external: false },
];

function buildGmailComposeUrl(visitorEmail: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
    su: `Portfolio contact from ${visitorEmail}`,
    body: `Hi ${profile.name},\n\nI came across your portfolio and would like to connect.\n\nBest regards,\n${visitorEmail}`,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

function openComposeEmail(visitorEmail: string) {
  const gmailUrl = buildGmailComposeUrl(visitorEmail);
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
}

export default function SocialIcons() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [visitorEmail, setVisitorEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSocialClick = (label: string) => {
    if (label === "Email") {
      setShowEmailModal(true);
      setEmailError("");
    }
  };

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = visitorEmail.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValid) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setShowEmailModal(false);
    openComposeEmail(trimmed);
    setVisitorEmail("");
  };

  return (
    <>
      <div className="mt-10 flex w-full flex-col items-center">
        <div className="flex w-full max-w-xs items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Follow Me
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-6 flex gap-5">
          {socials.map((social) =>
            social.external ? (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 text-cyan-400 backdrop-blur-md transition-colors hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                <social.icon size={22} />
              </motion.a>
            ) : (
              <motion.button
                key={social.label}
                type="button"
                aria-label={social.label}
                onClick={() => handleSocialClick(social.label)}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 text-cyan-400 backdrop-blur-md transition-colors hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                <social.icon size={22} />
              </motion.button>
            )
          )}
        </div>
      </div>

      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0a0f24]/95 p-8 shadow-[0_0_60px_rgba(34,211,238,.15)] backdrop-blur-xl"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setShowEmailModal(false)}
                className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>

              <h3 className="text-xl font-bold text-white">Send an Email</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Enter your email to open Gmail compose. Your message will be
                sent to{" "}
                <span className="text-cyan-400">{profile.email}</span>.
              </p>

              <form onSubmit={handleEmailSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="visitor-email"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Your email (From)
                  </label>
                  <input
                    id="visitor-email"
                    type="email"
                    required
                    value={visitorEmail}
                    onChange={(e) => {
                      setVisitorEmail(e.target.value);
                      setEmailError("");
                    }}
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400/50 focus:shadow-[0_0_30px_rgba(34,211,238,.15)]"
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-400">{emailError}</p>
                  )}
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    To
                  </p>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {profile.email}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-3 font-semibold text-black transition hover:shadow-[0_0_35px_rgba(168,85,247,.45)]"
                >
                  Open Gmail Compose
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
