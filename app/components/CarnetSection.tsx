"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const entries = [
  {
    period: "Semaines 1 — 2",
    title: "L'Apprentissage",
    img: "/carnet-1.jpg",
    note: "Premier jour. Je decouvre la boutique, l'equipe, les codes.",
    desc: "Premiers pas au sein de la boutique de la Madeleine. J'apprends le stock, les references produits, les differentes collections Polo, les codes de la maison. Chaque detail compte — des etiquettes aux cintres, de la disposition des rayons aux codes vestimentaires de l'equipe.",
  },
  {
    period: "Semaines 2 — 4",
    title: "Le Feu des Soldes",
    img: "/carnet-2.jpg",
    note: "Le rush. Les clients affluent. On s'adapte.",
    desc: "Les soldes d'ete battent leur plein. Etiquetage des produits, mise en avant des pieces soldees, gestion du flux client intensifie. Une periode qui m'a appris a rester calme et efficace sous pression.",
  },
  {
    period: "Semaines 4 — 6",
    title: "Le Floor",
    img: "/carnet-3.jpg",
    note: "Je connais les espaces. Je guide. Je vends.",
    desc: "Je prends mes marques sur le floor. Accueil client, presentation des collections, guidage dans les differents espaces — sous-sol Polo sportswear, rez-de-chaussee formel, etage femme. J'apprends a accompagner chaque parcours d'achat de A a Z.",
  },
  {
    period: "Semaines 6 — 8",
    title: "Le Merch",
    img: "/carnet-4.jpg",
    note: "La nouvelle collection arrive. On reconstruit la boutique.",
    desc: "Arrivee de la nouvelle collection avec l'equipe Brand Image. Nous installons ensemble les nouvelles pieces — disposition, facing, harmonie des coloris. Le PSR GSR aussi : tous les produits hors collection sont identifies et renvoyes.",
  },
  {
    period: "Semaines 8 — 12",
    title: "L'Autonomie",
    img: "/carnet-5.jpg",
    note: "Je suis chez moi. La boutique est ma maison.",
    desc: "Je connais maintenant la boutique par coeur. Gestion autonome du stock, reassort des rayons, Click and Collect, accueil et vente clients. Je contribue pleinement a la vie de la boutique. Ce stage m'a transforme.",
  },
];

export default function CarnetSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="carnet" className="relative border-b border-white/10 bg-[#050505]">

      {/* ── CHAPTER INTRO ── */}
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
          className="pinyon text-3xl sm:text-4xl md:text-5xl text-neutral-400 font-light"
        >
          Trois mois au coeur de la maison.
        </motion.p>
      </div>

      {/* ── NAVIGATION BULLES ── */}
      <div className="px-6 md:px-24 pb-16 flex items-center gap-6 flex-wrap border-t border-white/10 pt-8">
        {entries.map((entry, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex items-center gap-3 transition-all duration-300 group"
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
              {entry.period}
            </span>
          </button>
        ))}
      </div>

      {/* ── CONTENU ÉDITORIAL ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-24 pb-28"
        >
          {/* Layout magazine asymétrique */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-start">

            {/* Colonne gauche — 5 cols */}
            <div className="md:col-span-5 flex flex-col gap-0">

              {/* Titre éditorial */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-600 block mb-4">
                  {entries[active].period}
                </span>
                <h3 className="font-serif text-6xl md:text-8xl text-white font-light leading-none mb-12">
                  {entries[active].title}
                </h3>
              </motion.div>

              {/* Image scroll */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative overflow-hidden"
                style={{ height: "480px" }}
              >
                <img
                  src={entries[active].img}
                  alt={entries[active].title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                {/* Field note sur l'image */}
                <div className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: "linear-gradient(transparent, rgba(5,5,5,0.9))" }}>
                  <p className="font-serif italic text-white/60 text-sm">
                    — {entries[active].note}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Colonne droite — 7 cols */}
            <div className="md:col-span-7 md:pt-32 flex flex-col gap-10">

              {/* Ligne décorative */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-16 h-[1px] bg-white/20 origin-left"
              />

              {/* Texte éditorial */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-2xl md:text-3xl text-white/80 font-light leading-relaxed"
              >
                {entries[active].desc}
              </motion.p>

              {/* Navigation prev / next */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-8 pt-8 border-t border-white/10"
              >
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-500 hover:text-white transition-colors disabled:opacity-20"
                >
                  ← Precedent
                </button>
                <button
                  onClick={() => setActive((a) => Math.min(entries.length - 1, a + 1))}
                  disabled={active === entries.length - 1}
                  className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-500 hover:text-white transition-colors disabled:opacity-20"
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
