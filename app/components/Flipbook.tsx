"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PHOTOS = 41;

const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => `/lookbook-${i + 1}.jpg`);

const pages = [
  { type: "text" },
  ...photos.map((src) => ({ type: "photo", src })),
];

export default function Flipbook() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (current < pages.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  };

  const page = pages[current];

  return (
    <div className="flex flex-col items-center gap-8 px-6 md:px-24">

      {/* Compteur */}
      <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600">
        {current + 1} / {pages.length}
      </p>

      {/* Livre */}
      <div className="relative w-full max-w-3xl mx-auto">

        {/* Ombre livre */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full" />

        {/* Page */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction > 0 ? 90 : -90, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: direction > 0 ? -90 : 90, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            className="w-full aspect-[3/4] md:aspect-[4/3] shadow-2xl"
          >
            {page.type === "text" ? (
              /* Page texte crème */
              <div className="w-full h-full flex flex-col items-center justify-center px-12 md:px-20 py-16"
                style={{ backgroundColor: "#F5F0E8", borderLeft: "4px solid #D4B896" }}>
                <div className="w-12 h-[1px] bg-[#C8A96E] mb-10" />
                <p className="font-serif text-xl md:text-2xl text-[#3D2B1F] leading-relaxed text-center italic font-light max-w-md">
                  Ici, on ne fait pas tout. On fait le Polo.
                </p>
                <p className="font-serif text-base md:text-lg text-[#6B5544] leading-relaxed text-center mt-6 font-light max-w-md">
                  Quand les clients nous demandent du Purple Label ou du Double RL, on leur répond avec fierté : nous, c&apos;est Polo Ralph Lauren.
                </p>
                <p className="font-serif text-sm md:text-base text-[#8B6B55] leading-relaxed text-center mt-6 italic font-light max-w-sm">
                  Voici la Collection Homme Automne-Hiver 2026.
                </p>
                <div className="w-12 h-[1px] bg-[#C8A96E] mt-10" />
              </div>
            ) : (
              /* Page photo */
              <img
                src={(page as { type: string; src: string }).src}
                alt="Lookbook Ralph Lauren"
                className="w-full h-full object-cover object-top"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 mt-4">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="p-3 rounded-full border border-white/20 text-white disabled:opacity-20 hover:border-white hover:bg-white/5 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Points de progression */}
        <div className="flex gap-1.5">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === current ? "#C8A96E" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={current === pages.length - 1}
          className="p-3 rounded-full border border-white/20 text-white disabled:opacity-20 hover:border-white hover:bg-white/5 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
