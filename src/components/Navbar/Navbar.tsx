"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, MessageCircle, Menu, X } from "lucide-react";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-1/2 top-0 z-50 w-[97%] max-w-8xl -translate-x-1/2"
      >
        <nav
          className={`flex items-center justify-between rounded-2xl border px-6 py-4 transition-all duration-500 md:px-8 ${
            scrolled
              ? "border-white/15 bg-[#0B1120] shadow-[0_8px_50px_rgba(0,0,0,0.4)]"
              : "border-white/10 bg-[#0B1120] shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
          }`}
        >
          <a href="#home" onClick={() => setMobileOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer items-center gap-3"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(34,211,238,.4)",
                    "0 0 20px rgba(34,211,238,.9)",
                    "0 0 8px rgba(34,211,238,.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full"
              >
                <Code2 className="h-7 w-7 text-cyan-400" />
              </motion.div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                <h1 className="bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  HB
                </h1>
              </div>
            </motion.div>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -2 }}
                className="group relative"
              >
                <a
                  href={item.href}
                  className={`cursor-pointer transition duration-300 ${
                    isActive(item.href)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </a>

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    isActive(item.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34,211,238,.45)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative hidden overflow-hidden rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 md:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                <MessageCircle className="h-4 w-4" />
                Let&apos;s Talk
              </span>
            </motion.a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-40 mx-auto w-[97%] max-w-8xl rounded-2xl border border-white/10 bg-[#050816]/95 p-6 shadow-[0_8px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 transition ${
                      isActive(item.href)
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400 bg-cyan-500/10 py-3 font-semibold text-cyan-300"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
