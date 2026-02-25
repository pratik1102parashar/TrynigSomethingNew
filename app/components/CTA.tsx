"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07071a] to-[#050510] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-[#0d0d2a] to-cyan-900/40" />
          <div className="absolute inset-0 border border-violet-700/30 rounded-3xl pointer-events-none" />

          {/* Glow orbs inside card */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet-600/20 blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-600/20 blur-[60px] pointer-events-none" />

          <div className="relative z-10 text-center px-8 py-16 sm:px-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-3 py-1 bg-violet-950/60 border border-violet-700/30 rounded-full text-violet-300 text-xs font-medium uppercase tracking-wider mb-6"
            >
              Get Started Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Ready to build with
              <br />
              <span className="gradient-text">Antimatter AI?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-10 max-w-xl mx-auto"
            >
              Join thousands of developers and companies already shipping
              AI-powered products. Start free, no credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-base text-center"
              >
                Start building free →
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-semibold rounded-xl transition-all duration-200 text-base text-center"
              >
                Schedule a demo
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="mt-6 text-gray-500 text-sm"
            >
              No credit card required · Free tier forever · Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
