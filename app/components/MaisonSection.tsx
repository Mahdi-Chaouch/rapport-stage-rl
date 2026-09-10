"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Flipbook from "./Flipbook";

const timeline = [
  {
    year: "1967",
    title: "La Cravate Fondatrice",
    desc: "Avec 50 dollars en poche, Ralph Lifshitz lance sa première collection de cravates larges sous le nom Ralph Lauren.",
    pink: false,
  },
  {
    year: "1972",
    title: "La Naissance du Polo",
    desc: "Création du polo shirt iconique à logo polo player brodé, pièce qui deviendra l'un des vêtements les plus reconnaissables au monde.",
    pink: false,
  },
  {
    year: "1989",
    title: "Nina Hyde Center",
    desc: "Ralph cofonde le Nina Hyde Center for Breast Cancer Research en compagnie de la légendaire éditrice du Washington Post Katharine Graham.",
    pink: false,
  },
  {
    year: "1991",
    title: "Lancement du Polo Bear",
    desc: "L'icone du style Polo fait ses debuts sous la forme d'un ourson en édition limitée, inspiré d'une peluche offerte à Ralph par son personnel.",
    pink: false,
  },
  {
    year: "1997",
    title: "Ralph Going Public",
    desc: "Après avoir franchi 1 milliard de dollars de ventes, Polo Ralph Lauren devient une société publique côtée à la bourse de New York.",
    pink: false,
  },
  {
    year: "2000",
    title: "Ralph lance Pink Pony",
    desc: "Ralph présente sa nouvelle initiative dans la lutte mondiale contre le cancer. 25% du prix d'achat de chaque article Pink Pony est reversé à la lutte contre le cancer.",
    pink: true,
  },
  {
    year: "2002",
    title: "Premiers defiles a Milan",
    desc: "C'est au palazzo milanais de la marque que Ralph présente les defilés des collections Automne 2002 et Printemps 2003 de Purple Label.",
    pink: false,
  },
  {
    year: "2008",
    title: "Habilleur Olympique",
    desc: "Polo Ralph Lauren devient habilleur officiel de l'équipe olympique américaine pour les Jeux de Pekin.",
    pink: false,
  },
  {
    year: "2010",
    title: "Paris, Bd Saint-Germain",
    desc: "Ralph ouvre un magasin phare et un restaurant à Paris, boulevard Saint-Germain, dans un hotel particulier du XVIIe siècle de 1 200m2.",
    pink: false,
  },
];

const collections = [
  {
    name: "Polo Ralph Lauren",
    tag: "Le Classique Americain",
    desc: "Née en 1972 autour de l’iconique polo, la collection Polo Ralph Lauren représente, selon moi, l’essence même du style américain et Ralph : une élégance décontractée, preppy et intemporelle. C’est la ligne la plus connue de la maison, mais aussi celle qui est la plus accessible tout en gardant une identité propre à la Maison.",
    img: "/polo.jpg",
    left: true,
    purple: false,
  },
  {
    name: "Purple Label",
    tag: "La Haute Couture Masculine",
    desc: "Purple Label représente le savoir-faire le plus haut de gamme de Ralph Lauren. Cette collection se distingue par des costumes aux coupes très travaillées, réalisés dans des matières italiennes et anglaises d’exception. C’est une ligne pensée pour une clientèle qui recherche à la fois l’élégance, la qualité et une certaine idée du prestige.",
    img: "/purple-label.jpg",
    left: false,
    purple: true,
  },
  {
    name: "Ralph Lauren Collection",
    tag: "Le Pret-a-Porter Feminin",
    desc: "La collection Ralph Lauren incarne une féminité élégante et affirmée. À travers des silhouettes à la fois fortes et fluides, des matières nobles et une inspiration Western chic, elle propose un style intemporel qui évolue avec les saisons sans jamais perdre son identité.",
    img: "/rl-collection.jpg",
    left: true,
    purple: false,
  },
  {
    name: "Double RL",
    tag: "Le Workwear Vintage",
    desc: "Lancée en 1993, Double RL s’inspire du ranch de Ralph et Ricky Lauren, situé dans le Colorado. C’est une collection qui rend hommage à une Amérique plus authentique, entre workwear, vêtements militaires vintage et esprit Western. Avec ses denims bruts, ses cuirs patinés et ses pièces au style volontairement vieilli, Double RL propose un univers plus brut et nostalgique mais toujours très travaillé.",
    img: "/double-rl.jpg",
    left: false,
    purple: false,
  },
  {
    name: "RLX Ralph Lauren",
    tag: "Le Sport & Performance",
    desc: "RLX est la collection performance de Ralph Lauren, pensée pour le sport et les sportifs. Elle associe des matières techniques, avec des coupes confortables et toujours élégante. C’est une ligne plus fonctionnelle, mais qui garde une vraie identité Ralph Lauren : être à l’aise, sans mettre le style de côté.",
    img: "/rlx.jpg",
    left: true,
    purple: false,
  },
];

export default function MaisonSection({ onOpenOrganigram }: { onOpenOrganigram: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="maison" className="relative border-b border-white/10 overflow-hidden bg-[#050505]">

      {/* ── BLOC 1 : EN-TÊTE + CITATION ── */}
      <div className="px-6 md:px-24 pt-28 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
          >
            I · Histoire & Identite
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light tracking-tight leading-none mb-4"
          >
            La Maison<br />Ralph Lauren
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pinyon text-4xl sm:text-5xl text-neutral-400 leading-none"
          >
            Du Bronx au monde.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:max-w-sm md:text-right pb-2"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
            &ldquo;A lot of hard work is hidden behind nice things.&rdquo;
          </blockquote>
          <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-500 mt-4">
            — Ralph Lauren
          </p>
        </motion.div>
      </div>

      {/* ── BLOC 2 : PORTRAIT + TEXTE ── */}
      <div className="px-6 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-2xl text-white italic font-medium leading-relaxed md:text-right"
          >
            Ralph Lifshitz nait en 1939 dans le Bronx, New York, fils d'immigrants juifs biélorusses. Rien ne le prédestine a révolutionner la mode mondiale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/ralph-portrait.png"
              alt="Ralph Lauren"
              className="w-full max-w-xs object-contain grayscale"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-2xl text-white italic font-medium leading-relaxed"
          >
            Pourtant il se distingue avec un sens inné de l'élégance, une obsession pour le détail, et une vision : faire porter aux gens non pas des vêtements mais un rêve. En 1967, avec 50 dollars en poche, Ralph Lauren pose la première pierre d'un empire qui pèse aujourd'hui plus de 6 milliards de dollars.
          </motion.p>
        </div>
      </div>

      {/* ── BLOC 3 : LAYOUT QUINCONCE ── */}
      <div className="px-6 md:px-24 pb-24 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 overflow-hidden"
          >
            <img src="/rl-1.jpg" alt="Ralph Lauren" className="w-full h-[500px] object-cover object-top" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:mt-32 overflow-hidden"
          >
            <img src="/rl-2.jpg" alt="Ralph Lauren" className="w-full h-[380px] object-cover object-top" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <img src="/rl-3.jpg" alt="Ralph Lauren" className="w-full h-[420px] object-cover object-top" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:mt-24 overflow-hidden"
          >
            <img src="/rl-4.jpg" alt="Ralph Lauren" className="w-full h-[380px] object-cover object-top" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 overflow-hidden"
          >
            <img src="/rl-5.jpg" alt="Ralph Lauren" className="w-full h-[500px] object-cover object-center" />
          </motion.div>
        </div>
      </div>

      {/* ── BLOC 4 : FRISE CHRONOLOGIQUE ── */}
      <div className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 md:px-24 mb-10"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500">
            Chronologie · 1967 — 2010
          </span>
        </motion.div>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex min-w-max px-6 md:px-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col w-64 mr-0 pr-12 border-l border-white/15 pl-6"
              >
                <span
                  className="font-serif text-6xl md:text-7xl font-light leading-none mb-6 opacity-90"
                  style={{ color: item.pink ? "#E8A4B8" : "#ffffff" }}
                >
                  {item.year}
                </span>
                <h4
                  className="font-serif text-lg font-normal mb-3 leading-tight"
                  style={{ color: item.pink ? "#E8A4B8" : "#ffffff" }}
                >
                  {item.title}
                </h4>
                <p
                  className="font-sans text-xs leading-relaxed font-light"
                  style={{ color: item.pink ? "rgba(232,164,184,0.6)" : "rgba(163,163,163,1)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOC 5 : LES COLLECTIONS ── */}
      <div className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 md:px-24 mb-20 border-t border-white/10 pt-20"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 block mb-4">
            L'Univers de la Maison
          </span>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light tracking-tight leading-none">
            Les Collections
          </h3>
        </motion.div>

        <div className="space-y-0">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`flex flex-col ${col.left ? "md:flex-row" : "md:flex-row-reverse"} min-h-[55vh]`}
            >
              {/* Image — 45% */}
              <div className="w-full md:w-[45%] overflow-hidden">
                <img
                  src={col.img}
                  alt={col.name}
                  className="w-full h-full min-h-[45vh] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Texte — 55% */}
              <div
                className={`w-full md:w-[55%] flex flex-col justify-center px-12 md:px-20 py-16 ${i % 2 === 0 ? "bg-[#050505]" : "bg-[#080808]"}`}
              >
                <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-neutral-500 mb-6">
                  {col.tag}
                </span>

                <h3
                  className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6"
                  style={{ color: col.purple ? "#B07FE0" : "#ffffff" }}
                >
                  {col.name}
                </h3>

                <div
                  className="w-12 h-[1px] mb-8"
                  style={{ backgroundColor: col.purple ? "#7B4FBE" : "rgba(255,255,255,0.2)" }}
                />

                <p
                  className="font-serif text-xl md:text-2xl leading-relaxed font-normal"
                  style={{ color: col.purple ? "#B07FE0" : "rgba(242,237,228,0.75)" }}
                >
                  {col.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BLOC 6 : LA BOUTIQUE ── */}
      <div className="border-t border-white/10 pt-20 pb-24">

        {/* Titre + Texte */}
        <div className="px-6 md:px-24 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-12"
          >
            <div className="md:w-2/5">
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 block mb-4">
                2 Place de la Madeleine · Paris 8e
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-none">
                La Boutique<br />de la Madeleine
              </h3>
            </div>
            <div className="md:w-3/5">
              <p className="font-serif text-lg md:text-xl text-neutral-400 leading-relaxed font-normal">
                Inaugurée en 1986 au 2 place de la Madeleine, cette boutique est la première adresse parisienne et européenne de Ralph Lauren. Installée sur trois étages dans un immeuble haussmannien classé monument historique, au cœur du 8e arrondissement, juste en face de l'église de la Madeleine, elle plonge directement les clients dans l’univers Ralph Lauren.

Entre les parquets en pointe de Hongrie, les boiseries, les luminaires en laiton, chaque détail participe à cet immersion. Le sous-sol est consacré à Polo et au sportswear, le rez-de-chaussée au vestiaire masculin plus formel, et l’étage à la collection femme.

La première fois que je suis entré dans la boutique, pour mon entretien, j’ai vraiment eu l’impression de sortir de Paris et d’entrer dans un autre monde : un univers américain, preppy et intemporel, exactement comme Ralph Lauren l’a imaginé. Au fil des années, la boutique a aussi accueilli des personnalités comme Nicolas Sarkozy, Kanye West ou encore le Roi du Maroc.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Photos quinconce */}
        <div className="px-6 md:px-24 space-y-6">

          {/* Ligne 1 : grande gauche + petite droite */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-3/5 overflow-hidden"
            >
              <img src="/boutique-1.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[520px] object-cover object-bottom" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 md:mt-32 overflow-hidden"
            >
              <img src="/boutique-2.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[380px] object-cover object-center" />
            </motion.div>
          </div>

          {/* Ligne 2 : pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full overflow-hidden"
          >
            <img src="/boutique-3.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[600px] object-cover object-center" />
          </motion.div>

          {/* Ligne 3 : petite gauche + grande droite */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 md:mt-24 overflow-hidden"
            >
              <img src="/boutique-4.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[500px] object-cover object-center" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-3/5 overflow-hidden"
            >
              <img src="/boutique-5.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[650px] object-cover object-center" />
            </motion.div>
          </div>

          {/* Ligne 4 : trois colonnes */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 overflow-hidden"
            >
              <img src="/boutique-6.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[340px] object-cover object-center" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 md:mt-16 overflow-hidden"
            >
              <img src="/boutique-7.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[340px] object-cover object-center" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 md:mt-32 overflow-hidden"
            >
              <img src="/boutique-8.jpg" alt="Boutique Ralph Lauren Madeleine" className="w-full h-[340px] object-cover object-center" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── FLIPBOOK LOOKBOOK ── */}
<div className="py-24 border-t border-white/10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="px-6 md:px-24 mb-12"
  >
    <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 block mb-4">
      Collection · Polo Ralph Lauren
    </span>
    <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light">
      Le Lookbook
    </h3>
  </motion.div>
  <Flipbook />
</div>

      {/* ── BLOC 6 : VIDÉO + POLO PLAYER ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-24 pb-28 flex flex-col md:flex-row items-center gap-16"
      >
        <div className="w-full md:w-1/2">
          <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-neutral-600 mb-4">
            En images · Ralph Lauren
          </p>
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Q5gHNwxJNjE"
              title="Ralph Lauren Brand History"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/polo-player.png"
            alt="Polo Player"
            className="h-72 md:h-96 w-auto object-contain opacity-75"
          />
        </div>
      </motion.div>

    </section>
  );
}
