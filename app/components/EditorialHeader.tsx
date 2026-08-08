"use client";

import { motion } from "framer-motion";
import { Menu, Printer, Sparkles } from "lucide-react";
import content from "@/data/content";

interface EditorialHeaderProps {
  onOpenMenu: () => void;
  onOpenPrint: () => void;
  activeSection: string;
  visible: boolean;
}

export default function EditorialHeader({
  onOpenMenu,
  onOpenPrint,
  activeSection,
  visible,
}: EditorialHeaderProps) {
  if (!visible) return null;

  const { global } = content;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto mix-blend-difference"
    >
      {/* Brand Monogram */}
      <a
        href="#hero"
        className="group flex items-center space-x-3 text-white transition-opacity duration-300"
      >
        <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold border-b border-white/20 pb-0.5 group-hover:border-white transition-colors">
          {global.siteTitle}
        </span>
        <span className="hidden sm:inline-block text-[9px] font-sans uppercase tracking-[0.3em] text-neutral-400 pl-2 border-l border-white/20">
          PARIS · 173 ST-GERMAIN
        </span>
      </a>

      {/* Current Active Section Indicator */}
      <div className="hidden lg:flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md bg-black/30">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-300">
          {activeSection || "ÉDITORIAL INTERACTIF"}
        </span>
      </div>

      {/* Action Triggers */}
      <div className="flex items-center space-x-4">
        {/* PDF / Defense Print trigger */}
        <button
          onClick={onOpenPrint}
          className="hidden sm:flex items-center space-x-2 text-[10px] uppercase font-sans tracking-[0.25em] text-neutral-300 hover:text-white px-3.5 py-2 rounded-full border border-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300"
          title="Consulter la version Synthèse pour Soutenance (PDF)"
        >
          <Printer className="w-3 h-3" />
          <span>SYNTHÈSE</span>
        </button>

        {/* Minimalist Luxury Burger Menu */}
        <button
          onClick={onOpenMenu}
          className="group flex items-center space-x-3 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white transition-all duration-300 hover:scale-105"
          aria-label="Open Navigation Menu"
        >
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-medium">
            MENU
          </span>
          <div className="flex flex-col space-y-1.5 w-4 justify-center items-end">
            <span className="w-4 h-[1px] bg-white group-hover:w-3 transition-all duration-300" />
            <span className="w-2.5 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
          </div>
        </button>
      </div>
    </motion.header>
  );
}
