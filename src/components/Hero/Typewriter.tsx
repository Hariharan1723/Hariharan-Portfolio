"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const words = profile.roles;

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="mt-6">
      <p className="text-gray-400 text-lg mb-2">
        Building...
      </p>

      <h2 className="text-4xl font-bold text-cyan-400">
        {displayText}
        <span className="animate-pulse text-purple-400">|</span>
      </h2>
    </div>
  );
}