"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const entries = [
  {
    period: "Semaines 1 — 2",
    title: "L'Apprentissage",
    imgs: ["/carnet-1.jpg"],
    imgPosition: "object-center",
    desc: "Comme un enfant mes premiers pas se sont faits petit à petit au sein de la boutique. J’ai découvert le fonctionnement du stock, les références produits, les différents floor, les différentes collections ainsi que les codes de la maison. J’ai rapidement compris que chaque détail compte : des étiquettes aux cintres, de la disposition des rayons aux codes vestimentaires de l’équipe.",
  },
  {
    period: "Semaines 2 — 4",
    title: "Le Feu des Soldes",
    imgs: ["/carnet-2.jpg"],
    imgPosition: "object-center",
    desc: "Les soldes d’été battent leur plein durant le mois de juillet. Entre l’étiquetage des produits, la mise en avant des pièces soldées et une fréquentation plus importante pour ces dernières, le rythme en boutique s’intensifie. Cette période m’a appris à rester posé, organisé et efficace, même sous pression.",
  },
  {
    period: "Semaines 4 — 6",
    title: "Le Floor",
    imgs: ["/carnet-3.jpg"],
    imgPosition: "object-center",
    desc: "Je commence à prendre mes marques sur le floor. J’accueille les clients, je présente les collections et je les guide dans les différents espaces de la boutique. Petit à petit, j’apprends à accompagner chaque parcours d’achat de A à Y",
  },
  {
    period: "Semaines 6 — 8",
    title: "Le Merch",
    imgs: ["/carnet-4.jpg", "/carnet-4.1.jpg"],
    imgPosition: "object-center",
    desc: "Arrivée de la nouvelle collection avec l'équipe Brand Image. Nous installons ensemble les nouvelles pièces, disposition, facing, harmonie des coloris, des tenues. Le PSR GSR, une autre mission essentielle au sein de la boutique : tous les produits hors collection sont identifiés et renvoyés.",
  },
  {
    period: "Semaines 8 — 12",
    title: "L'Autonomie",
    imgs: ["/carnet-5.jpg"],
    imgPosition: "object-center",
    imgHeight: "580px",
    desc: "Je connais maintenant la boutique par coeur. Gestion autonome du stock, réassort des rayons, Click and Collect, accueil et vente clients. Je contribue pleinement à la vie de la boutique.",
  },
];

export default function CarnetSection() {
  const [active, setActive] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const handleSetActive = (i: number) => {
    setActive(i);
    setImgIndex(0);
  };

  const entry = entries[active];
  const hasMultipleImgs = entry.imgs.length > 1;

  return (
    <section id="carnet" className="relative border-b border-white/10 bg-[#050505]">

      {/* CHAPTER INTRO */}
      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          III · Carnet de Bord
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-6"
        >
          Journal de Stage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="pinyon text-5xl sm:text-6xl md:text-8xl text-neutral-400 font-light"
        >
          Trois mois au coeur de la Madeleine.
        </motion.p>
      </div>

      {/* NAVIGATION BULLES — sans trait */}
      <div className="px-6 md:px-24 pb-16 flex items-center gap-6 flex-wrap pt-8">
        {entries.map((e, i) => (
          <button
            key={i}
            onClick={() => handleSetActive(i)}
            className="flex items-center gap-3 transition-all duration-300"
          >
            <span
              className="rounded-full transition-all duration-500"
              style={{
                width: active === i ? "28px" : "7px",
                height: "7px",
                backgroundColor: active === i ? "#C8A96E" : "rgba(255,255,255,0.2)",
              }}
            />
            <span
              className="text-[10px] font-sans tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: active === i ? "#C8A96E" : "rgba(255,255,255,0.25)" }}
            >
              {e.period}
            </span>
          </button>
        ))}
      </div>

      {/* CONTENU */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-24 pb-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-start">

            {/* Colonne gauche */}
            <div className="md:col-span-5 flex flex-col gap-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-600 block mb-4">
                  {entry.period}
                </span>
                <h3 className="font-serif text-6xl md:text-8xl text-white font-light leading-none mb-12">
                  {entry.title}
                </h3>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative overflow-hidden"
                style={{ height: entry.imgHeight || "580px" }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={entry.imgs[imgIndex]}
                    alt={entry.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full h-full object-cover ${entry.imgPosition} transition-transform duration-700 hover:scale-105`}
                  />
                </AnimatePresence>

                {/* Bouton switch photo visible */}
                {hasMultipleImgs && (
                  <button
                    onClick={() => setImgIndex((prev) => (prev + 1) % entry.imgs.length)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm border border-white/30 hover:border-white hover:bg-black/80 transition-all group"
                  >
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-white">
                      {imgIndex + 1} / {entry.imgs.length}
                    </span>
                    <ChevronDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                  </button>
                )}
              </motion.div>
            </div>

            {/* Colonne droite */}
            <div className="md:col-span-7 md:pt-32 flex flex-col gap-10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-16 h-[1px] bg-white/20 origin-left"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-2xl md:text-3xl text-white/80 font-light leading-relaxed"
              >
                {entry.desc}
              </motion.p>

              {/* Precedent / Suivant plus visibles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-6 pt-8 border-t border-white/10"
              >
                <button
                  onClick={() => handleSetActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-6 py-3 border border-white/20 text-white text-[10px] font-sans tracking-[0.3em] uppercase hover:border-white hover:bg-white hover:text-black transition-all disabled:opacity-20"
                >
                  ← Precedent
                </button>
                <button
                  onClick={() => handleSetActive(Math.min(entries.length - 1, active + 1))}
                  disabled={active === entries.length - 1}
                  className="px-6 py-3 border border-white/20 text-white text-[10px] font-sans tracking-[0.3em] uppercase hover:border-white hover:bg-white hover:text-black transition-all disabled:opacity-20"
                >
                  Suivant →
                </button>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
