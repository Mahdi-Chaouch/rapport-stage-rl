"use client";

import { motion } from "framer-motion";

export default function MaisonSection({ onOpenOrganigram }: { onOpenOrganigram: () => void }) {
  return (
    <section id="maison" className="relative border-b border-white/10 overflow-hidden bg-[#050505]">

      {/* ── BLOC 1 : EN-TÊTE ── */}
      <div className="px-6 md:px-24 pt-28 pb-0">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-3"
        >
          I · Histoire & Identité
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[11px] font-sans tracking-[0.35em] uppercase text-neutral-400 mb-6"
        >
          La Maison Ralph Lauren
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="pinyon text-7xl sm:text-8xl md:text-[10rem] text-white leading-none"
        >
          Du Bronx au monde.
        </motion.h2>
      </div>

      {/* ── BLOC 2 : PORTRAIT + TEXTE ── */}
      <div className="relative flex flex-col md:flex-row items-center px-6 md:px-24 py-20 gap-0">

        {/* Texte gauche */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 md:text-right md:pr-12 mb-10 md:mb-0"
        >
          <p className="font-serif text-lg md:text-xl text-neutral-300 leading-relaxed italic">
            Ralph Lifshitz naît en 1939 dans le Bronx, New York, fils d&apos;immigrants juifs biélorusses. Rien ne le prédestine à révolutionner la mode mondiale.
          </p>
        </motion.div>

        {/* Portrait centré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/5 flex justify-center"
        >
          <img
            src="/ralph-portrait.png"
            alt="Ralph Lauren"
            className="h-80 md:h-[480px] w-auto object-contain"
            style={{ filter: 'invert(1) grayscale(1)', mixBlendMode: 'screen' }}
          />
        </motion.div>

        {/* Texte droite */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 md:pl-12 mt-10 md:mt-0"
        >
          <p className="font-serif text-lg md:text-xl text-neutral-300 leading-relaxed italic">
            Pourtant il se distingue avec un sens inné de l&apos;élégance, une obsession pour le détail, et une vision : faire porter aux gens non pas des vêtements, mais un rêve. En 1967, avec 50 dollars en poche et une collection de cravates larges, Ralph Lauren pose la première pierre d&apos;un empire qui pèse aujourd&apos;hui plus de 6 milliards de dollars.
          </p>
        </motion.div>

      </div>

      {/* ── BLOC 3 : CITATION ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-24 py-16 border-t border-white/5"
      >
        <blockquote className="font-serif text-3xl md:text-5xl text-white font-light italic text-center max-w-4xl mx-auto leading-tight">
          &ldquo;A lot of hard work is hidden behind nice things.&rdquo;
        </blockquote>
        <p className="text-center text-[10px] font-sans tracking-[0.35em] uppercase text-neutral-500 mt-6">
          — Ralph Lauren
        </p>
      </motion.div>

      {/* ── BLOC 4 : VIDÉO (placeholder) ── */}
      <div className="px-6 md:px-0 pb-28">
        <div className="w-full aspect-video bg-neutral-900 flex items-center justify-center">
          <p className="text-neutral-600 font-sans text-xs tracking-widest uppercase">
            Vidéo Ralph Lauren — à intégrer
          </p>
        </div>
      </div>

    </section>
  );
}
