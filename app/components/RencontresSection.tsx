"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const interview = {
  name: "Léo Szymanski-Foucault",
  age: "24 ans",
  role: "Vendeur senior",
  photo: "/leo.jpg",
  questions: [
    {
      number: "01",
      question:
        "Quelles sont les particularités d’un vendeur senior par rapport à un vendeur junior ?",
      answer:
        "Un vendeur senior doit avant tout faire plus que de la vente. Il doit déjà connaître les différents process du magasin, ainsi que les spécificités légales qui encadrent une vente. Il doit aussi avoir et savoir créer un portefeuille client, sans pour autant négliger les autres tâches nécessaires au bon fonctionnement de la boutique.",
    },
    {
      number: "02",
      question:
        "Parmi les différents univers de la maison, dans lequel êtes-vous le plus à l’aise ?",
      answer:
        "Je dirais que je suis plus à l’aise dans l’univers du casual chic : les pulls câble, les quarter zips, le cachemire, les chinos ou encore les pantalons de costume décontractés. J’aime particulièrement la versatilité des looks que l’on peut créer.",
    },
    {
      number: "03",
      question:
        "Comment l’équipe s’organise-t-elle au cours d’une journée normale ?",
      answer:
        "Le matin, on se réunit pour un brief sur les chiffres réalisés la veille, l’objectif du jour et les différentes informations concernant la marque ou la boutique : une nouvelle collection, l’arrivée de nouveaux produits ou encore les priorités de la journée.",
    },
    {
      number: "04",
      question: "Comment proposez-vous des pièces complémentaires ?",
      answer:
        "Il faut l’amener de manière naturelle et spontanée, tout en restant cohérent avec les pièces déjà essayées. Si un client essaie une chemise, on peut lui proposer une cravate ou une veste. De la même manière, s’il essaie un pantalon, on peut lui proposer une ceinture, par exemple.",
    },
    {
      number: "05",
      question:
        "Qu’est-ce qui vous semble le plus important dans l’expérience client Ralph Lauren ?",
      answer:
        "Le plus important, c’est la connexion et le lien que l’on peut créer avec le client. Il ne s’agit pas simplement d’avoir un rapport vendeur-client, mais une relation plus humaine, fondée sur l’émotion et la compréhension. Le but n’est pas seulement de faire une vente, mais de créer un moment privilégié grâce au conseil, à l’écoute et aux produits.",
    },
  ],
};

export default function RencontresSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="rencontres"
      className="relative border-b border-white/10 bg-[#050505] px-6 py-28 md:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mb-4 block font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-500">
          V · Rencontres & Regards croisés
        </span>

        <h2 className="font-serif text-5xl font-light text-white md:text-8xl">
          Les voix
          <br />
          <span className="text-neutral-500">de la Madeleine.</span>
        </h2>

        <p className="mt-8 max-w-xl text-justify font-serif text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
          Derrière un stage, il y a une équipe, une équipe qu'on voit tous les jours, une équipe avec qui on apprend, une équipe avec qui on rigole, une équipe qui ne ressemble à aucune autre équipe. Mais qui est cette équipe ? 
        
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-5xl"
      >
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
          DOSSIERS DE L’ÉQUIPE
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative w-full overflow-hidden border border-white/15 bg-white/[0.02] text-left transition-all duration-500 hover:border-blue-400/70 hover:bg-blue-400/[0.04]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
            <div className="relative h-[320px] overflow-hidden md:h-full">
              <img
                src={interview.photo}
                alt={interview.name}
                className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                Dossier 01
              </span>
            </div>

            <div className="flex min-h-[320px] flex-col justify-between p-8 md:p-12">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400">
                    Entretien enregistré
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {interview.age}
                  </span>
                </div>

                <h3 className="font-serif text-4xl font-light text-white md:text-6xl">
                  Léo
                  <br />
                  <span className="text-neutral-500">Szymanski-Foucault.</span>
                </h3>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  {interview.role} · Ralph Lauren Madeleine
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-serif text-lg italic text-neutral-500">
                  En mode Savage.
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white transition-transform duration-300 group-hover:translate-x-2">
                  Consulter le dossier →
                </span>
              </div>
            </div>
          </div>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] overflow-y-auto bg-[#050505] px-6 py-16 md:px-24 md:py-24"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="fixed bottom-8 left-1/2 z-[120] -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
            >
              Fermer le dossier ×
            </button>

            <div className="mx-auto max-w-6xl pb-24">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue-400"
              >
                DOSSIER 01 · ENTRETIEN
              </motion.span>

              <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <h2 className="font-serif text-5xl font-light leading-none text-white md:text-8xl">
                    Léo
                    <br />
                    <span className="text-neutral-500">Szymanski-Foucault.</span>
                  </h2>

                  <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    {interview.role} · {interview.age}
                  </p>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                    Ralph Lauren · Madeleine · Paris 8e
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="overflow-hidden"
                >
                  <img
                    src={interview.photo}
                    alt={interview.name}
                    className="h-[50vh] w-full object-cover object-center grayscale md:h-[65vh]"
                  />
                </motion.div>
              </div>

              <div className="mt-24 space-y-20">
                {interview.questions.map((item, index) => (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                    className={`grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-12 ${
                      index % 2 === 0 ? "" : "md:text-right"
                    }`}
                  >
                    <div
                      className={`md:col-span-5 ${
                        index % 2 === 0 ? "" : "md:col-start-8"
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-400">
                        {item.number} · QUESTION
                      </span>

                      <h3 className="mt-5 font-serif text-3xl font-light leading-tight text-white md:text-5xl">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`md:col-span-5 ${
                        index % 2 === 0
                          ? "md:col-start-8"
                          : "md:col-start-1 md:row-start-1"
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                        RÉPONSE DE LÉO
                      </span>

                      <p className="mt-5 font-serif text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
                        {item.answer}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-24 border-t border-white/10 pt-12 text-center"
              >
                <p className="font-serif text-3xl font-light italic text-neutral-400 md:text-5xl">
                  Un métier de conseil,
                  <br />
                  mais surtout de relation humaine.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
