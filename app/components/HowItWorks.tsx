"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    description:
      "Ingest structured and unstructured data from any source—databases, APIs, documents, or real-time streams. Our intelligent connectors handle the heavy lifting.",
    visual: (
      <div className="flex gap-3 flex-wrap">
        {["PostgreSQL", "S3", "Snowflake", "Kafka", "REST API"].map((src) => (
          <span
            key={src}
            className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-gray-300 font-mono"
          >
            {src}
          </span>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Build and fine-tune",
    description:
      "Choose from our pre-built model catalog or fine-tune on your proprietary data. Our AutoML pipeline handles hyperparameter optimization automatically.",
    visual: (
      <div className="font-mono text-xs space-y-1.5 text-left">
        <div className="flex items-center gap-3">
          <span className="text-gray-600">▸</span>
          <span className="text-green-400">✓ Data preprocessing complete</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">▸</span>
          <span className="text-green-400">✓ Model initialized (7B params)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">▸</span>
          <span className="text-violet-300">◉ Fine-tuning epoch 3/10 — loss: 0.089</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">▸</span>
          <span className="text-gray-500">○ Evaluation pending...</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Deploy anywhere",
    description:
      "One-click deployment to our global edge network or your own infrastructure. Auto-scaling, zero-downtime updates, and built-in monitoring included.",
    visual: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "US-East", status: "healthy", ms: "12ms" },
          { name: "EU-West", status: "healthy", ms: "18ms" },
          { name: "AP-South", status: "healthy", ms: "24ms" },
        ].map((region) => (
          <div
            key={region.name}
            className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 text-center"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1.5 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            <p className="text-white text-xs font-medium">{region.name}</p>
            <p className="text-gray-500 text-xs">{region.ms}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "04",
    title: "Monitor and improve",
    description:
      "Real-time dashboards track accuracy, latency, and cost. Detect drift automatically and trigger retraining workflows to keep your models sharp.",
    visual: (
      <div className="flex gap-2">
        {[40, 60, 45, 80, 65, 90, 75, 95, 70, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-violet-500/30"
            style={{ height: `${h * 0.6}px`, alignSelf: "flex-end" }}
          />
        ))}
      </div>
    ),
  },
];

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stepRef, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col sm:flex-row items-start gap-8 ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      {/* Content side */}
      <div className="flex-1 sm:max-w-md">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl font-bold text-white/[0.06] font-mono tabular-nums">
            {step.number}
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>

      {/* Center dot */}
      <div className="hidden sm:flex w-12 shrink-0 justify-center pt-6">
        <div className="w-4 h-4 rounded-full bg-violet-600 border-4 border-[#050510] shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
      </div>

      {/* Visual side */}
      <div className="flex-1 sm:max-w-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 min-h-[100px] flex items-center">
        {step.visual}
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 bg-cyan-950/60 border border-cyan-700/30 rounded-full text-cyan-300 text-xs font-medium uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            From data to deployment
            <br />
            <span className="gradient-text">in four steps</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Our end-to-end platform removes the complexity of building production AI systems.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-700/0 via-violet-700/40 to-violet-700/0 hidden sm:block" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
