"use client";

import { motion } from "framer-motion";

export default function MaisonSection({ onOpenOrganigram }: { onOpenOrganigram: () => void }) {
  return (
    <section id="maison" className="relative border-b border-white/10 overflow-hidden bg-[#050505]">

      {/* ── BLOC 1 : EN-TÊTE + CITATION ── */}
      <div className="px-6 md:px-24 pt-28 pb-0 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

        {/* Titre gauche */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
          >
            I · Histoire & Identité
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light tracking-tight leading-none mb-4"
          >
            La Maison<br />Ralph Lauren
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pinyon text-4xl sm:text-5xl text-neutral-400 leading-none"
          >
            Du Bronx au monde.
          </motion.p>
        </div>

        {/* Citation droite */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:max-w-xs md:text-right pb-2"
        >
          <blockquote className="font-serif text-lg text-neutral-300 italic leading-relaxed">
            &ldquo;A lot of hard work is hidden behind nice things.&rdquo;
          </blockquote>
          <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-500 mt-3">
            — Ralph Lauren
          </p>
        </motion.div>

      </div>

      {/* ── BLOC 2 : PORTRAIT + TEXTE ── */}
      <div className="relative flex flex-col md:flex-row items-start px-6 md:px-24 py-16 gap-0">

        {/* Texte gauche */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 md:text-right md:pr-12 md:pt-0"
        >
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed italic font-medium">
            Ralph Lifshitz naît en 1939 dans le Bronx, New York, fils d&apos;immigrants juifs biélorusses. Rien ne le prédestine à révolutionner la mode mondiale.
          </p>
        </motion.div>

        {/* Portrait centré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/5 flex justify-center items-start"
        >
          <img
            src="/ralph-portrait.png"
            alt="Ralph Lauren"
            className="h-72 md:h-[420px] w-auto object-contain grayscale"
          />
        </motion.div>

        {/* Texte droite */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 md:pl-12 md:pt-0"
        >
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed italic font-medium">
            Pourtant il se distingue avec un sens inné de l&apos;élégance, une obsession pour le détail, et une vision : faire porter aux gens non pas des vêtements, mais un rêve. En 1967, avec 50 dollars en poche et une collection de cravates larges, Ralph Lauren pose la première pierre d&apos;un empire qui pèse aujourd&apos;hui plus de 6 milliards de dollars.
          </p>
        </motion.div>

      </div>

      {/* ── BLOC 3 : VIDÉO DISCRÈTE ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-24 pb-28"
      >
        <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600 mb-4">
          En images · Ralph Lauren
        </p>
        <div className="relative w-full md:w-1/2 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/Q5gHNwxJNjE"
            title="Ralph Lauren Brand History"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>

    </section>
  );
}
