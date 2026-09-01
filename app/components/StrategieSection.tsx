"use client";

import { motion } from "framer-motion";

const brandData = [
  { value: "$8.1B", label: "REVENUE 2024" },
  { value: "1967", label: "FOUNDED" },
  { value: "90+", label: "COUNTRIES" },
  { value: "25K+", label: "EMPLOYEES" },
  { value: "#1", label: "AMERICAN LUXURY BRAND" },
];

export default function StrategieSection() {
  return (
    <section id="strategie" className="relative border-b border-white/10 bg-[#050505]">

      {/* INTRO */}
      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          IV · Analyse Strategique
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="block text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 mb-8"
        >
          RETAIL INTELLIGENCE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-4"
        >
          Les Chiffres
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-500"
        >
          MADELEINE — PARIS · ANALYSING THE BRAND, THE MARKET & THE CUSTOMER
        </motion.p>
      </div>

      {/* THE BRAND */}
      <div className="px-6 md:px-24 pb-28 border-t border-white/10 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">
            01 — THE BRAND
          </span>
          <h3 className="font-serif text-4xl md:text-6xl text-white font-light">
            Where does Ralph Lauren stand?
          </h3>
        </motion.div>

        {/* Chiffres */}
        <div className="space-y-0">
          {brandData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-8 py-10 border-b border-white/5 group"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-5xl md:text-7xl text-white font-light group-hover:text-blue-400 transition-colors duration-300">
                {item.value}
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Comparaison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-12">
            BUT HOW DOES IT COMPARE?
          </span>

          <div className="space-y-8">
            {[
              { name: "Ralph Lauren", value: 81, revenue: "$8.1B" },
              { name: "Tommy Hilfiger", value: 45, revenue: "$4.5B" },
              { name: "Lacoste", value: 22, revenue: "$2.2B" },
            ].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-8"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 w-40 flex-shrink-0">
                  {brand.name}
                </span>
                <div className="flex-1 h-[1px] bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${brand.value}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 h-full"
                    style={{ backgroundColor: i === 0 ? "#ffffff" : "rgba(255,255,255,0.2)" }}
                  />
                </div>
                <span className="font-mono text-[10px] text-neutral-500 w-16 text-right flex-shrink-0">
                  {brand.revenue}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}
