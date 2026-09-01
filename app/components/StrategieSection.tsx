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

const CX = 370;
const CY = 480;

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

                {/* Zone 3 — blanc */}
                <motion.circle cx={CX} cy={CY} r="280"
                  fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="4 4"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Zone 2 — violet */}
                <motion.circle cx={CX} cy={CY} r="190"
                  fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.5)" strokeWidth="1" strokeDasharray="4 4"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Zone 1 — bleu */}
                <motion.circle cx={CX} cy={CY} r="100"
                  fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Sweep */}
                <motion.line x1={CX} y1={CY} x2={CX} y2={CY - 280}
                  stroke="rgba(96,165,250,0.3)" strokeWidth="0.8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Point central */}
                <motion.circle cx={CX} cy={CY} r="5" fill="#60a5fa"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} />

                {/* Pulse */}
                <motion.circle cx={CX} cy={CY} r="10" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="1"
                  animate={{ r: [10, 25, 10], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Labels */}
                <motion.text x={CX + 10} y={CY - 4} fill="white" fontSize="9" fontFamily="monospace" letterSpacing="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                  RALPH LAUREN
                </motion.text>
                <motion.text x={CX + 10} y={CY + 10} fill="rgba(96,165,250,0.8)" fontSize="7" fontFamily="monospace"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                  MADELEINE · PARIS 8E
                </motion.text>
                <motion.text x={CX + 105} y={CY - 50} fill="rgba(96,165,250,0.7)" fontSize="7" fontFamily="monospace" letterSpacing="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
                  Z1 · 0-10 MIN
                </motion.text>
                <motion.text x={CX + 195} y={CY - 120} fill="rgba(167,139,250,0.7)" fontSize="7" fontFamily="monospace" letterSpacing="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }}>
                  Z2 · 10-20 MIN
                </motion.text>
                <motion.text x={CX + 285} y={CY - 200} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" letterSpacing="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} viewport={{ once: true }}>
                  Z3 · 20-30 MIN
                </motion.text>

              </svg>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-8">
              {[
                { zone: "ZONE 01", time: "0 — 10 MIN", label: "ZONE PRIMAIRE", desc: "Le coeur de chalandise. Clients locaux, employes du quartier, habitues de la boutique. Frequentation quotidienne elevee.", color: "rgba(96,165,250,0.8)" },
                { zone: "ZONE 02", time: "10 — 20 MIN", label: "ZONE SECONDAIRE", desc: "Clients parisiens qui se deplacent specifiquement pour l'enseigne. Shopping experience recherchee et planifiee.", color: "rgba(167,139,250,0.8)" },
                { zone: "ZONE 03", time: "20 — 30 MIN", label: "ZONE ETENDUE", desc: "Touristes internationaux, clients de passage, visiteurs de Paris. Represente une part significative du chiffre d'affaires.", color: "rgba(255,255,255,0.4)" },
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
                    <p className="font-serif text-sm text-neutral-500 leading-relaxed font-light">{z.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
