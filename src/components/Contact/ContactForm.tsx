"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 backdrop-blur-md transition-all duration-300 outline-none focus:border-cyan-400/50 focus:shadow-[0_0_30px_rgba(34,211,238,.15)] disabled:opacity-60";

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-12 text-center backdrop-blur-xl"
        >
          <CheckCircle className="mb-4 h-16 w-16 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="mt-3 text-gray-400">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setError("");
            }}
            className="mt-6 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={loading}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={loading}
              placeholder="your@email.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={loading}
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
