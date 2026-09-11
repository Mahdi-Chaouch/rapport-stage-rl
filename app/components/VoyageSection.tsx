"use client";

import { motion } from "framer-motion";

const competences = [
  { label: "Accueil & conseil client", level: 90 },
  { label: "Techniques de vente", level: 85 },
  { label: "Merchandising visuel", level: 80 },
  { label: "Gestion du stock & reassort", level: 85 },
  { label: "Click & Collect", level: 90 },
  { label: "Connaissance produit Polo RL", level: 95 },
  { label: "Travail en equipe", level: 90 },
  { label: "Gestion du stress & rush", level: 80 },
];

export default function VoyageSection() {
  return (
    <section id="voyage" className="relative border-b border-white/10 bg-[#050505]">

      {/* HEADER */}
      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          VI · Retour de Voyage
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-6"
        >
          Bilan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="pinyon text-4xl sm:text-5xl md:text-7xl text-neutral-400 font-light"
        >
          On ne revient jamais vraiment inchange.
        </motion.p>
      </div>

      {/* TEXTE BILAN */}
      <div className="px-6 md:px-24 pb-24 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
              CE QUE CE STAGE M'A APPRIS
            </span>
            <p className="font-serif text-xl md:text-2xl text-white font-light leading-relaxed">
              Trois mois. Douze semaines. Quatre-vingt-quatre jours a pousser les portes de la Madeleine avec la meme impatience que le premier jour. Ce stage m'a appris que le luxe ne se resume pas a un produit ou a un prix — c'est une exigence permanente, une attention portee a chaque detail, a chaque client, a chaque interaction.
            </p>
            <p className="font-serif text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mt-6">
              J'arrive avec des connaissances theoriques, je repars avec quelque chose de plus precieux : une posture professionnelle, une vision du commerce et du service qui ne ressemble a aucun cours. Ralph Lauren m'a appris que l'excellence n'est pas un effort ponctuel. C'est une habitude.
            </p>
          </motion.div>

          {/* COMPETENCES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
              COMPETENCES ACQUISES
            </span>
            <div className="space-y-5">
              {competences.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">{c.label}</span>
                    <span className="font-mono text-[10px] text-blue-400">{c.level}%</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* PROJECTION PRO */}
      <div className="px-6 md:px-24 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-8">
            PROJECTION PROFESSIONNELLE
          </span>
          <h3 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-8">
            Brand Manager.<br />
            <span className="text-neutral-500">A l'international.</span>
          </h3>
          <p className="font-serif text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            Ce stage m'a confirme que je veux evoluer dans l'univers du luxe — pas seulement le vendre, mais le construire. Devenir Brand Manager, c'est etre celui qui pense la strategie, qui construit l'identite d'une marque, qui cree les experiences que les clients viennent chercher. Ralph Lauren n'aura ete que le premier chapitre d'un voyage qui ne fait que commencer.
          </p>
        </motion.div>
      </div>

      {/* CLOSING VISUEL — LOGO RL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-48 md:py-56 border-t border-white/10"
      >
        <img
          src="/polo-player.png"
          alt="Ralph Lauren"
          className="h-40 md:h-48 w-auto object-contain opacity-35 invert mb-10"
        />
        <p className="font-mono text-xs md:text-sm tracking-[0.5em] uppercase text-neutral-500">
          PARIS · MADELEINE · 2026
        </p>
        <p className="font-serif text-lg md:text-xl text-neutral-500 mt-4 italic">
          Constantin LESLEY JEYAKANTHAN · ISG Luxury Program
        </p>
      </motion.div>

    </section>
  );
}
