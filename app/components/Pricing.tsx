"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for prototyping and side projects",
    features: [
      "1M tokens / month",
      "3 model deployments",
      "Community support",
      "REST & SDK access",
      "Basic analytics",
    ],
    cta: "Start for free",
    href: "#contact",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For teams building serious AI products",
    features: [
      "50M tokens / month",
      "Unlimited deployments",
      "Priority support (SLA 4h)",
      "Fine-tuning included",
      "Advanced analytics",
      "Team collaboration",
      "Custom domains",
    ],
    cta: "Start Pro trial",
    href: "#contact",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with mission-critical AI",
    features: [
      "Unlimited tokens",
      "Private cloud / VPC",
      "Dedicated support & SLA",
      "Custom model training",
      "SSO / SAML",
      "SOC 2 compliance",
      "SLA guarantees",
    ],
    cta: "Talk to sales",
    href: "#contact",
    highlighted: false,
  },
];

export default function Pricing() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-[#07071a] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-violet-950/60 border border-violet-700/30 rounded-full text-violet-300 text-xs font-medium uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Start free, scale as you grow. No hidden fees, no surprise bills.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const inView = useInView(cardRef, { once: true, margin: "-60px" });

            return (
              <motion.div
                key={plan.name}
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border p-7 flex flex-col gap-6 ${
                  plan.highlighted
                    ? "bg-violet-950/40 border-violet-600/50 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                    : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-white font-semibold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <svg
                        className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-violet-400" : "text-gray-500"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`mt-auto w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
