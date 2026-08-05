"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Award, Compass, BookOpen, BarChart3, MessageSquare, MapPin } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
}

const menuItems = [
  {
    id: "maison",
    num: "I",
    title: "LA MAISON RALPH LAUREN",
    subtitle: "Histoire, univers de marque & organigramme des services",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "poste",
    num: "II",
    title: "MON POSTE & RESPONSABILITÉS",
    subtitle: "Mission clef, positionnement & objectifs chiffrés (KPIs)",
    icon: Award,
    highlight: true,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "carnet",
    num: "III",
    title: "CARNET DE BORD",
    subtitle: "Journal semaine par semaine, coulisses & résolution de défis",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "strategie",
    num: "IV",
    title: "ANALYSE STRATÉGIQUE",
    subtitle: "Concurrents, tendances luxe & problématique personnelle",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "rencontres",
    num: "V",
    title: "RENCONTRES & REGARDS CROISÉS",
    subtitle: "Interviews, portraits & grands formats de citations",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "voyage",
    num: "VI",
    title: "RETOUR DE VOYAGE",
    subtitle: "Bilan personnel, matrice de compétences & projection",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Navigation({ isOpen, onClose, onSelectSection }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-16 overflow-y-auto"
        >
          {/* Background image preview on hover */}
          <div className="absolute inset-0 z-0 opacity-15 transition-opacity duration-700 pointer-events-none overflow-hidden">
            {hoveredIndex !== null && (
              <motion.img
                key={hoveredIndex}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={menuItems[hoveredIndex].image}
                alt="Section Preview"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            )}
          </div>

          {/* Top Bar inside Overlay */}
          <div className="relative z-10 flex justify-between items-center w-full border-b border-white/10 pb-6">
            <div className="flex items-center space-x-4">
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white">
                RALPH LAUREN
              </span>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-400 border-l border-white/20 pl-4">
                SOMMAIRE ÉDITORIAL
              </span>
            </div>

            <button
              onClick={onClose}
              className="group p-3 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Navigation List */}
          <div className="relative z-10 my-8 max-w-5xl mx-auto w-full grid grid-cols-1 gap-4 md:gap-6">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative cursor-pointer p-5 md:p-6 rounded-xl transition-all duration-500 border ${
                    item.highlight
                      ? "border-white/30 bg-white/5 hover:border-white hover:bg-white/10"
                      : "border-white/5 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className="font-serif text-2xl md:text-3xl text-neutral-400 group-hover:text-white transition-colors duration-300 w-10">
                        {item.num}
                      </span>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h2 className="font-serif text-xl md:text-2xl tracking-wider text-white group-hover:translate-x-2 transition-transform duration-300">
                            {item.title}
                          </h2>
                          {item.highlight && (
                            <span className="text-[9px] font-sans tracking-[0.2em] px-2 py-0.5 rounded-full bg-white text-black font-semibold uppercase">
                              ESSENTIEL
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-neutral-400 font-sans mt-1 group-hover:text-neutral-300 transition-colors">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Metadata inside Overlay */}
          <div className="relative z-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-neutral-400 font-sans gap-4">
            <div>
              <p className="text-white font-medium">Éléonore de Saint-Germain</p>
              <p className="text-[11px] text-neutral-400">
                Assistant Visual Merchandiser & Client Experience Coordinator · Flagship Saint-Germain Paris
              </p>
            </div>
            <div className="text-left md:text-right text-[11px]">
              <p>Tutrice de stage : <span className="text-neutral-300">Camille Mercier (Directrice Flagship)</span></p>
              <p>Promotrice académique : <span className="text-neutral-300">Prof. Hélène Vance</span></p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
