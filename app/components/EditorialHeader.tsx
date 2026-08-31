"use client";
import { motion } from "framer-motion";
import { Printer } from "lucide-react";
import content from "@/data/content";

interface EditorialHeaderProps {
  onOpenMenu: () => void;
  onOpenPrint: () => void;
  onOpenChat: () => void;
  activeSection: string;
  visible: boolean;
}

export default function EditorialHeader({
  onOpenMenu,
  onOpenPrint,
  onOpenChat,
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
      
        href="#hero"
        className="group flex items-center space-x-3 text-white transition-opacity duration-300"
      >
        <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-semibold border-b border-white/20 pb-0.5 group-hover:border-white transition-colors">
          {global.siteTitle}
        </span>
        <span className="hidden sm:inline-block text-[9px] font-sans uppercase tracking-[0.3em] text-neutral-400 pl-2 border-l border-white/20">
          PARIS · 2 place de la madeleine
        </span>
      </a>

      <div className="hidden lg:flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md bg-black/30 absolute left-1/2 -translate-x-1/2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-300">
          {activeSection || "EDITORIAL INTERACTIF"}
        </span>
      </div>

      <div className="flex items-center space-x-4">

        {/* Bouton POLO — ouvre le chatbot */}
<button
  onClick={() => {
    const chatBtn = document.getElementById("polo-trigger");
    if (chatBtn) chatBtn.click();
  }}
  className="hidden sm:flex items-center space-x-2 text-[10px] uppercase font-sans tracking-[0.25em] text-neutral-300 hover:text-white px-3.5 py-2 rounded-full border border-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300"
>
  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
  <span>POLO</span>
</button>

        <button
          onClick={onOpenMenu}
          className="group flex items-center space-x-3 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white transition-all duration-300 hover:scale-105"
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
