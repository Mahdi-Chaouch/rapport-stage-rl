"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "1967",
    title: "La Cravate Fondatrice",
    desc: "Avec 50 dollars en poche, Ralph Lifshitz lance sa première collection de cravates larges sous le nom Ralph Lauren. Une révolution discrète.",
  },
  {
    year: "1972",
    title: "La Naissance du Polo",
    desc: "Création du polo shirt iconique à logo polo player brodé — pièce qui deviendra l'un des vêtements les plus reconnaissables au monde.",
  },
  {
    year: "1978",
    title: "L'Empire s'élargit",
    desc: "Lancement des premières lignes femme et enfant. Ralph Lauren s'impose comme un univers de vie complet, au-delà de la mode masculine.",
  },
  {
    year: "1986",
    title: "Entrée en Bourse",
    desc: "Introduction au NYSE. La maison devient un empire coté, tout en préservant l'intégrité créative de son fondateur à la tête du groupe.",
  },
  {
    year: "1997",
    title: "Central Park",
    desc: "Défilé historique à Central Park pour les 30 ans de la maison. Un événement cinématographique qui redéfinit les codes du fashion show.",
  },
  {
    year: "2000",
    title: "Paris, La Madeleine",
    desc: "Ouverture du flagship de la Madeleine — première boutique européenne de la maison. Paris entre dans l'univers Ralph Lauren.",
  },
  {
    year: "2010",
    title: "Purple Label",
    desc: "Montée en gamme vers la haute couture masculine avec le Purple Label — la ligne la plus exclusive de la maison, taillée sur mesure.",
  },
  {
    year: "2024",
    title: "Un Nouveau Chapitre",
    desc: "Ralph Lauren reprend personnellement la direction créative. À 84 ans, le fondateur réaffirme sa vision et l'héritage intemporel de la maison.",
  },
];

export default function MaisonSection({ onOpenOrganigram }: { onOpenOrganigram: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="maison" className="relative border-b border-white/10 overflow-hidden bg-[#050505]">

      {/* ── BLOC 1 : EN-TÊTE + CITATION ── */}
      <div className="px-6 md:px-24 pt-28 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:max-w-sm md:text-right pb-2"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
            &ldquo;A lot of hard work is hidden behind nice things.&rdquo;
          </blockquote>
          <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-500 mt-4">
            — Ralph Lauren
          </p>
        </motion.div>
      </div>

      {/* ── BLOC 2 : PORTRAIT + TEXTE ── */}
      <div className="px-6 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-2xl text-white italic font-medium leading-relaxed md:text-right"
          >
            Ralph Lifshitz naît en 1939 dans le Bronx, New York, fils d&apos;immigrants juifs biélorusses. Rien ne le prédestine à révolutionner la mode mondiale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/ralph-portrait.png"
              alt="Ralph Lauren"
              className="w-full max-w-xs object-contain grayscale"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-2xl text-white italic font-medium leading-relaxed"
          >
            Pourtant il se distingue avec un sens inné de l&apos;élégance, une obsession pour le détail, et une vision : faire porter aux gens non pas des vêtements, mais un rêve. En 1967, avec 50 dollars en poche et une collection de cravates larges, Ralph Lauren pose la première pierre d&apos;un empire qui pèse aujourd&apos;hui plus de 6 milliards de dollars.
          </motion.p>
        </div>
      </div>

      {/* ── BLOC 3 : LAYOUT QUINCONCE ── */}
      <div className="px-6 md:px-24 pb-24 space-y-6">

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 overflow-hidden"
          >
            <img src="/rl-1.jpg" alt="Ralph Lauren Collection" className="w-full h-[500px] object-cover object-top" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:mt-32 overflow-hidden"
          >
            <img src="/rl-2.jpg" alt="Ralph Lauren Collection" className="w-full h-[380px] object-cover object-top" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <img src="/rl-3.jpg" alt="Ralph Lauren Campaign" className="w-full h-[420px] object-cover object-top" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:mt-24 overflow-hidden"
          >
            <img src="/rl-4.jpg" alt="Ralph Lauren Style" className="w-full h-[380px] object-cover object-top" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 overflow-hidden"
          >
            <img src="/rl-5.jpg" alt="Ralph Lauren Polo" className="w-full h-[500px] object-cover object-center" />
          </motion.div>
        </div>

      </div>

      {/* ── BLOC 4 : FRISE CHRONOLOGIQUE HORIZONTALE ── */}
      <div className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 md:px-24 mb-10"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500">
            Chronologie · 1967 — 2024
          </span>
        </motion.div>

        {/* Scroll horizontal */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex min-w-max px-6 md:px-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col w-64 mr-0 pr-12 border-l border-white/15 pl-6"
              >
                {/* Année en grand */}
                <span className="font-serif text-6xl md:text-7xl text-white font-light leading-none mb-6 opacity-90">
                  {item.year}
                </span>

                {/* Titre */}
                <h4 className="font-serif text-lg text-white font-normal mb-3 leading-tight">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOC 5 : VIDÉO + POLO PLAYER ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-24 pb-28 flex flex-col md:flex-row items-center gap-16"
      >
        <div className="w-full md:w-1/2">
          <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600 mb-4">
            En images · Ralph Lauren
          </p>
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Q5gHNwxJNjE"
              title="Ralph Lauren Brand History"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/polo-player.png"
            alt="Polo Player Ralph Lauren"
            className="h-72 md:h-96 w-auto object-contain opacity-75"
          />
        </div>
      </motion.div>

    </section>
  );
}
