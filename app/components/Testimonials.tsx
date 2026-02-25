"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Nexus AI cut our ML development cycle from 6 months to 3 weeks. The fine-tuning pipeline is extraordinary—we went from prototype to production without a single DevOps headache.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Nexus Health",
    avatar: "SC",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "We processed 50 million documents in our first month. The accuracy improvements from their adaptive learning blew our previous vendor's metrics out of the water. Genuinely transformative.",
    author: "Marcus Rivera",
    role: "Head of AI",
    company: "Orbital Finance",
    avatar: "MR",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    quote:
      "The security posture was a non-negotiable for us. Nexus AI was the only platform that met our compliance requirements out of the box, and the performance is best-in-class.",
    author: "Priya Nair",
    role: "VP Engineering",
    company: "Fortis Cloud",
    avatar: "PN",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "Their SDK integration took literally 15 minutes. I've never deployed an AI service this fast. It's exactly what developer experience should feel like in 2024.",
    author: "Tom Okafor",
    role: "Staff Engineer",
    company: "BuildKit",
    avatar: "TO",
    gradient: "from-orange-500 to-red-600",
  },
];

const logos = [
  "Accenture",
  "MongoDB",
  "Vercel",
  "Stripe",
  "Notion",
  "Linear",
  "Figma",
  "Datadog",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#07071a] to-[#050510] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logos */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-gray-600 hover:text-gray-400 transition-colors duration-200 font-semibold text-lg tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-16" />

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-violet-950/60 border border-violet-700/30 rounded-full text-violet-300 text-xs font-medium uppercase tracking-wider mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Loved by builders worldwide
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Active testimonial */}
          <div className="relative min-h-[200px] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8"
              >
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-violet-600/50 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.209 1.791-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.209 1.791-4 4-4V8z" />
                </svg>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonials[active].author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[active].role} · {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-violet-500" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "5B+", label: "API calls served" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "<50ms", label: "Average latency" },
            { value: "120+", label: "Countries served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
