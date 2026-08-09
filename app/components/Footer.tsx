"use client";

import { ArrowUp } from "lucide-react";
import content from "@/data/content";

interface FooterProps {
  onSelectSection: (id: string) => void;
}

export default function Footer({ onSelectSection }: FooterProps) {
  const { global } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030304] border-t border-white/10 text-neutral-400 font-sans py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-12">
          <div>
            <span className="font-serif text-3xl md:text-4xl text-white tracking-[0.2em]">
              {global.siteTitle}
            </span>
            <p className="text-xs text-neutral-400 mt-2 font-sans">
              {global.siteSubTitle}
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-3 px-5 py-3 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-xs font-sans tracking-widest uppercase">HAUT DE PAGE</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Chapters Links & Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">

          {/* Col 1: Sommaire */}
          <div className="space-y-3">
            <h4 className="font-serif text-base text-white font-medium">Sommaire Éditorial</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectSection("maison")} className="hover:text-white transition-colors">
                  I · La Maison Ralph Lauren
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection("poste")} className="hover:text-white transition-colors text-white font-medium">
                  II · Mon Poste
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection("carnet")} className="hover:text-white transition-colors">
                  III · Carnet de Bord
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection("strategie")} className="hover:text-white transition-colors">
                  IV · Analyse Stratégique
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection("rencontres")} className="hover:text-white transition-colors">
                  V · Rencontres &amp; Interviews
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection("voyage")} className="hover:text-white transition-colors">
                  VI · Retour de Voyage &amp; Bilan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Étudiant */}
          <div className="space-y-3">
            <h4 className="font-serif text-base text-white font-medium">Étudiant</h4>
            <p className="text-white font-medium">{global.studentName}</p>
            <p className="text-neutral-400">{global.academicProgram}</p>
            <p className="text-neutral-500 text-[11px] pt-2">Promotion 28LM1B</p>
          </div>

          {/* Col 3: Adresse de la boutique */}
          <div className="space-y-3">
            <h4 className="font-serif text-base text-white font-medium">Adresse de la boutique</h4>
            <p className="text-white">{global.location}</p>
          </div>

          {/* Col 4: Encadrement */}
          <div className="space-y-3">
            <h4 className="font-serif text-base text-white font-medium">Encadrement</h4>
            <p>Tuteur de stage : <span className="text-white">{global.companyTutor}</span></p>
            <p>Tutrice académique : <span className="text-white">{global.academicTutor}</span></p>
          </div>

        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 gap-4 font-mono">
          <p>© 2026 {global.siteTitle} — Rapport de stage interactif par {global.studentName}.</p>
          <p>Tous droits réservés · Usage académique et professionnelle.</p>
        </div>

      </div>
    </footer>
  );
}
