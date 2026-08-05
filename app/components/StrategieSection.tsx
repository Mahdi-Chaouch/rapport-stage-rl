"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, Sparkles, HelpCircle, Lightbulb, Compass } from "lucide-react";

const competitors = [
  {
    brand: "Ralph Lauren (Collection & Purple)",
    positioning: "Lifestyle Américain Ultime & Elegance Preppy / Couture",
    strength: "Écosystème global (Hospitalité + Mode + Maison), fort récit émotionnel.",
    vs: "Positionnement unique fusionnant décontraction raffinée et couture italienne.",
  },
  {
    brand: "Giorgio Armani",
    positioning: "Élégance Italienne Minimaliste & Tailoring Épuré",
    strength: "Notoriété tailleur mondiale et lignes hôtelières.",
    vs: "Ralph Lauren mise davantage sur l'art de vivre chaleureux et l'héritage familial.",
  },
  {
    brand: "Burberry",
    positioning: "Héritage Britannique Outdoor & Trench Iconic",
    strength: "Ancrage fort sur la pièce à manche et le check iconique.",
    vs: "Ralph Lauren dispose d'une largeur d'offre lifestyle supérieure.",
  },
  {
    brand: "LVMH (Dior / Celine)",
    positioning: "Haute Couture & Désirabilité Ultime",
    strength: "Puissance marketing mondiale et contrôle strict de la rareté.",
    vs: "Pression concurrentielle élevée nécessitant une théâtralisation maximale en Flagship.",
  },
];

const recommendations = [
  {
    num: "01",
    title: "Vitrines Interactives & Clienteling Phygital",
    desc: "Intégration d'écrans OLED transparents et de QR codes privés dans les vitrines de Saint-Germain permettant aux clients VIP de réserver un look de vitrine directement depuis leur smartphone, même en dehors des heures d'ouverture.",
  },
  {
    num: "02",
    title: "Atelier de Personnalisation & Monogramming Live",
    desc: "Installation d'un espace de création sur-mesure permanent au 1er étage pour la broderie de monogrammes et le sur-mesure instantané sur les pièces Collection et cravates Purple Label.",
  },
  {
    num: "03",
    title: "Programme 'Ralph's Private Dining & Shopping'",
    desc: "Création d'une offre exclusive combinant dîner gastronomique privé au Restaurant Ralph's suivi d'une session de personal styling nocturne réservée aux plus grands collectionneurs de la Maison.",
  },
];

export default function StrategieSection() {
  return (
    <section id="strategie" className="relative py-24 md:py-36 px-6 md:px-16 border-b border-white/10 bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-neutral-400 font-semibold">
              CHAPITRE IV · VISION & MARCHÉ
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-3 font-normal tracking-tight">
              Analyse Stratégique &amp; Recommandations
            </h2>
          </div>
          <p className="text-neutral-400 font-sans text-sm md:text-base max-w-md italic">
            Décryptage des dynamiques concurrentielles du secteur du luxe et positionnement de la ligne Collection.
          </p>
        </div>

        {/* Competitive Matrix */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <PieChart className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Matrice de Positionnement Concurrentiel
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitors.map((comp, index) => (
              <div
                key={index}
                className="luxury-glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-serif text-xl text-white font-medium">
                    {comp.brand}
                  </h4>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    BENCHMARK
                  </span>
                </div>
                <p className="text-xs text-neutral-300 font-sans font-medium mb-3">
                  {comp.positioning}
                </p>
                <div className="space-y-2 text-xs text-neutral-400 font-sans pt-3 border-t border-white/5">
                  <p><strong className="text-white">Force :</strong> {comp.strength}</p>
                  <p><strong className="text-white">Différenciateur RL :</strong> {comp.vs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Thesis Problem Statement Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-black to-neutral-950 border border-white/20 mb-20 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 uppercase px-3 py-1 rounded-full bg-white/10">
              <HelpCircle className="w-4 h-4 text-white" />
              <span>PROBLÉMATIQUE PERSONNELLE DE RECHERCHE</span>
            </div>

            <h3 className="font-serif text-2xl md:text-4xl text-white leading-snug">
              “ Dans quelle mesure la scénographie visuelle et le clienteling augmenté peuvent-ils sublimer la désirabilité de la ligne Collection et maximiser la valeur vie client dans un flagship parisien ? ”
            </h3>

            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Cette réflexion personnelle s'appuie sur les constats observés durant 6 mois au Flagship Saint-Germain : la nécessité de faire dialoguer le patrimoine architectural du magasin avec les exigences de personnalisation et de théâtralisation de la clientèle internationale contemporaine.
            </p>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Lightbulb className="w-5 h-5 text-white" />
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              Recommandations Stratégiques pour la Maison
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="luxury-glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group"
              >
                <span className="font-serif text-4xl text-neutral-500 group-hover:text-white transition-colors duration-300 block mb-4">
                  {rec.num}
                </span>
                <h4 className="font-serif text-xl text-white mb-3">
                  {rec.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
