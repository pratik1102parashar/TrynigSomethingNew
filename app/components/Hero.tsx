"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-950/40 via-[#050510] to-[#050510]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-950/60 border border-violet-700/40 rounded-full text-violet-300 text-sm font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Introducing Antimatter AI v2.0
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            <span className="text-white">The AI platform</span>
            <br />
            <span className="gradient-text">built for builders</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
          >
            Antimatter AI gives your team the intelligence layer to build,
            deploy, and scale AI-powered products—without the complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <Link
              href="#contact"
              className="group relative px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] text-base"
            >
              Start building free
              <motion.span
                className="absolute inset-0 rounded-xl border border-violet-400/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </Link>
            <Link
              href="#product"
              className="group flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium rounded-xl transition-all duration-300 text-base"
            >
              Watch demo
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
          >
            <div className="flex -space-x-2.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#050510] bg-gradient-to-br from-violet-500 to-cyan-500"
                  style={{ filter: `hue-rotate(${i * 30}deg)` }}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">5,000+</span> developers
              already building with Antimatter AI
            </p>
          </motion.div>
        </motion.div>

        {/* Hero visual — mockup card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-16 relative max-w-4xl mx-auto"
        >
          {/* Glow behind card */}
          <div className="absolute inset-x-10 top-4 h-full bg-violet-600/10 blur-3xl rounded-3xl" />

          <div className="relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                antimatter-ai — dashboard
              </span>
            </div>

            {/* Dashboard preview */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "AI Requests", value: "1.2M", change: "+18%" },
                { label: "Avg Latency", value: "42ms", change: "-23%" },
                { label: "Accuracy", value: "98.7%", change: "+2.1%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
                >
                  <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{stat.change}</p>
                </div>
              ))}

              <div className="sm:col-span-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 font-mono text-xs text-left overflow-hidden">
                <div className="flex flex-col gap-1.5">
                  <span className="text-gray-500">{"// Antimatter AI SDK"}</span>
                  <span>
                    <span className="text-violet-400">import</span>
                    <span className="text-white"> {"{ AntimatterAI }"} </span>
                    <span className="text-violet-400">from</span>
                    <span className="text-green-400"> &apos;@antimatter/sdk&apos;</span>
                  </span>
                  <span className="text-gray-500 mt-1">
                    {"// Initialize in seconds"}
                  </span>
                  <span>
                    <span className="text-cyan-400">const</span>
                    <span className="text-white"> ai </span>
                    <span className="text-cyan-400">= new</span>
                    <span className="text-yellow-300"> AntimatterAI</span>
                    <span className="text-white">{"({ apiKey })"}</span>
                  </span>
                  <span>
                    <span className="text-cyan-400">const</span>
                    <span className="text-white"> result </span>
                    <span className="text-cyan-400">= await</span>
                    <span className="text-yellow-300"> ai.generate</span>
                    <span className="text-white">{"({ prompt })"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10M3 9l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
