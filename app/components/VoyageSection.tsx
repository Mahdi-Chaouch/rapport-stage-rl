"use client";

import { motion } from "framer-motion";
import { Compass, GraduationCap, CheckSquare, Rocket, Sparkles, ArrowRight } from "lucide-react";

const hardSkills = [
  "Visual Merchandising 3D & Floor Planning",
  "Gestion des Vitrines Haute Couture & Éclairage Scénique",
  "Clienteling CRM & Gestion des Réductions VIP",
  "Retail Analytics & Analyse des Taux de Conversion",
  "Conformité aux Directives de Marque Internationales (NYC)",
];

const softSkills = [
  "Gestion du Stress & Sang-froid en Période de Rush (Fashion Week)",
  "Posture Professionnelle Haute Couture & Discrétion",
  "Communication Interculturelle (Clientèle Internationale UHNWI)",
  "Résolution de Problèmes Logistiques Imprévus en Urgence",
  "Sens de l'Esthétique & Souci Obsessionnel du Détail",
];

export default function VoyageSection() {
  return (
    <section id="voyage" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10 bg-[#060607]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              CHAPITRE VI · PERSPECTIVES & CONCLUSION
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              Retour de Voyage &amp; Bilan Personnel
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm md:text-base max-w-md italic">
            Synthèse des acquis, rétrospective sur les apprentissages et projection dans l'industrie du luxe.
          </p>
        </div>

        {/* Personal Assessment & Self-Reflection */}
        <div className="luxury-glass p-8 md:p-12 rounded-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Bilan Personnel &amp; Métamorphose Professionnelle
            </h3>
          </div>

          <div className="space-y-4 font-sans text-neutral-300 text-sm md:text-base leading-relaxed">
            <p>
              Ce stage de 6 mois au sein du Flagship Saint-Germain de Ralph Lauren a constitué un véritable tremplin professionnel et humain. Loin d'être un simple exercice académique, cette expérience m'a plongé(e) au cœur des exigences réelles d'une Maison d'exception.
            </p>
            <p>
              J'y ai développé une double compétence rare : la maitrise artistique du <strong className="text-white">Storytelling visuel</strong> et la compréhension analytique de la <strong className="text-white">performance commercial retail</strong>. Travailler quotidiennement au contact de la Direction France et de clients internationaux fortunés m'a appris l'humilité, le sens du service irréprochable et la quête permanente de la perfection.
            </p>
          </div>
        </div>

        {/* Skills Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hard Skills */}
          <div className="luxury-glass p-8 rounded-2xl border border-white/10">
            <h4 className="font-serif text-xl text-white mb-6 flex items-center space-x-3">
              <CheckSquare className="w-4 h-4 text-white" />
              <span>Compétences Techniques (Hard Skills)</span>
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-neutral-300">
              {hardSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="luxury-glass p-8 rounded-2xl border border-white/10">
            <h4 className="font-serif text-xl text-white mb-6 flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Savoir-Être &amp; Aptitudes (Soft Skills)</span>
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-neutral-300">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Projection Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <Rocket className="w-4 h-4 text-white" />
              <span>PROJECTION PROFESSIONNELLE FUTURE</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              Poursuite d'Ambition dans le Luxe International
            </h3>
            <p className="text-sm text-neutral-300 font-sans leading-relaxed">
              Forte de cette immersion réussie chez Ralph Lauren, mon ambition à court terme est d'intégrer une maison de haute couture ou de luxe global en tant que <strong className="text-white">Junior Regional Merchandising Manager</strong> ou <strong className="text-white">Client Experience Strategy Coordinator</strong> à Paris ou à New York.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
