"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const QA = [
  {
    q: "Pourquoi avoir choisi Ralph Lauren pour ton stage ?",
    a: "Ralph Lauren, c'est bien plus qu'une marque pour moi. C'est un univers, une vision, une facon d'apprehender le luxe qui m'a toujours fascine. Quand j'ai eu l'opportunite de postuler a la boutique de la Madeleine — la premiere boutique europeenne de la maison — ca a ete une evidence. Je voulais apprendre le luxe la ou il se vit vraiment, pas juste l'etudier dans un cours.",
  },
  {
    q: "C'est quoi le PSR GSR et pourquoi c'est important ?",
    a: "Le PSR GSR, c'est le processus par lequel on identifie tous les produits hors collection et qu'on renvoie a l'entrepot central. Chaque article est scanne, controle, emballe. Ca m'a appris la rigueur et l'importance de la gestion de stock dans une maison de luxe.",
  },
  {
    q: "Quelle est la difference entre Polo Ralph Lauren et Purple Label ?",
    a: "Polo Ralph Lauren c'est l'ADN de la maison — le casual chic americain, accessible, iconique. Purple Label c'est le summum — des costumes tailles sur mesure dans les meilleures etoffes. A la Madeleine on ne fait que du Polo, et on en est fiers.",
  },
  {
    q: "C'est quoi une journee type a la boutique de la Madeleine ?",
    a: "On arrive, on prepare le floor — reassort, facing, tout doit etre parfait avant l'ouverture. Ensuite c'est l'accueil client, la vente, le Click & Collect. Chaque journee est differente. C'est ca qui est addictif.",
  },
  {
    q: "Est-ce qu'il y a eu des moments difficiles ?",
    a: "Oui, clairement. Les premieres semaines j'etais completement perdu. Il y a aussi eu des clients difficiles, des moments de rush intense pendant les soldes. Mais c'est ces moments-la qui m'ont le plus appris.",
  },
  {
    q: "Comment tu te sentais le premier jour ?",
    a: "Impressionne et un peu intimide. En entrant dans la boutique pour la premiere fois, j'ai eu l'impression de quitter Paris pour entrer dans un autre monde. J'avais juste envie de ne pas decevoir.",
  },
  {
    q: "Tu referais ce stage si tu pouvais revenir en arriere ?",
    a: "Sans hesiter. Ce stage m'a donne bien plus que des competences professionnelles. Il m'a donne une vision, une exigence. Ralph Lauren m'a appris que l'excellence ne s'improvise pas — ca se construit chaque jour.",
  },
  {
    q: "Ou tu te vois dans 5 ans ?",
    a: "Brand Manager dans une grande maison de luxe. Je veux etre celui qui construit l'identite d'une marque, qui pense la strategie. Ce stage m'a confirme que c'est la que je veux aller.",
  },
  {
    q: "Un conseil pour un futur stagiaire chez Ralph Lauren ?",
    a: "Sois curieux. Pose des questions. Observe tout. Et surtout : sois present a 100%. Chaque journee dans une maison comme Ralph Lauren est une lecon. Ne la rate pas.",
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQ, setActiveQ] = useState<number | null>(null);
  const [introduced, setIntroduced] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIntroduced(true), 400);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveQ(null);
    setIntroduced(false);
  };

  return (
    <>
      {/* Bouton flottant — blanc, plus visible */}
      <button
        id="polo-trigger"
        onClick={handleOpen}
        className="fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-6 py-3 bg-white text-black border border-white/20 shadow-2xl hover:bg-neutral-100 transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
        <span className="font-sans text-xs tracking-[0.3em] uppercase font-semibold">POLO</span>
      </button>

      {/* Panel chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] flex items-end md:items-center justify-center md:justify-end p-4 md:p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[600px] bg-[#050505] border border-white/15 shadow-2xl flex flex-col"
              style={{ maxHeight: "80vh" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <span className="font-serif text-black text-sm font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-white font-semibold">POLO</p>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-0.5">Assistant de Constantin · Ralph Lauren</p>
                  </div>
                </div>
                <button onClick={handleClose} className="text-neutral-500 hover:text-white transition-colors p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6" style={{ scrollbarWidth: "none" as const }}>

                <AnimatePresence>
                  {introduced && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-4"
                    >
                      <div className="w-9 h-9 bg-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-serif text-black text-xs font-semibold">P</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 px-6 py-4 max-w-[85%]">
                        <p className="font-serif text-base text-white/80 leading-relaxed font-light">
                          Bonjour, je suis <span className="text-white font-normal">POLO</span> — l'assistant de Constantin. Je reponds a sa place sur son experience chez Ralph Lauren. Choisissez une question ci-dessous.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeQ !== null && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-end"
                      >
                        <div className="bg-white text-black px-6 py-4 max-w-[80%]">
                          <p className="font-sans text-sm leading-relaxed">
                            {QA[activeQ].q}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-4"
                      >
                        <div className="w-9 h-9 bg-white flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="font-serif text-black text-xs font-semibold">P</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 px-6 py-4 max-w-[80%]">
                          <p className="font-serif text-base text-white/80 leading-relaxed font-light">
                            {QA[activeQ].a}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Questions */}
              <div className="border-t border-white/10 px-6 py-5 space-y-2" style={{ maxHeight: "300px", overflowY: "auto", scrollbarWidth: "none" as const }}>
                <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600 mb-4 px-2">
                  Questions suggérees
                </p>
                {QA.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQ(i)}
                    className={`w-full text-left px-5 py-3 border transition-all duration-200 ${
                      activeQ === i
                        ? "border-white bg-white text-black"
                        : "border-white/10 text-neutral-400 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    <p className="font-sans text-sm leading-relaxed">{item.q}</p>
                  </button>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
