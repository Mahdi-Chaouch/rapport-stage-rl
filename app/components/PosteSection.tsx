"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PosteSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const missions = [
    { num: "01", title: "Accueil Client", img: "/mission-1.jpg", desc: "En tant que premier contact avec la maison Ralph Lauren, j’accueillais chaque client en respectant les codes de la Maison. Chaque entrée en boutique était pour moi l’occasion de créer une expérience personnalisée et mémorable.", position: "object-center" },
    { num: "02", title: "Vente de A a X", img: "/mission-2.jpg", desc: "De la découverte des besoins jusqu'au closing, j'accompagnais le client dans tout son parcours d'achat à l'aide d'un conseiller de vente qualifié. Conseil produit, argumentation, chaque vente était une histoire unique en fonction du client et de la pièce Ralph Lauren. Vente de A à X car le Y représente l'encaissement dont je n'étais pas autorisé et le Z représente le clienteling.", position: "object-center" },
    { num: "03", title: "Click & Collect", img: "/mission-3.jpg", desc: "Je m’occupais également de la préparation et de la remise des commandes en ligne. Lorsqu’un client venait récupérer sa commande, il pouvait aussi essayer les produits directement en boutique. Il fallait donc l’accompagner comme n’importe quel client Ralph Lauren, avec attention et sens du service, tout en pouvant lui proposer des pièces complémentaires disponibles en magasin.", position: "object-center" },
    { num: "04", title: "Rangement & Reassort", img: "/mission-4.jpg", desc: "Organisation de la surface de vente, réassort des rayons tout au long de la journée, aider les vendeurs sur le rangement de leurs pièces proposés après la vente, refaire les piles pour qu'elles restent aussi parfaite du début à la fin", position: "object-center" },
  ];

  return (
    <section id="poste" className="relative border-b border-white/10 bg-[#050505]">

      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          II · Mon Poste et Responsabilites
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-16"
        >
          Conseiller de Vente Stagiaire
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="pinyon text-4xl sm:text-5xl md:text-6xl text-neutral-400 leading-none font-light"
        >
          Chaque matin, une nouvelle aventure.
        </motion.p>
      </div>

      <div>
        {missions.map((mission, i) => (
          <div
            key={mission.num}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative border-t border-white/10 overflow-hidden cursor-pointer"
            style={{
              height: hovered === i ? "420px" : "92px",
              transition: "height 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: hovered === i ? 1 : 0 }}
            >
              <img
                src={mission.img}
                alt={mission.title}
                className={`w-full h-full object-cover ${mission.position}`}
              />
              <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative z-10 px-6 md:px-24 h-full flex flex-col justify-center">
              <div className="flex items-baseline gap-8">
                <span className="font-serif text-3xl md:text-5xl font-light text-white/20">
                  {mission.num}
                </span>
                <h3
                  className="font-serif text-2xl md:text-4xl font-light tracking-wide transition-colors duration-300"
                  style={{ color: hovered === i ? "#ffffff" : "rgba(255,255,255,0.75)" }}
                >
                  {mission.title}
                </h3>
              </div>

              <div style={{
                maxHeight: hovered === i ? "200px" : "0px",
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? "translateY(0)" : "translateY(8px)",
                transition: "all 0.5s ease 0.1s",
                overflow: "hidden",
              }}>
                <div className="w-8 h-[1px] bg-white/20 mt-6 mb-4" />
                <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                  {mission.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
