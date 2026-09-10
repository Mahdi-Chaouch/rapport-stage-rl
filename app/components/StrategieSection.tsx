"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const brandData = [
  { value: "$8.1B", label: "CHIFFRE D'AFFAIRES 2026" },
  { value: "1967", label: "ANNÉE DE FONDATION" },
  { value: "280+", label: "PAYS" },
  { value: "23K+", label: "EMPLOYÉS" },
  { value: "#1", label: "MARQUE DE LUXE AMÉRICAINE LA PLUS ACHETÉE" },
];

const competitors = [
  {
    name: "Tommy Hilfiger",
    revenue: "~4.8B",
    logo: "/logo-tommy.png",
    description: "Fondé en 1985, Tommy Hilfiger incarne le preppy americain accessible. Appartenant au groupe PVH, la marque est présente dans plus de 100 pays et cible une clientèle jeune et urbaine avec un positionnement premium mais moins exclusif que Ralph Lauren.",
  },
  {
    name: "Lacoste",
    revenue: "~$3B",
    logo: "/logo-lacoste.png",
    description: "Née en 1933 du tennisman René Lacoste, la marque au crocodile est un symbole du sport chic européen. Avec un positionnement plus accessible, Lacoste joue sur son héritage sportif et son iconique polo pour séduire une clientèle internationale.",
  },
];

const personas = [
  {
    zone: "01",
    label: "LE LOCAL",
    name: "Alexandre",
    age: "35 ans",
    job: "Notaire Associé · Paris 8e",
    quote: "J'ai besoin de bien m'habiller sans y passer du temps.",
    img: "/persona-1.jpg",
    left: true,
    color: "#60a5fa",
    profil: "Client régulier du quartier, sait ce  qu'il aime et vient passer un bon moment. Seul en semaine ou avec sa femme le week-end. Connait la boutique, sait ce qu'il veut. CSP+, exigeant, efficace.",
    motivation: "Contrainte vestimentaire professionnelle. Cherche des pièces qui fonctionnent aussi bien au bureau qu'en soirée. Qualité et coupe avant tout.",
    comportement: "Direct, va droit au but. Achète costume, chemise, pull, quarter-zip. Panier moyen élevé. Fidélisation simple si le conseiller comprend son style.",
  },
  {
    zone: "02",
    label: "LE TOURISTE",
    name: "Yuki",
    age: "34 ans",
    job: "Cadre Tech · Tokyo",
    quote: "Je passais à côté et je voulais découvir la boutique.",
    img: "/persona-2.jpg",
    left: false,
    color: "#a78bfa",
    profil: "Touriste asiatique en vacances à Paris, elle ne vient pas dans la capitale pour nous, mais elle ne se refuse pas de visiter la boutique en guise de continuité de sa visite touristique.",
    motivation: "Mélange de plaisir et de souvenir. Achète pour elle et surtout pour offrir.",
    comportement: "Prend son temps, explore tous les étages, s'intéresse aux pièces casual : pull, polo, chino.",
  },
  {
    zone: "03",
    label: "LE VOYAGEUR",
    name: "Lucas",
    age: "26 ans",
    job: "Graphiste Freelance · Paris 11e",
    quote: "J'ai vu un polo sur Instagram et je voulais le voir en vrai et l'essayer.",
    img: "/persona-3.jpg",
    left: true,
    color: "rgba(255,255,255,0.9)",
    profil: "Attiré par une pièce vue en ligne, rentre dans la boutique pour la première fois. Découvre l'univers Polo Ralph Lauren.",
    motivation: "Curieux, il n'est pas nécessairement venu pour acheter, mais le cadre, l'accueil et les produits peuvent le convaincre sur place.",
    comportement: "Observe, touche, essaie. Repart souvent avec une pièce simple : polo, casquette, accessoire. Peut-être un futur client, fidèle, avec du potentiel.",
  },
];

const CX = 342;
const CY = 286;

function PersonaCard({ persona }: { persona: typeof personas[0] }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(80);
  const [complete, setComplete] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scanning) {
          setScanning(true);
          let p = 80;
          const interval = setInterval(() => {
            p += 1;
            setProgress(p);
            if (p >= 100) {
              clearInterval(interval);
              setComplete(true);
              setTimeout(() => setShowInfo(true), 800);
            }
          }, 150);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [scanning]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${persona.left ? "md:flex-row" : "md:flex-row-reverse"} min-h-[85vh] relative overflow-hidden border-t border-white/5`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="font-serif font-light select-none" style={{ fontSize: "clamp(120px, 25vw, 280px)", color: "rgba(255,255,255,0.02)", lineHeight: 1 }}>
          {persona.zone}
        </span>
      </div>

      <div className="w-full md:w-[45%] relative overflow-hidden z-10" style={{ minHeight: "60vh" }}>
        <motion.img
          src={persona.img}
          alt={persona.name}
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "60vh" }}
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        {scanning && (
          <motion.div
            className="absolute left-0 right-0 h-[3px] z-20 pointer-events-none"
            style={{ background: `linear-gradient(to right, transparent, ${persona.color}, transparent)`, boxShadow: `0 0 16px ${persona.color}` }}
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        )}

        {scanning && (
          <>
            <motion.div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 z-20" style={{ borderColor: persona.color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            <motion.div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 z-20" style={{ borderColor: persona.color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            <motion.div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 z-20" style={{ borderColor: persona.color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            <motion.div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 z-20" style={{ borderColor: persona.color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/20" />
      </div>

      <div className="w-full md:w-[55%] flex flex-col justify-center px-10 md:px-16 py-16 relative z-10">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: persona.color }}>ZONE {persona.zone}</span>
          <div className="h-[1px] w-8" style={{ backgroundColor: persona.color }} />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-600">{persona.label}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-2">
          <h3 className="font-serif text-5xl md:text-7xl text-white font-light leading-none">{persona.name}</h3>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 mt-2">{persona.age} · {persona.job}</p>
        </motion.div>

        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
          className="font-serif italic text-lg md:text-xl mt-6 mb-10 leading-relaxed" style={{ color: persona.color }}>
          &ldquo;{persona.quote}&rdquo;
        </motion.blockquote>

        <div className="mb-8 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: persona.color }}>
              {complete ? "SCAN COMPLETE" : "SCANNING PROFILE..."}
            </span>
            <span className="font-mono text-[11px] font-bold" style={{ color: persona.color }}>{progress}%</span>
          </div>
          <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ backgroundColor: persona.color, width: `${progress}%`, transition: "width 0.08s linear", boxShadow: `0 0 8px ${persona.color}` }}
            />
          </div>
          <AnimatePresence>
            {complete && (
              <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="font-mono text-[9px] tracking-[0.3em]" style={{ color: persona.color }}>
                PROFILE COMPLETE ✓ — DATA LOADED
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showInfo && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
              {[
                { label: "PROFIL", text: persona.profil },
                { label: "MOTIVATION", text: persona.motivation },
                { label: "COMPORTEMENT", text: persona.comportement },
              ].map((info, j) => (
                <motion.div key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: j * 0.25 }}>
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-2 block" style={{ color: persona.color }}>{info.label}</span>
                  <p className="font-serif text-base text-neutral-400 leading-relaxed font-light">{info.text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function StrategieSection() {
  return (
    <section id="strategie" className="relative border-b border-white/10 bg-[#050505]">

      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4">
          IV · Analyse Strategique
        </motion.span>
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}
          className="block text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 mb-8">
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-4">
          Les Chiffres
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
          className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-500">
        </motion.p>
      </div>

      <div className="px-6 md:px-24 pb-28 pt-20">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">01 — LA MARQUE</span>
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

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">02 — LA COMPÉTITION</span>
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

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-12">LA COMPARAISON</span>
          <div className="space-y-8">
            {[
              { name: "Ralph Lauren", value: 81, revenue: "$8.1B", isRL: true },
              { name: "Tommy Hilfiger", value: 40, revenue: "$4.8B", isRL: false },
              { name: "Lacoste", value: 25, revenue: "$3B", isRL: false },
            ].map((brand, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex items-center gap-8">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 w-40 flex-shrink-0">{brand.name}</span>
                <div className="flex-1 h-[2px] bg-white/5 relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${brand.value}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
                    className="absolute top-0 left-0 h-full"
                    style={{ backgroundColor: brand.isRL ? "#60a5fa" : "rgba(255,255,255,0.2)" }} />
                </div>
                <span className="font-mono text-[10px] text-neutral-500 w-16 text-right flex-shrink-0">{brand.revenue}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">03 — LA ZONE DE CHALANDISE</span>
            <h3 className="font-serif text-4xl md:text-6xl text-white font-light mb-4">D'ou viennent nos clients ?</h3>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }}
              className="w-full md:w-1/2 relative">
              <img src="/paris-map.jpg" alt="Paris" className="w-full object-contain invert opacity-20" />
              <svg viewBox="0 0 800 900" className="absolute inset-0 w-full h-full">
                <motion.circle cx={CX} cy={CY} r="320" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }} />
                <motion.circle cx={CX} cy={CY} r="210" fill="none" stroke="rgba(167,139,250,0.55)" strokeWidth="1"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }} />
                <motion.circle cx={CX} cy={CY} r="110" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }} />
                <motion.circle cx={CX} cy={CY} r="5" fill="#60a5fa" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} />
                <motion.circle cx={CX} cy={CY} r="10" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="1"
                  animate={{ r: [10, 25, 10], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.text x={CX + 18} y={CY - 12} fill="white" stroke="#050505" strokeWidth="3"
  paintOrder="stroke" fontSize="20" fontWeight="700" fontFamily="monospace" letterSpacing="2"
  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
  RALPH LAUREN
</motion.text>

<motion.text x={CX + 18} y={CY + 12} fill="#60a5fa" stroke="#050505" strokeWidth="2"
  paintOrder="stroke" fontSize="12" fontWeight="600" fontFamily="monospace" letterSpacing="1.2"
  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
  MADELEINE · PARIS 8E
</motion.text>
              </svg>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-8">
              {[
                { zone: "ZONE 01", time: "0 — 10 MIN", label: "ZONE PRIMAIRE", desc: "Le coeur de chalandise. Clients locaux, employés du quartier, habitués de la boutique. Fréquentation quotidienne élevée.", color: "rgba(96,165,250,0.8)" },
                { zone: "ZONE 02", time: "10 — 20 MIN", label: "ZONE SECONDAIRE", desc: "Clients parisiens qui se deplacent spécifiquement pour l'enseigne, pour la collection Polo présente en boutique. Shopping expérience recherchée et planifiée.", color: "rgba(167,139,250,0.8)" },
                { zone: "ZONE 03", time: "20 — 30 MIN", label: "ZONE TERTIAIRE", desc: "Touristes internationaux, clients de passage, provinciaux. Représente une part significative du chiffres d'affaires.", color: "rgba(255,255,255,0.4)" },
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

        <div className="mt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block mb-3">04 — WHO WALKS THROUGH THE DOOR?</span>
            <h3 className="font-serif text-4xl md:text-6xl text-white font-light">Nos clients</h3>
          </motion.div>
          {personas.map((persona, i) => (
            <PersonaCard key={i} persona={persona} />
          ))}
        </div>

      </div>
    </section>
  );
}
