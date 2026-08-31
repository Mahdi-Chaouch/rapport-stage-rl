"use client";

import { motion } from "framer-motion";

const entries = [
  {
    period: "Semaines 1 — 2",
    title: "L'Apprentissage",
    img: "/carnet-1.jpg",
    imgLeft: false,
    desc: "Premiers pas au sein de la boutique de la Madeleine. J'apprends le stock, les references produits, les differentes collections Polo, les codes de la maison. Chaque detail compte — des etiquettes aux cintres, de la disposition des rayons aux codes vestimentaires de l'equipe. Une immersion totale dans l'univers Ralph Lauren.",
  },
  {
    period: "Semaines 2 — 4",
    title: "Le Feu des Soldes",
    img: "/carnet-2.jpg",
    imgLeft: true,
    desc: "Les soldes d'ete battent leur plein. Etiquetage des produits, mise en avant des pieces soldees, gestion du flux client intensifie. Une periode de rush qui m'a appris a rester calme et efficace sous pression, tout en maintenant l'excellence de service propre a Ralph Lauren.",
  },
  {
    period: "Semaines 4 — 6",
    title: "Le Floor",
    img: "/carnet-3.jpg",
    imgLeft: false,
    desc: "Je prends mes marques sur le floor. Accueil client, presentation des collections, guidage dans les differents espaces — sous-sol Polo sportswear, rez-de-chaussee formel, etage femme. J'apprends a lire les besoins du client, a presenter les prix avec elegance, a accompagner chaque parcours d'achat de A a Z.",
  },
  {
    period: "Semaines 6 — 8",
    title: "Le Merch",
    img: "/carnet-4.jpg",
    img2: "/carnet-4.1.jpg",
    imgLeft: true,
    desc: "Arrivee de la nouvelle collection avec l'equipe Brand Image. Nous installons ensemble les nouvelles pieces en boutique — disposition, facing, harmonie des coloris, mise en valeur des hero pieces. Le PSR GSR aussi : tous les produits hors collection sont identifies, prepares et renvoyes. Une mission de precision.",
  },
  {
    period: "Semaines 8 — 12",
    title: "L'Autonomie",
    img: "/carnet-5.jpg",
    imgLeft: false,
    desc: "Je connais maintenant la boutique par coeur. Gestion autonome du stock, reassort des rayons, Click and Collect, accueil et vente clients. Je suis a l'aise sur le floor, je reponds aux questions avec assurance, je contribue pleinement a la vie de la boutique. Ce stage m'a transforme.",
  },
];

export default function CarnetSection() {
  return (
    <section id="carnet" className="relative border-b border-white/10 bg-[#050505]">

      {/* Header */}
      <div className="px-6 md:px-24 pt-28 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="block text-[10px] font-sans tracking-[0.4em] uppercase text-neutral-500 mb-4"
        >
          III · Carnet de Bord
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-none mb-6"
        >
          Journal de Stage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="pinyon text-3xl sm:text-4xl md:text-5xl text-neutral-400 font-light"
        >
          Trois mois au coeur de la maison.
        </motion.p>
      </div>

      {/* Entries */}
      <div className="space-y-0">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={`flex flex-col ${entry.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} border-t border-white/10 min-h-[60vh]`}
          >
            {/* Image(s) */}
            <div className="w-full md:w-1/2 overflow-hidden relative">
              <img
                src={entry.img}
                alt={entry.title}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "50vh" }}
              />
              {"img2" in entry && entry.img2 && (
                <img
                  src={entry.img2}
                  alt={entry.title}
                  className="absolute bottom-4 right-4 w-1/3 object-cover shadow-2xl border border-white/10"
                  style={{ height: "35%" }}
                />
              )}
            </div>

            {/* Texte */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-16 ${i % 2 === 0 ? "bg-[#050505]" : "bg-[#080808]"}`}>
              <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-neutral-500 mb-4">
                {entry.period}
              </span>
              <h3 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-6">
                {entry.title}
              </h3>
              <div className="w-10 h-[1px] bg-white/20 mb-8" />
              <p className="font-serif text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                {entry.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
