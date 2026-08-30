"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PHOTOS = 41;
const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => `/lookbook-${i + 1}.jpg`);

export default function Flipbook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [direction, setDirection] = useState(1);

  const spreads = [
    { left: "text", right: photos[0] },
    ...Array.from({ length: Math.ceil((photos.length - 1) / 2) }, (_, i) => ({
      left: photos[1 + i * 2] || null,
      right: photos[2 + i * 2] || null,
    })),
  ];

  const goNext = () => {
    if (currentSpread < spreads.length - 1) {
      setDirection(1);
      setCurrentSpread((c) => c + 1);
    }
  };

  const goPrev = () => {
    if (currentSpread > 0) {
      setDirection(-1);
      setCurrentSpread((c) => c - 1);
    } else {
      setIsOpen(false);
    }
  };

  const spread = spreads[currentSpread];

  const PAGE_HEIGHT = "70vh";

  return (
    <div className="flex flex-col items-center gap-8 px-6 md:px-24">

      <AnimatePresence mode="wait">

        {/* ── LIVRE FERMÉ ── */}
        {!isOpen && (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Cover portrait */}
            <div className="relative shadow-2xl" style={{ height: PAGE_HEIGHT }}>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-xl rounded-full" />
              <img
                src="/lookbook-cover.jpg"
                alt="Cover"
                className="h-full w-auto object-contain"
                style={{ display: "block" }}
              />
              {/* Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] font-sans tracking-[0.35em] uppercase text-neutral-500 group-hover:text-white transition-colors"
            >
              Ouvrir le lookbook
            </motion.p>
          </motion.div>
        )}

        {/* ── LIVRE OUVERT ── */}
        {isOpen && (
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center gap-8"
          >
            <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600">
              {currentSpread + 1} / {spreads.length}
            </p>

            {/* Double page */}
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/50 blur-2xl rounded-full" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSpread}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex shadow-2xl"
                  style={{ height: PAGE_HEIGHT }}
                >
                  {/* Page gauche */}
                  <div className="w-1/2 h-full relative flex-shrink-0"
                    style={{ borderRight: "3px solid rgba(0,0,0,0.25)" }}>
                    {spread.left === "text" ? (
                      <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-14 py-12 bg-white">
                        <div className="w-8 h-[1px] bg-[#C8A96E] mb-10" />
                        <p className="font-serif text-lg md:text-2xl text-[#1a1a1a] leading-relaxed text-center italic font-light">
                          Ici, on ne fait pas tout. On fait le Polo.
                        </p>
                        <p className="font-serif text-sm md:text-base text-[#555] leading-relaxed text-center mt-6 font-light">
                          Quand les clients nous demandent du Purple Label ou du Double RL, on leur répond avec fierté : nous, c&apos;est Polo Ralph Lauren.
                        </p>
                        <p className="font-serif text-sm text-[#888] text-center mt-6 italic font-light">
                          Collection Homme Automne-Hiver 2026.
                        </p>
                        <div className="w-8 h-[1px] bg-[#C8A96E] mt-10" />
                        {/* Numéro de page */}
                        <p className="absolute bottom-4 text-[10px] font-sans tracking-widest text-neutral-300">01</p>
                      </div>
                    ) : spread.left ? (
                      <img
                        src={spread.left}
                        alt="Lookbook"
                        className="w-full h-full object-contain bg-white"
                      />
                    ) : (
                      <div className="w-full h-full bg-white" />
                    )}
                    <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
                  </div>

                  {/* Page droite */}
                  <div className="w-1/2 h-full relative flex-shrink-0">
                    {spread.right ? (
                      <img
                        src={spread.right}
                        alt="Lookbook"
                        className="w-full h-full object-contain bg-white"
                      />
                    ) : (
                      <div className="w-full h-full bg-white" />
                    )}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <button onClick={goPrev}
                className="p-3 rounded-full border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={goNext}
                disabled={currentSpread === spreads.length - 1}
                className="p-3 rounded-full border border-white/20 text-white disabled:opacity-20 hover:border-white hover:bg-white/5 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
