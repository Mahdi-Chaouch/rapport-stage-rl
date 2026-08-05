"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Users, ChevronDown, Award, Star } from "lucide-react";

interface OrganigramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrganigramModal({ isOpen, onClose }: OrganigramModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 overflow-y-auto"
        >
          <div className="relative w-full max-w-5xl bg-[#08080A] border border-white/20 rounded-3xl p-6 md:p-12 text-white max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
                  STRUCTURE ORGANISATIONNELLE
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-white mt-1">
                  Organigramme Ralph Lauren EMEA &amp; Flagship
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tree View Structure */}
            <div className="space-y-8 font-sans">
              {/* Level 1: Global Direction */}
              <div className="text-center p-4 rounded-xl bg-white/10 border border-white/20 max-w-md mx-auto">
                <span className="text-[9px] font-mono tracking-widest text-neutral-300 uppercase block">DIRECTION MONDIALE (NYC)</span>
                <p className="font-serif text-lg text-white font-medium">Ralph Lauren</p>
                <p className="text-xs text-neutral-400">Executive Chairman & Chief Creative Officer</p>
              </div>

              <div className="w-0.5 h-6 bg-white/20 mx-auto" />

              {/* Level 2: EMEA Regional Direction */}
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 max-w-lg mx-auto">
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block">DIRECTION RÉGIONALE EMEA (Genève / Paris)</span>
                <p className="font-serif text-lg text-white font-medium">Direction Retail &amp; Merchandising EMEA</p>
                <p className="text-xs text-neutral-400">Supervision des Flagships &amp; Boutiques Réseau</p>
              </div>

              <div className="w-0.5 h-6 bg-white/20 mx-auto" />

              {/* Level 3: Flagship Saint-Germain */}
              <div className="p-6 rounded-2xl bg-neutral-900 border border-white/20">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-white uppercase px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    FLAGSHIP SAINT-GERMAIN (PARIS)
                  </span>
                  <h4 className="font-serif text-xl text-white mt-2">Camille Mercier · Directrice du Flagship</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {/* Department A */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                    <span className="text-[9px] font-mono text-neutral-400 block uppercase">Pôle Visuel &amp; Image</span>
                    <p className="font-serif text-base text-white font-medium mt-1">Directrice Merchandising France</p>
                    {/* Highlighted Student Position */}
                    <div className="mt-3 p-3 rounded-lg bg-white text-black font-semibold">
                      <div className="flex items-center space-x-1.5 text-[9px] font-mono tracking-widest uppercase text-neutral-800 mb-0.5">
                        <Star className="w-3 h-3 fill-black" />
                        <span>POSTE DU STAGE</span>
                      </div>
                      <p className="font-serif text-sm leading-tight">Éléonore de Saint-Germain</p>
                      <p className="text-[10px] text-neutral-700 font-sans font-normal">Assistant VM & Client Experience</p>
                    </div>
                  </div>

                  {/* Department B */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] font-mono text-neutral-400 block uppercase">Pôle Sales &amp; Styling</span>
                    <p className="font-serif text-base text-white font-medium mt-1">Senior Retail Sales Manager</p>
                    <p className="text-xs text-neutral-400 mt-2">Équipe de 18 Personal Shoppers &amp; Stylists Haute Couture</p>
                  </div>

                  {/* Department C */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] font-mono text-neutral-400 block uppercase">Pôle Clienteling &amp; VIP</span>
                    <p className="font-serif text-base text-white font-medium mt-1">Senior Clienteling Specialist</p>
                    <p className="text-xs text-neutral-400 mt-2">Conciergerie VIP &amp; Private Salon Styling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
