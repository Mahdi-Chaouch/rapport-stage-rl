"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const QA = [
  {
    q: "Pourquoi avoir choisi Ralph Lauren pour ton stage ?",
    a: "Ralph Lauren, c'est bien plus qu'une marque pour moi. C'est un univers, une vision, une facon d'appréhender le luxe qui m'a toujours fascine. Quand j'ai eu l'opportunite de postuler a la boutique de la Madeleine — la premiere boutique europeenne de la maison — ca a ete une evidence. Je voulais apprendre le luxe la ou il se vit vraiment, pas juste l'etudier dans un cours.",
  },
  {
    q: "C'est quoi le PSR GSR et pourquoi c'est important ?",
    a: "Le PSR GSR, c'est le processus par lequel on identifie tous les produits qui sont hors collection — des pieces qui ne correspondent plus a la saison en cours — et qu'on renvoie a l'entrepot central. C'est une mission de precision : chaque article est scanne, controle, emballe. Ca m'a appris la rigueur et l'importance de la gestion de stock dans une maison de luxe.",
  },
  {
    q: "Quelle est la difference entre Polo Ralph Lauren et Purple Label ?",
    a: "C'est la question que les clients posent le plus souvent ! Polo Ralph Lauren c'est l'ADN de la maison — le casual chic americain, accessible, iconique. Purple Label c'est le summum — des costumes tailles sur mesure dans les meilleures etoffes, pour une clientele d'exception. A la Madeleine on ne fait que du Polo, et on en est fiers.",
  },
  {
    q: "C'est quoi une journee type a la boutique de la Madeleine ?",
    a: "On arrive, on prepare le floor — reassort, facing, tout doit etre parfait avant l'ouverture. Ensuite c'est l'accueil client, la vente, le Click & Collect. Entre les clients on gere le stock, on range. Chaque journee est differente. C'est ca qui est addictif — on ne s'ennuie jamais dans une boutique Ralph Lauren.",
  },
  {
    q: "Est-ce qu'il y a eu des moments difficiles ?",
    a: "Oui, clairement. Les premieres semaines j'etais completement perdu — le stock, les references, les codes de la maison, tout etait nouveau. Il y a aussi eu des clients difficiles, des moments de rush intense pendant les soldes. Mais c'est ces moments-la qui m'ont le plus appris. La difficulte, c'est le meilleur des professeurs.",
  },
  {
    q: "Comment tu te sentais le premier jour ?",
    a: "Impressionne et un peu intimide, je vais pas mentir. En entrant dans la boutique pour la premiere fois, j'ai eu l'impression de quitter Paris pour entrer dans un autre monde. Les boiseries, les lustres, les tapis d'Orient... Et l'equipe qui te regarde avec le sourire. J'avais juste envie de ne pas decevoir.",
  },
  {
    q: "Tu referais ce stage si tu pouvais revenir en arriere ?",
    a: "Sans hesiter, la reponse est oui. Ce stage m'a donne bien plus que des competences professionnelles. Il m'a donne une vision, une exigence, une facon d'apprehender le travail et le service. Ralph Lauren m'a appris que l'excellence, ca ne s'improvise pas — ca se construit chaque jour.",
  },
  {
    q: "Ou tu te vois dans 5 ans ?",
    a: "Brand Manager dans une grande maison de luxe. Je veux etre celui qui construit l'identite d'une marque, qui pense la strategie, qui cree les experiences. Ce stage m'a confirme que c'est la que je veux aller. Ralph Lauren n'aura ete que le premier chapitre.",
  },
  {
    q: "Un conseil pour un futur stagiaire chez Ralph Lauren ?",
    a: "Sois curieux. Pose des questions. Observe tout — comment les vendeurs parlent aux clients, comment les produits sont presentes, comment l'equipe fonctionne. Et surtout : sois present a 100%. Chaque journee dans une maison comme Ralph Lauren est une lecon. Ne la rate pas.",
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQ, setActiveQ] = useState<number | null>(null);
  const [introduced, setIntroduced] = useState(false);

  const handleOpen = () => {
  setIsOpen(true);
  setTimeout(() => {
    setIntroduced(true);
    const audio = new Audio("/polo-intro.mp3");
    audio.play();
  }, 400);
};
  const handleClose = () => {
    setIsOpen(false);
    setActiveQ(null);
    setIntroduced(false);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
  id="polo-trigger"
  onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-5 py-3 bg-[#050505] border border-white/20 hover:border-[#C8A96E] transition-all duration-300 shadow-2xl"
      >
        <MessageCircle className="w-4 h-4 text-[#C8A96E]" />
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white">POLO</span>
        <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
      </motion.button>

      {/* Overlay chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] flex items-end md:items-center justify-center md:justify-end p-4 md:p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[620px] bg-[#050505] border border-white/10 shadow-2xl flex flex-col"
style={{ maxHeight: "88vh" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
  <img src="/polo-player.png" alt="POLO" className="w-6 h-6 object-contain brightness-0 invert" />
</div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white">POLO</p>
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-500">Assistant de Constantin</p>
                  </div>
                </div>
                <button onClick={handleClose} className="text-neutral-500 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4" style={{ scrollbarWidth: "none" as const }}>

                {/* Message intro */}
                <AnimatePresence>
                  {introduced && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
  <img src="/polo-player.png" alt="POLO" className="w-6 h-6 object-contain brightness-0 invert" />
</div>
                      <div className="bg-white/5 border border-white/10 px-4 py-3 max-w-[85%]">
                        <p className="font-serif text-sm text-white/80 leading-relaxed font-light">
                          Bonjour, je suis <span className="text-blue-400 font-normal">POLO</span>, l'assistant de Constantin. Je réponds à sa place sur son expérience chez Ralph Lauren. Choisissez une question ci-dessous.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Q&R actif */}
                <AnimatePresence>
                  {activeQ !== null && (
                    <>
                      {/* Question */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-end"
                      >
                        <div className="bg-white/10 border border-white/10 px-4 py-3 max-w-[85%]">
                          <p className="font-sans text-xs text-white leading-relaxed">
                            {QA[activeQ].q}
                          </p>
                        </div>
                      </motion.div>

                      {/* Réponse */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <img src="/polo-player.png" alt="POLO" className="w-5 h-5 object-contain brightness-0 invert" />
                        </div>
                        <div className="bg-white/5 border border-white/10 px-4 py-3 max-w-[85%]">
                          <p className="font-serif text-sm text-white/80 leading-relaxed font-light">
                            {QA[activeQ].a}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

              </div>

              {/* Questions prédéfinies */}
              <div className="border-t border-white/10 px-4 py-4 space-y-2" style={{ maxHeight: "280px", overflowY: "auto", scrollbarWidth: "none" as const }}>
                <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-neutral-600 mb-3 px-2">
                  Questions suggérées
                </p>
                {QA.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQ(i)}
                    className={`w-full text-left px-4 py-2.5 border transition-all duration-200 ${
                      activeQ === i
                        ? "border-blue-400/50 bg-blue-400/5 text-blue-400"
                        : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <p className="font-sans text-[11px] leading-relaxed">{item.q}</p>
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
