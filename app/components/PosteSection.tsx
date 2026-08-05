"use client";

import { motion } from "framer-motion";
import { Award, Target, TrendingUp, ShieldCheck, Sparkles, CheckCircle2, Star } from "lucide-react";

const kpis = [
  {
    value: "+14.8%",
    label: "Taux de Conversion VIP",
    detail: "Sur les lignes Collection & Purple Label lors des Ventes Privées et Private Clienteling Evenings.",
  },
  {
    value: "08",
    label: "Vitrines Scénographiées",
    detail: "Concept, théâtralisation nocturne et habillage des vitrines du Boulevard Saint-Germain.",
  },
  {
    value: "100%",
    label: "Conformité Directives NYC",
    detail: "Respect absolu des standards de Visual Merchandising édictés par le siège mondial à Madison Avenue.",
  },
  {
    value: "350+",
    label: "Styling Sessions VIP",
    detail: "Accompagnement personnalisé et conciergerie style pour la clientèle haut de gamme internationale.",
  },
];

const expectations = [
  {
    title: "Exigence Absolute du Tailoring & Merchandising",
    desc: "Chaque silhouette exposée en vitrine ou en salon privé répond à un protocole d'épinglage et d'éclairage au millimètre près. L'erreur de pliage ou de nuance chromatique est proscrite.",
  },
  {
    title: "Intelligence Émotionnelle & Codes du Luxe International",
    desc: "Savoir converser et conseiller une clientèle fortunée (Ultra High Net Worth Individuals) nécessite une posture irréprochable, une discrétion totale et une connaissance aiguë de l'histoire du costume.",
  },
  {
    title: "Agilité Nocturne & Gestion du Chiffre d'Affaires",
    desc: "Capacité à orchestrer le réaménagement global du flagship en dehors des heures d'ouverture (00h-06h) lors des basculements de collections sans perturber le chiffre d'affaires quotidien.",
  },
];

export default function PosteSection() {
  return (
    <section id="poste" className="relative py-28 md:py-40 px-6 md:px-16 bg-[#08080A] border-b border-white/10 overflow-hidden">
      {/* Decorative Highlighting Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Highlighted Banner Badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-white font-bold">
            COEUR DU RAPPORT · SECTION MAJEURE
          </span>
        </div>

        {/* High-Impact Main Heading */}
        <div className="mb-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold block mb-3">
            CHAPITRE II · RESPONSABILITÉS & PERFORMANCE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-tight leading-[1.08] max-w-5xl">
            Assistant Visual Merchandiser <br className="hidden md:block" />
            <span className="italic font-normal text-stroke-white text-white">&amp; Client Experience Coordinator</span>
          </h2>
          <p className="text-neutral-400 font-sans text-base md:text-xl max-w-3xl mt-6 font-light leading-relaxed">
            Un rôle charnière à la croisée de la scénographie artistique, de la théâtralisation de l'offre haut de gamme et du pilotage de la performance commerciale au sein du flagship amiral parisien.
          </p>
        </div>

        {/* Organigram Positioning Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-white/20 mb-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-400 uppercase">
                <Target className="w-4 h-4 text-white" />
                <span>POSITIONNEMENT DANS L'ORGANIGRAMME</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white">
                Rattachement Direct & Synergies Internes
              </h3>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                Rattaché(e) directement à la <strong className="text-white">Directrice Merchandising Retail France</strong> et travaillant au quotidien aux côtés de la <strong className="text-white">Directrice du Flagship Saint-Germain</strong>, mon rôle assure le lien stratégique entre la vision artistique édictée à New York et son exécution opérationnelle en boutique.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 font-sans min-w-[280px]">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-neutral-400 uppercase text-[9px] tracking-widest block">N+1 Hiérarchique</span>
                <span className="text-white font-serif text-base font-medium">Directrice Merchandising Retail France</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-neutral-400 uppercase text-[9px] tracking-widest block">N+1 Opérationnel</span>
                <span className="text-white font-serif text-base font-medium">Directrice du Flagship Saint-Germain</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-neutral-400 uppercase text-[9px] tracking-widest block">Partenaires Clés</span>
                <span className="text-white font-serif text-base font-medium">Équipes Clienteling VIP & Sales Stylists</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative KPIs Grid */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Objectifs Chiffrés & Résultats Atteints (KPIs)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="luxury-glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group"
              >
                <span className="font-serif text-4xl md:text-5xl text-white font-medium block group-hover:scale-105 transition-transform duration-300">
                  {kpi.value}
                </span>
                <h4 className="font-serif text-lg text-neutral-200 mt-3 font-semibold">
                  {kpi.label}
                </h4>
                <p className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
                  {kpi.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Expectations & Standards */}
        <div className="luxury-glass p-8 md:p-12 rounded-3xl">
          <div className="flex items-center space-x-3 mb-8">
            <ShieldCheck className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Niveau d'Exigence & Standards de Luxe Attendus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {expectations.map((exp, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <h4 className="font-serif text-lg text-white font-medium">
                    {exp.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-7">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
