"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const useCases = [
  {
    category: "Content Creation",
    title: "AI writing that sounds like you",
    description:
      "Generate blog posts, marketing copy, documentation, and more—trained on your brand voice and style guide.",
    items: ["Blog post generation", "SEO optimization", "Brand voice matching", "Multi-language"],
    gradient: "from-violet-500/10 to-transparent",
    border: "border-violet-700/20",
  },
  {
    category: "Code Intelligence",
    title: "Ship code faster with AI copilot",
    description:
      "Auto-complete, refactor, review, and document code across 30+ languages with context-aware suggestions.",
    items: ["Code completion", "Bug detection", "Automated tests", "Documentation"],
    gradient: "from-cyan-500/10 to-transparent",
    border: "border-cyan-700/20",
  },
  {
    category: "Data Analysis",
    title: "Turn raw data into decisions",
    description:
      "Ask questions in plain English and get instant insights from your databases, spreadsheets, and data warehouses.",
    items: ["Natural language queries", "Chart generation", "Anomaly detection", "Predictions"],
    gradient: "from-emerald-500/10 to-transparent",
    border: "border-emerald-700/20",
  },
];

function UseCaseCard({ useCase, index }: { useCase: (typeof useCases)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex flex-col sm:flex-row gap-8 rounded-2xl border ${useCase.border} p-8 overflow-hidden bg-gradient-to-br ${useCase.gradient}`}
    >
      <div className="flex-1">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-3 block">
          {useCase.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{useCase.description}</p>
        <button className="text-sm text-violet-400 hover:text-violet-300 font-medium flex items-center gap-1.5 transition-colors">
          Learn more
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex items-center">
        <ul className="grid grid-cols-2 gap-3 w-full">
          {useCase.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Product() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="product" ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Parallax glow */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full bg-violet-800/5 blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 bg-violet-950/60 border border-violet-700/30 rounded-full text-violet-300 text-xs font-medium uppercase tracking-wider mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for every team,
            <br />
            <span className="gradient-text">every use case</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Whether you&apos;re building consumer apps or enterprise workflows,
            Nexus AI adapts to your needs.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="flex flex-col gap-6">
          {useCases.map((useCase, i) => (
            <UseCaseCard key={useCase.category} useCase={useCase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
