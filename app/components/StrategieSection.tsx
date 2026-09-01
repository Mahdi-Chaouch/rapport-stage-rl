"use client";

import { motion } from "framer-motion";

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
          className="font-serif text-6xl sm:text-8xl md:text-[10rem] text-white font-light tracking-tight leading-none mb-4"
        >
          RALPH<br />LAUREN
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

    </section>
  );
}
