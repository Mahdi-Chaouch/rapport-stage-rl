"use client";

import { motion } from "framer-motion";

const brandData = [
  { value: "$7.6B", label: "CHIFFRE D'AFFAIRES 2024" },
  { value: "1967", label: "ANNEE DE FONDATION" },
  { value: "90+", label: "PAYS" },
  { value: "25K+", label: "EMPLOYES" },
  { value: "#1", label: "MARQUE DE LUXE AMERICAINE" },
];

const competitors = [
  {
    name: "Tommy Hilfiger",
    revenue: "~$4.5B",
    logo: "/logo-tommy.png",
    description: "Fonde en 1985, Tommy Hilfiger incarne le preppy americain accessible. Appartenant au groupe PVH, la marque est presente dans plus de 100 pays et cible une clientele jeune et urbaine avec un positionnement premium mais moins exclusif que Ralph Lauren.",
  },
  {
    name: "Lacoste",
    revenue: "~$2B",
    logo: "/logo-lacoste.png",
    description: "Nee en 1933 du tennisman Rene Lacoste, la marque au crocodile est un symbole du sport chic europeen. Avec un positionnement plus accessible, Lacoste joue sur son heritage sportif et son iconique polo pour seduire une clientele internationale.",
  },
];

const CX = 342;
const CY = 286;

export default function StrategieSection() {
  return (
    <section id="strategie" className="relative border-b border-white/10 bg-[#050505]">

      {/* INTRO */}
      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4">
          IV · Analyse Strategique
        </motion.span>
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}
          className="block text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 mb-8">
          RETAIL INTELLIGENCE
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-4">
          Les Chiffres
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
          className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-500">
          MADELEINE — PARIS · ANALYSING THE BRAND, THE MARKET & THE CUSTOMER
        </motion.p>
      </div>

      {/* THE BRAND */}
      <div className="px-6 md:px-24 pb-28 pt-20">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">01 — THE BRAND</span>
          <h3 className="font-serif text-4xl md:text-6xl text-white font-light">Ou se positionne Ralph Lauren ?</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-0">
            {brandData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex items-baseline gap-8 py-8 border-b border-white/5 group">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-4xl md:text-6xl text-white font-light group-hover:text-blue-400 transition-colors duration-300">{item.value}</span>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="sticky top-28">
            <img src="/rl-collection1.jpg" alt="Ralph Lauren" className="w-full h-[600px] object-cover object-top grayscale" />
          </motion.div>
        </div>

        {/* Concurrents */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">02 — THE COMPETITION</span>
          <h3 className="font-serif text-4xl md:text-6xl text-white font-light mb-16">Les concurrents directs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {competitors.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} viewport={{ once: true }}
                className="relative p-8 overflow-hidden">
                <img src={c.logo} alt="" className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none invert" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 block mb-4">CONCURRENT 0{i + 1}</span>
                <h4 className="font-serif text-3xl text-white font-light mb-2">{c.name}</h4>
                <p className="font-mono text-[10px] tracking-[0.2em] text-blue-400 mb-6">{c.revenue}</p>
                <div className="w-8 h-[1px] bg-white/20 mb-6" />
                <p className="font-serif text-base text-neutral-400 leading-relaxed font-light">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparaison */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-12">LA COMPARAISON</span>
          <div className="space-y-8">
            {[
              { name: "Ralph Lauren", value: 81, revenue: "$7.6B", isRL: true },
              { name: "Tommy Hilfiger", value: 45, revenue: "~$4.5B", isRL: false },
              { name: "Lacoste", value: 22, revenue: "~$2B", isRL: false },
            ].map((brand, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex items-center gap-8">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 w-40 flex-shrink-0">{brand.name}</span>
                <div className="flex-1 h-[2px] bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${brand.value}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 h-full"
                    style={{ backgroundColor: brand.isRL ? "#60a5fa" : "rgba(255,255,255,0.2)" }}
                  />
                </div>
                <span className="font-mono text-[10px] text-neutral-500 w-16 text-right flex-shrink-0">{brand.revenue}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CATCHMENT AREA */}
        <div className="mt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">03 — THE CATCHMENT AREA</span>
            <h3 className="font-serif text-4xl md:text-6xl text-white font-light mb-4">D'ou viennent nos clients ?</h3>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-600">MADELEINE · PARIS 8E · ZONE D'ATTRACTION COMMERCIALE</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-16 items-center">

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }}
              className="w-full md:w-1/2 relative">
              <img src="/paris-map.jpg" alt="Paris" className="w-full object-contain invert opacity-20" />

              <svg viewBox="0 0 800 900" className="absolute inset-0 w-full h-full">
  <defs>
    <filter id="radar-glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <radialGradient id="zone-one-fill">
      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.18" />
      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.015" />
    </radialGradient>

    <radialGradient id="zone-two-fill">
      <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.12" />
      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.01" />
    </radialGradient>

    <radialGradient id="zone-three-fill">
      <stop offset="0%" stopColor="#f5c56b" stopOpacity="0.09" />
      <stop offset="100%" stopColor="#f5c56b" stopOpacity="0.005" />
    </radialGradient>
  </defs>

  {/* Zone 3 — or : 20–30 min */}
<motion.circle
  cx={CX}
  cy={CY}
  r="260"
  fill="rgba(245,197,107,0.09)"
  stroke="#f5c56b"
  strokeWidth="3"
  strokeDasharray="10 8"
  vectorEffect="non-scaling-stroke"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.9 }}
  transition={{ duration: 0.9, delay: 0.8 }}
  viewport={{ once: true }}
/>

{/* Zone 2 — violet : 10–20 min */}
<motion.circle
  cx={CX}
  cy={CY}
  r="180"
  fill="rgba(167,139,250,0.11)"
  stroke="#a78bfa"
  strokeWidth="3"
  strokeDasharray="7 6"
  vectorEffect="non-scaling-stroke"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.95 }}
  transition={{ duration: 0.9, delay: 0.5 }}
  viewport={{ once: true }}
/>

{/* Zone 1 — bleu : 0–10 min */}
<motion.circle
  cx={CX}
  cy={CY}
  r="100"
  fill="rgba(96,165,250,0.16)"
  stroke="#60a5fa"
  strokeWidth="3"
  vectorEffect="non-scaling-stroke"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.25 }}
  viewport={{ once: true }}
/>

              {/* Balayage radar */}
<motion.line
  x1={CX}
  y1={CY}
  x2={CX}
  y2={CY - 260}
  stroke="#60a5fa"
  strokeWidth="2"
  strokeLinecap="round"
  opacity="0.8"
  animate={{ rotate: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  style={{ transformOrigin: `${CX}px ${CY}px` }}
/>

{/* Onde radar */}
<motion.circle
  cx={CX}
  cy={CY}
  r="12"
  fill="none"
  stroke="#60a5fa"
  strokeWidth="2"
  animate={{ r: [12, 260], opacity: [0.8, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
/>

  {/* Ligne de balayage radar */}
  <motion.line
    x1={CX}
    y1={CY}
    x2={CX}
    y2={CY - 300}
    stroke="rgba(96,165,250,0.55)"
    strokeWidth="1"
    filter="url(#radar-glow)"
    animate={{ rotate: 360, opacity: [0.15, 0.65, 0.15] }}
    transition={{ rotate: { duration: 5, repeat: Infinity, ease: "linear" }, opacity: { duration: 2.5, repeat: Infinity } }}
    style={{ transformOrigin: `${CX}px ${CY}px` }}
  />

  {/* Anneau radar pulsé */}
  <motion.circle
    cx={CX}
    cy={CY}
    r="16"
    fill="none"
    stroke="rgba(96,165,250,0.7)"
    strokeWidth="1"
    animate={{ r: [16, 120, 16], opacity: [0.7, 0, 0.7] }}
    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
  />

  {/* Point boutique */}
  <motion.circle
    cx={CX}
    cy={CY}
    r="5"
    fill="#ffffff"
    filter="url(#radar-glow)"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ transformOrigin: `${CX}px ${CY}px` }}
  />

  <circle cx={CX} cy={CY} r="10" fill="none" stroke="#60a5fa" strokeWidth="1.5" />

  {/* Label boutique et zones */}
<motion.text
  x={CX + 16}
  y={CY - 10}
  fill="white"
  fontSize="13"
  fontWeight="600"
  fontFamily="monospace"
  letterSpacing="1.5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
>
  RALPH LAUREN
</motion.text>

<motion.text
  x={CX + 16}
  y={CY + 10}
  fill="#60a5fa"
  fontSize="9"
  fontFamily="monospace"
  letterSpacing="1"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  viewport={{ once: true }}
>
  2 PLACE DE LA MADELEINE · PARIS 8E
</motion.text>

<motion.text
  x={CX + 72}
  y={CY - 72}
  fill="#60a5fa"
  fontSize="11"
  fontFamily="monospace"
  fontWeight="600"
  letterSpacing="1.5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }}
  viewport={{ once: true }}
>
  ZONE 01 · PRIMAIRE
</motion.text>

<motion.text
  x={CX + 125}
  y={CY - 125}
  fill="#a78bfa"
  fontSize="11"
  fontFamily="monospace"
  fontWeight="600"
  letterSpacing="1.5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }}
  viewport={{ once: true }}
>
  ZONE 02 · SECONDAIRE
</motion.text>

<motion.text
  x={CX - 250}
  y={CY - 175}
  fill="#f5c56b"
  fontSize="11"
  fontFamily="monospace"
  fontWeight="600"
  letterSpacing="1.5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 1.1 }}
  viewport={{ once: true }}
>
  ZONE 03 · ÉTENDUE
</motion.text>
</svg>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-8">
              {[
                { zone: "ZONE 01", time: "0 — 10 MIN", label: "ZONE PRIMAIRE", desc: "Le coeur de chalandise. Clients locaux, employes du quartier, habitues de la boutique. Frequentation quotidienne elevee.", color: "rgba(96,165,250,0.8)" },
                { zone: "ZONE 02", time: "10 — 20 MIN", label: "ZONE SECONDAIRE", desc: "Clients parisiens qui se deplacent specifiquement pour l'enseigne. Shopping experience recherchee et planifiee.", color: "rgba(167,139,250,0.8)" },
                { zone: "ZONE 03", time: "20 — 30 MIN", label: "ZONE ETENDUE", desc: "Touristes internationaux, clients de passage, visiteurs de Paris. Represente une part significative du chiffre d'affaires.", color: "rgba(245,197,107,0.85)" },
              ].map((z, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} viewport={{ once: true }}
                  className="flex gap-6 items-start">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: z.color }} />
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-mono text-[10px] tracking-[0.3em]" style={{ color: z.color }}>{z.zone}</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">{z.time}</span>
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">{z.label}</p>
                    <p className="font-serif text-base md:text-lg text-neutral-400 leading-relaxed font-light">{z.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
{/* PERSONAS */}
<div className="mt-28">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="px-6 md:px-24 mb-20"
  >
    <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">
      04 — WHO WALKS THROUGH THE DOOR?
    </span>
    <h3 className="font-serif text-4xl md:text-6xl text-white font-light">
      Nos clients
    </h3>
  </motion.div>

  {[
    {
      zone: "01",
      label: "THE LOCAL",
      name: "Alexandre",
      age: "42 ans",
      job: "Notaire Associe · Paris 8e",
      quote: "J'ai besoin de m'habiller bien sans y passer du temps.",
      img: "/persona-1.jpg",
      left: true,
      color: "rgba(96,165,250,0.8)",
      profil: "Client regulier du quartier. Vient seul en semaine ou le weekend avec sa femme. Connait la boutique, sait ce qu'il veut. CSP+, exigeant, efficace.",
      motivation: "Contrainte vestimentaire professionnelle. Cherche des pieces qui fonctionnent aussi bien au bureau qu'en soiree. Qualite et coupe avant tout.",
      comportement: "Direct, va droit au but. Achete costume, chemise, pull quarter-zip. Panier moyen eleve. Fidelise facilement si le conseiller comprend son style.",
    },
    {
      zone: "02",
      label: "THE TRAVELLER",
      name: "Yuki",
      age: "34 ans",
      job: "Cadre Tech · Tokyo",
      quote: "Je voulais voir la boutique historique et ramener quelque chose de Paris.",
      img: "/persona-2.jpg",
      left: false,
      color: "rgba(167,139,250,0.8)",
      profil: "Touriste asiatique en vacances a Paris. Fan de la marque depuis longtemps. Vient specifiquement voir le premier flagship europeen de Ralph Lauren.",
      motivation: "Melange de plaisir et de souvenir. Achete pour elle et pour offrir. Attache a l'heritage de la boutique — la premiere d'Europe, ca compte.",
      comportement: "Prend son temps, explore tous les etages. S'interesse aux pieces casualwear — pull, polo, chino. Sensible a l'histoire de la maison.",
    },
    {
      zone: "03",
      label: "THE EXPLORER",
      name: "Lucas",
      age: "26 ans",
      job: "Graphiste Freelance · Paris 11e",
      quote: "J'ai vu un polo sur Instagram et je voulais le voir en vrai.",
      img: "/persona-3.jpg",
      left: true,
      color: "rgba(255,255,255,0.6)",
      profil: "Primo-visiteur. Attire par une piece vue en ligne, entre dans la boutique pour la premiere fois. Decouvre l'univers Ralph Lauren sans a priori.",
      motivation: "Curiosite et decouverte. Pas necessairement venu pour acheter — mais le cadre, l'accueil et les produits peuvent le convaincre sur place.",
      comportement: "Observe, touche, essaie. Repart souvent avec une piece d'entree de gamme — polo, casquette, accessoire. Futur client fidele potentiel.",
    },
  ].map((persona, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col ${persona.left ? "md:flex-row" : "md:flex-row-reverse"} min-h-[85vh] relative overflow-hidden border-t border-white/5`}
    >
      {/* Numero de zone en arriere-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span
          className="font-serif font-light select-none"
          style={{
            fontSize: "clamp(120px, 25vw, 280px)",
            color: "rgba(255,255,255,0.02)",
            lineHeight: 1,
          }}
        >
          {persona.zone}
        </span>
      </div>

      {/* Photo */}
      <div className="w-full md:w-[45%] relative overflow-hidden z-10">
        <motion.img
          src={persona.img}
          alt={persona.name}
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "60vh" }}
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        />
        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: `linear-gradient(to right, transparent, ${persona.color}, transparent)` }}
          initial={{ top: "0%" }}
          whileInView={{ top: "100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
          viewport={{ once: true }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/30" />
      </div>

      {/* Contenu */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-10 md:px-16 py-16 relative z-10">

        {/* Zone label */}
        <motion.div
          initial={{ opacity: 0, x: persona.left ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: persona.color }}>
            ZONE {persona.zone}
          </span>
          <div className="h-[1px] w-8" style={{ backgroundColor: persona.color }} />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-600">
            {persona.label}
          </span>
        </motion.div>

        {/* Nom + age */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <h3 className="font-serif text-5xl md:text-7xl text-white font-light leading-none">
            {persona.name}
          </h3>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 mt-2">
            {persona.age} · {persona.job}
          </p>
        </motion.div>

        {/* Citation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-serif italic text-lg md:text-xl mt-6 mb-10 leading-relaxed"
          style={{ color: persona.color }}
        >
          &ldquo;{persona.quote}&rdquo;
        </motion.blockquote>

        {/* Infos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { label: "PROFIL", text: persona.profil },
            { label: "MOTIVATION", text: persona.motivation },
            { label: "COMPORTEMENT", text: persona.comportement },
          ].map((info, j) => (
            <div key={j}>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-2 block" style={{ color: persona.color }}>
                {info.label}
              </span>
              <p className="font-serif text-base text-neutral-400 leading-relaxed font-light">
                {info.text}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
