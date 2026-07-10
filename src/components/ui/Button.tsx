"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const commonClasses =
    "group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

  const primaryClasses =
    "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-black shadow-lg shadow-purple-500/20 hover:shadow-[0_0_35px_rgba(168,85,247,.45)]";

  const secondaryClasses =
    "border border-cyan-400 bg-transparent text-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,.35)]";

  const content = (
    <>
      {variant === "secondary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-transform duration-500 group-hover:translate-x-0"></span>
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`${commonClasses} ${
          variant === "primary" ? primaryClasses : secondaryClasses
        }`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${commonClasses} ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
    >
      {content}
    </motion.button>
  );
}